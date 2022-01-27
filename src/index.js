import validator from "./validator.js";

//Acá escribirás todo el código que tenga que ver con la interacción del DOM
//(seleccionar, actualizar y manipular elementos del DOM y eventos).
//Es decir, en este archivo deberás invocar las funciones isValid y maskify
// según sea necesario para actualizar el resultado en la pantalla (UI).

 
function isCardValid() {
  
  let cardNumber = document.getElementById("cardNumberOrigin");
  let sizeValid = isCardSizeValid(cardNumber.value);
  if (sizeValid == true){
    let valid = validator.isValid(cardNumber.value);
    updateResult(valid);
  } else{
    document.getElementById("incompleteCard").innerText =
    "La tarjeta debe tener de 13 a 20 dígitos";
    document.getElementById("invalidResult").innerText = "";
    document.getElementById("validResult").innerText = "";
  }
  
}

function isCardSizeValid(cardNumber) {
  
  if (cardNumber.length < 11 || cardNumber.length > 20) {
    return false;
  } else {
    return true;
  }
}

function updateResult(valid) {
  if (valid == true) {
    document.getElementById("validResult").innerText =
      "Tarjeta válida, puede continuar con la contratación";
      document.getElementById("invalidResult").innerText = "";
      document.getElementById("incompleteCard").innerText = "";
  } else {
    document.getElementById("invalidResult").innerText =
      "Tarjeta invalida, intente nuevamente";
      document.getElementById("validResult").innerText = "";
      document.getElementById("incompleteCard").innerText = "";
  }
}

function maskifyEvent(e) {
    let cardNumberInput = document.getElementById("cardNumberInput");
    let cardNumberArray = Array.from(e.target.value);
    
    if (e.key !== undefined && e.keyCode >= 48 && e.keyCode <= 57) {
      let newMaskify = validator.maskify(cardNumberInput.value);
      //asignar el valor enmascarado al input
      document.getElementById("cardNumberOrigin").value += e.key;
      cardNumberInput.value = newMaskify;
    } else {
      cardNumberArray.splice(-1); 
      cardNumberInput.value = cardNumberArray.join('');
    }
}

let cardNumberInput = document.getElementById("cardNumberInput");
cardNumberInput.addEventListener("keyup", maskifyEvent);

let submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", isCardValid);