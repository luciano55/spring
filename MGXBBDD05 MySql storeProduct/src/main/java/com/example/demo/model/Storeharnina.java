package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Storeharnina {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private long id;

  private int idProducto;
  private String referencia;
  private String modelo;

  public int getIdProducto() {
    return idProducto;
  }

  public void setIdProducto(int idProducto) {
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

  public Storeharnina(Long id, int idProducto, String referencia, String modelo) {
    this.id = id;
    this.idProducto = idProducto;
    this.referencia = referencia;
    this.modelo = modelo;
  }

  public Storeharnina() {
  }

  public Storeharnina(int idProducto, String referencia, String modelo) {

    this.idProducto = idProducto;
    this.referencia = referencia;
    this.modelo = modelo;
  }
}
