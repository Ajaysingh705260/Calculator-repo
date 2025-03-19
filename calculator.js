
let input = document.querySelector("#inputbtn");
let btn = document.querySelectorAll("button");

let btnArray = Array.from(btn);

let string = '';

btnArray.forEach((event) => {

   event.addEventListener("click", (a) => {

      if (a.target.innerHTML === "Del") {
         string = string.substring(0, string.length-1);
         input.value = string;

      } else if (a.target.innerHTML === "AC") {
         string = '';
         input.value = string;

      }else if (a.target.innerHTML === "="){
         string= eval(string);
         input.value = string;

      }else {
         string += a.target.innerHTML;
         input.value = string;
      }

   })

});


