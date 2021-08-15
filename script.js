let input = document.querySelector('.input'),
   output = document.querySelector('.output'),
   clear = document.querySelector('.clear'),
   copy = document.querySelector('.copy');


//rot13 - функция шифра 
function rot13(str) {
   let resultStr = "";

   let newStr = str.toUpperCase().split('');

   let arr1 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"];
   let arr2 = ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

   for (let i = 0; i < newStr.length; i++) {
      if (newStr[i] == " ") {
         resultStr += " ";
      }
      arr1.forEach((item, index) => {
         if (item == newStr[i]) {
            resultStr += arr2[index];
         }
      });
      arr2.forEach((item, index) => {
         if (item == newStr[i]) {
            resultStr += arr1[index];
         }
      });
   }
   return resultStr;
}

function clearInpt() {
   clear.addEventListener('click', () => {
      input.value = "";
      output.value = "";
   });
}
clearInpt();


function transformText () {
   input.addEventListener('input', () => {
      output.value = rot13(input.value);
   });
}
transformText();


function copyText () {
   copy.addEventListener('click', () => {
      if (output.value != " ") {
         output.select();
         document.execCommand("copy");
      }
   });
}
copyText();


//code by Roman Zhukov



