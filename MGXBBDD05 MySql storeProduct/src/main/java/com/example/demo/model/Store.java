package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Store {
  @Id
  private Long idProducto;
  private String referencia;
  private String modelo;

  public Long getIdProducto() {
    return idProducto;
  }

  public void setIdProducto(Long idProducto) {
    this.idProducto = idProducto;
  }

  public String getReferencia() {
    return referencia;
  }

  public void setReferencia(String referencia) {
    this.referencia = referencia;
  }

  public String getModelo() {
    return modelo;
  }

  public void setModelo(String modelo) {
    this.modelo = modelo;
  }

  public Store(Long idProducto, String referencia, String modelo) {
    this.idProducto = idProducto;
    this.referencia = referencia;
    this.modelo = modelo;
  }

}
