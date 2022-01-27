const validator = {

  isValid(cardNumber) {

     //colocamos los números que ingresó el usuario en orden inverso y los cambiamos a string
 
     let num = Array.from(cardNumber);
     num.reverse();
     let x = "";
     //con los números invertidos corremos arreglo para aplicar multiplicación
     //en posición par y validamos si el número es mayor a 10. (si se cumple le restamos 9)
     for (let i = 0; i < num.length; i++) {
       if ((i+1) % 2 == 0 && i != 0) {
         if (num[i] * 2 >= 10) {
           x = num[i] * 2 - 9;
           num[i] = x;
         } else {
           num[i] *= 2;
         }
       }
     }
 
     //creamos otro arreglo para sumar los números impares y los nuevos digitos de primer arreglo
     //y los cambiamos a números
     let total = 0;
     for (let i = 0; i < num.length; i++) {
       total += Number(num[i]);
     }
     if (total % 10 == 0){
       return true;
     }else{
       return false;
     }
     
 },
 
 
  maskify(cardNumberInput) {

   let cardNumberArray = Array.from(cardNumberInput);
     let newMaskify = "";  
     for (let i = 0; i < cardNumberArray.length; i++) {
       if ( i < cardNumberArray.length - 4) {
         newMaskify += "#";
       } else {
         newMaskify += cardNumberArray[i];
       }
     }
   return newMaskify;
 },
 
}



export default validator;
