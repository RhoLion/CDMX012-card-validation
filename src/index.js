import validator from "./validator.js";


 
function isCardValid() {
  //invocamos los datos ingresados por el usuario 
  let cardNumber = document.getElementById("cardNumberOrigin");
  //llamamos a la función que valida el tamaño de los datos ingresados
  let sizeValid = isCardSizeValid(cardNumber.value);
  //si es correcto el tamaño de los datos, invocamos a la función isValid
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
  //si la validación retorna verdadero, enviamos mensaje al usuario
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
  //invocamos los datos ingresados por el usuario 
    let cardNumberInput = document.getElementById("cardNumberInput");
    let cardNumberArray = Array.from(e.target.value);//hacemos referencia al valor del objeto
    
  //si validamos que el usuario ingrese sólo números, entonces llamamos a nuestra función Maskify
    if (e.key !== undefined && e.keyCode >= 48 && e.keyCode <= 57) {
      let newMaskify = validator.maskify(cardNumberInput.value);
      //asignamos el valor enmascarado al input
      document.getElementById("cardNumberOrigin").value += e.key;
      cardNumberInput.value = newMaskify;
    } else {
    //si el usuario ingresa datos distintos de [0-9] lo removemos y unimos los datos existentes
      cardNumberArray.splice(-1); 
      cardNumberInput.value = cardNumberArray.join('');
    }
}

//invocamos los datos ingresados por el usuario y agregamos el evento
let cardNumberInput = document.getElementById("cardNumberInput");
cardNumberInput.addEventListener("keyup", maskifyEvent);
//agregamos evento click al input button 
let submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", isCardValid);