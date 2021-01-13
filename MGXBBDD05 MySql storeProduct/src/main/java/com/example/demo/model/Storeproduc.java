package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Storeproduc {
  private String referencia;
  private String modelo;
  private Integer idProveedor;
  private String nombreProveedor;
  @Id
  private Long idProducto;
  private Float precio;
  private Integer stock;
  private Float descuento;
  private String memoria;

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

  public Integer getIdProveedor() {
    return idProveedor;
  }

  public void setIdProveedor(Integer idProveedor) {
    this.idProveedor = idProveedor;
  }

  public String getNombreProveedor() {
    return nombreProveedor;
  }

  public void setNombreProveedor(String nombreProveedor) {
    this.nombreProveedor = nombreProveedor;
  }

  public Long getIdProducto() {
    return idProducto;
  }

  public void setIdProducto(Long idProducto) {
    this.idProducto = idProducto;
  }

  public Float getPrecio() {
    return precio;
  }

  public void setPrecio(Float precio) {
    this.precio = precio;
  }

  public Integer getStock() {
    return stock;
  }

  public void setStock(Integer stock) {
    this.stock = stock;
  }

  public Float getDescuento() {
    return descuento;
  }

  public void setDescuento(Float descuento) {
    this.descuento = descuento;
  }

  public String getMemoria() {
    return memoria;
  }

  public void setMemoria(String memoria) {
    this.memoria = memoria;
  }

  public Storeproduc(String referencia, String modelo, Integer idProveedor, String nombreProveedor, Long idProducto,
      Float precio, Integer stock, Float descuento, String memoria) {
    this.referencia = referencia;
    this.modelo = modelo;
    this.idProveedor = idProveedor;
    this.nombreProveedor = nombreProveedor;
    this.idProducto = idProducto;
    this.precio = precio;
    this.stock = stock;
    this.descuento = descuento;
    this.memoria = memoria;
  }

}
