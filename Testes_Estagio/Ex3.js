function inverterString(str) {
    let novaStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      novaStr += str[i];
    }
    return novaStr;
  }
  
  // Exemplo de uso
  let minhaStr = "olá mundo";
  let strInvertida = inverterString(minhaStr);
  console.log(strInvertida); // output: "odnum álo"