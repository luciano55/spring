package com.example.demo;

import java.util.Collection;
import java.util.Optional;

import com.example.demo.model.Productstore;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StoreRESTController {
  @Autowired
  private StoreproductRepository repository;

  @RequestMapping(value = "/storerest/", method = RequestMethod.GET)
  public Collection<Productstore> productosAll(StoreproductRepository storeproductRepository) {
    return repository.findAll();
  }

  @RequestMapping(value = "/storerest/{id}", method = RequestMethod.GET)
  public Optional<Productstore> getAnuncio(@PathVariable long id) {

    return repository.findById(id);

  }
}
