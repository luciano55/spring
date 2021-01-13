package com.example.demo;

import javax.annotation.PostConstruct;

import com.example.demo.model.Storeharnina;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class StoreController {

  @Autowired
  private StoreproductRepository repository;

  @PostConstruct
  public void init() {
    // repository
    // .save(new Storeproduc("APP-594-APP", "APPLE IPHONE 11 64GB RED", 2L,
    // "Globomatik", 5L, 100F, 11, 0, "6GB RAM"));
    repository.save(new Storeharnina(3, "APP-594-APP", "APPLE IPHONE 11 64GB RED"));

  }

  @RequestMapping("/store")

  public String store(Model model) {

    model.addAttribute("productos", repository.findAll());

    return "store";
  }

}
