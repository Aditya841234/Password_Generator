let inputSlider = document.getElementById("inputSlider")
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase= document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("specials");
let genBtn = document.getElementById("genBtn");
let copyIcon = document.getElementById("copyIcon")
//showing value at the intitial state  
sliderValue.textContent = inputSlider.value;

inputSlider.addEventListener("input",()=>{
    sliderValue.textContent = inputSlider.value;
});

genBtn.addEventListener('click', ()=>{
    passBox.value = generatePassword();
    //if anyone click on the generate password than the value of the passBox will be change on the basis of the changePassword() function
})

let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "~!%^&*@#$";


//function for generating password
function generatePassword(){
   let generatedPassword = "";
   let allChars = "";

  

      allChars += lowercase.checked ? lowerChars : "";
      allChars += uppercase.checked ? upperChars : "";
      allChars += numbers.checked ? allNumbers : "";
      allChars += symbols.checked ? allSymbols : "";
  
   
    if(allChars == "" || allChars.length == 0){
       return generatedPassword;
    }


   let i =1;
   while(i<=inputSlider.value){
          generatedPassword  += allChars.charAt(Math.floor(Math.random()*allChars.length));
          i++;
   }

    return generatedPassword;  

}

copyIcon.addEventListener('click', ()=>{
   if(passBox.value != "" || passBox.value.length >= 1){
     navigator.clipboard.writeText(passBox.value);
     copyIcon.innerText = "check";
     copyIcon.title = "Password copied";

     setTimeout(() => {
        copyIcon.innerText = "content_copy";
        copyIcon.title = "";
     }, 3000);
   }
    

});