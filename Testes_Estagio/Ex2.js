function verificaFibonacci(num) {
    let anterior = 0
    let atual = 1
    let proximo
  
    while (atual < num) {
      proximo = anterior + atual
      anterior = atual
      atual = proximo
    }
  
    if (atual === num) {
      console.log(num + " pertence à sequência de Fibonacci.")
    } else {
      console.log(num + " não pertence à sequência de Fibonacci.")
    }
  }

  verificaFibonacci(21) // 21 pertence à sequência de Fibonacci.
  verificaFibonacci(25) // 25 não pertence à sequencia de Fibonnaci