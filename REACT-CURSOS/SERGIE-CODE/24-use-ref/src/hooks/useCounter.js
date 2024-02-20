import React from 'react'
import { useState } from 'react'

export const useCounter = (valorInicial = 0) => { // si no se envía el valor, por defecto es cero
  
  const [contador, setContador] = useState(valorInicial)
  
  const incrementar = (valor = 1) => { // por defecto si no mandara nada, se incrementa en 1
    setContador(contador + valor)
  }

  const decrementar = (valor = 1) => {
    setContador(contador - valor)
  }
  
  const resetear = () => {
    setContador(0)
  }
  return {
    contador,
    incrementar,
    decrementar,
    resetear
  }

}
