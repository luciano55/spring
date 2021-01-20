package com.example.demo;

public class MiString {

  public String reverse(String cadena) {

    int myFinal = cadena.length();
    int contador = 2;
    String resultado = Character.toString(cadena.charAt(0));

    while (myFinal >= contador) {
      resultado = Character.toString(cadena.charAt(contador)) + resultado;
      contador++;
    }

    return resultado;
  }
}
