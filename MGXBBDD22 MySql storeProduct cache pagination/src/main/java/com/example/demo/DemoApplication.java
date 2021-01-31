package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;

@SpringBootApplication
public class DemoApplication {

  public static void main(String[] args) {

    SpringApplication.run(DemoApplication.class, args);
    RequestContextHolder.currentRequestAttributes().setAttribute("sizeVisor", 4, RequestAttributes.SCOPE_SESSION);

  }

}
