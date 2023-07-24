let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox=document.getElementById("passBox");
let lowercase=document.getElementById("lowercase");
let uppercase=document.getElementById("uppercase");
let Numbers=document.getElementById("Numbers");
let Symbols=document.getElementById("Symbols");
let genBtn=document.getElementById("genBtn");
let copyIcon=document.getElementById("copyIcon");
let strenthMeter=document.getElementById("strenthMeter");
let option_1=document.getElementById("option_1");
let option_2=document.getElementById("option_2");
let option_3=document.getElementById("option_3");
let option_4=document.getElementById("option_4");
let option_5=document.getElementById("option_5");
let option_6=document.getElementById("option_6");
// let btn_primary=document.getElementById("btn-primary");
let btn=document.getElementById("btn");
let nofocc=document.getElementById("nofocc");
let cb=document.getElementsByClassName("cb");
// let will=document.getElementsByClassName("will");
let will1=document.getElementById("will1");
let will2=document.getElementById("will2");
let will3=document.getElementById("will3");
let will4=document.getElementById("will4");
let pass_gen=document.getElementById("pass_gen");


// Showing input slider value
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input',()=>{
    sliderValue.textContent=inputSlider.value;
});

// genBtn.addEventListener('click',()=>{
//     if (nofocc.value != 0) {
//     passBox.value = generate_equal_charactor();
        
//     }
//     else{
//     passBox.value = generatePassword();
//     }
    
// })
genBtn.addEventListener('click',()=>{
    passBox.value = generatePassword();
})





let lowerChars = "abcdefghijklmnopqrstuvwxyz"
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789";
let symbols ="~!@#$%^&*+-*/";
// Fuction to generatePassword

function generatePassword(){
    let genPassword = "";
    let allChars = "";
    allChars += lowercase.checked ? lowerChars:"";
    allChars += uppercase.checked ? upperChars:"";
    allChars += Numbers.checked ? numbers:"";
    allChars += Symbols.checked ? symbols:""; 

    if(allChars == "" || allChars.length == 0){
        return genPassword;
    }

    let i=1;
    while(i<=inputSlider.value){
       genPassword += allChars.charAt(Math.floor(Math.random()  * allChars.length));
       i++;
    }
    return genPassword;
}

copyIcon.addEventListener('click',()=>{
    if(passBox.value != "" || passBox.value.length>=1){
        navigator.clipboard.writeText(passBox.value);
        copyIcon.innerText="check";
        copyIcon.title="Password Copied";


        setTimeout(()=>{
            copyIcon.innerHTML="content_copy";
            copyIcon.title="";

        },2000);
    }
});

function generate_equal_charactor() {
    // let lowerChars = "abcdefghijklmnopqrstuvwxyz"
    // let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // let numbers = "0123456789";
    // let symbols ="~!@#$%^&*+-*/";
    // let nofocc=document.getElementById("nofocc");

    let ln=nofocc.value;

    let allChars="";
    for (let j = 0; j < ln; j++) {
        allChars += lowerChars.charAt(Math.floor(Math.random()  * lowerChars.length));  
    }

    for(let j = 0; j < ln; j++){
        allChars += upperChars.charAt(Math.floor(Math.random()  * upperChars.length));  
    }

    for (let j = 0; j < ln; j++) {
        allChars += numbers.charAt(Math.floor(Math.random()  * numbers.length));    
    }

    for (let j = 0; j < ln; j++) {
        allChars += symbols.charAt(Math.floor(Math.random()  * symbols.length));    
    }

    inputSlider.value=allChars.length;
    sliderValue.innerText=allChars.length;
    return allChars;
    
}

function AtLeastTwoSpecialCharactor() {
    
        let genPassword = "";
        let allChars = "";
      
        allChars += lowercase.checked ? lowerChars:"";
        allChars += uppercase.checked ? upperChars:"";
        allChars += Numbers.checked ? numbers:"";
        allChars += Symbols.checked ? symbols:"";
      
        // Ensure at least two special symbols
        if (Symbols.checked) {
          genPassword += symbols.charAt(Math.floor(Math.random()  * symbols.length));
          genPassword += symbols.charAt(Math.floor(Math.random()  * symbols.length));
        }
      
        // If no character type is selected, return an empty password
        if (genPassword === "") {
          return genPassword;
        }
      
        // Fill the remaining characters of the password
        const remainingLength = inputSlider.value - genPassword.length;
        for (let i = 1; i <= remainingLength; i++) {

          genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
        //   console.log(genPassword);
        }
        // gen=genPassword;
        // Shuffle the password characters randomly
        // genPassword = shuffleString(genPassword);
      
        return genPassword;

    
         
  }

function OneCharacterOfEach(){
    
        let genPassword = "";
        let allChars = "";
      
        // Define character sets
        // let lowerChars = "abcdefghijklmnopqrstuvwxyz"
        // let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        // let numbers = "0123456789";
        // let symbols ="~!@#$%^&*+-*/";
      
        // Add characters to the 'allChars' string based on selected options
        allChars += lowercase.checked ? lowerChars:"";
        allChars += uppercase.checked ? upperChars:"";
        allChars += Numbers.checked ? numbers:"";
        allChars += Symbols.checked ? symbols:"";
        // Ensure at least one character of each type
        if (lowercase.checked) genPassword += lowerChars.charAt(Math.floor(Math.random()  * lowerChars.length));
        if (uppercase.checked) genPassword += upperChars.charAt(Math.floor(Math.random()  * upperChars.length));
        if (Numbers.checked) genPassword += numbers.charAt(Math.floor(Math.random()  * numbers.length));
        if (Symbols.checked) genPassword += symbols.charAt(Math.floor(Math.random()  * symbols.length));
      
        // If no character type is selected, return an empty password
        if (genPassword === "") {
          return genPassword;
        }
      
        // Fill the remaining characters of the password
        let remainingLength = inputSlider.value - genPassword.length;
        for (let i = 1; i <= remainingLength; i++) {
          genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
        }
      
        // Shuffle the password characters randomly
        // genPassword = shuffleString(genPassword);
      
        return genPassword;
    

}

function generatePasswordNoRepeatingCharacters(){
       let allChars = "";
       // ... Define character sets (same as before) ...

       // Add characters to the 'allChars' string based on selected options
        allChars += lowercase.checked ? lowerChars:"";
        allChars += uppercase.checked ? upperChars:"";
        allChars += Numbers.checked ? numbers:"";
        allChars += Symbols.checked ? symbols:"";

       // If no character type is selected, return an empty password
       if (allChars === "") {
         return "";
       }

       // Generate the password with no repeating characters
       let genPassword = "";
       while (genPassword.length < parseInt(inputSlider.value)) {
         const char = allChars.charAt(Math.floor(Math.random() * allChars.length));
         if (genPassword.indexOf(char) === -1) {
           genPassword += char;
         }
  }

  return genPassword;
}

function generatePasswordNoConsecutiveCharacters(){
        let allChars = "";
        // ... Define character sets (same as before) ...
  
        // Add characters to the 'allChars' string based on selected options
        allChars += lowercase.checked ? lowerChars : "";
        allChars += uppercase.checked ? upperChars : "";
        allChars += Numbers.checked ? numbers : "";
        allChars += Symbols.checked ? symbols : "";
  
        // If no character type is selected, return an empty password
        if (allChars === "") {
          return "";
        }
  
        // Generate the password with no consecutive characters
        let genPassword = allChars.charAt(Math.floor(Math.random() * allChars.length));
        while (genPassword.length < parseInt(inputSlider.value)) {
          const prevChar = genPassword.charAt(genPassword.length - 1);
          const availableChars = allChars.replace(prevChar, '');
          const char = availableChars.charAt(Math.floor(Math.random() * availableChars.length));
          genPassword += char;
        }
  
        return genPassword;
}

function userwill(){
    let allChars="";

    for (let j = 0; j < will1.value; j++) {
        allChars += lowerChars.charAt(Math.floor(Math.random()  * lowerChars.length));  
    }

    for(let j = 0; j < will2.value; j++){
        allChars += upperChars.charAt(Math.floor(Math.random()  * upperChars.length));  
    }

    for (let j = 0; j < will3.value; j++) {
        allChars += numbers.charAt(Math.floor(Math.random()  * numbers.length));    
    }

    for (let j = 0; j < will4.value; j++) {
        allChars += symbols.charAt(Math.floor(Math.random()  * symbols.length));    
    }

    inputSlider.value=allChars.length;
    sliderValue.innerText=allChars.length;
    return allChars;
}


// genBtn.addEventListener('click',()=>{


//     let length_of_Password =passBox.value.length;
//     if (length_of_Password == 0 || length_of_Password <= 4){
//         strenthMeter.innerHTML = "Weak";
//         strenthMeter.style.color = "red";
//     } else if (length_of_Password <= 6) {
//         strenthMeter.innerHTML = "Moderate";
//         strenthMeter.style.color = "orange";
//     } else if (length_of_Password <= 8) {
//         strenthMeter.innerHTML = "Strong";
//         strenthMeter.style.color = "green";
//     } else {
//         strenthMeter.innerHTML = "Very Strong";
//         strenthMeter.style.color = "darkgreen";
//     }
// })

function load() {
        lowercase.checked = false;
        uppercase.checked = false;
        Numbers.checked = false;
        Symbols.checked = false;
        inputSlider.value=1;
        sliderValue.innerText=1;
        nofocc.value=0;
        passBox.value=null;

}


function options1(){
    option_1.addEventListener("click",()=>{
        lowercase.checked = true;
        uppercase.checked = true;
        Numbers.checked = true;
        Symbols.checked = true;
        inputSlider.value=12;
        sliderValue.innerText="12";
        btn.innerText="At least 12 characters long (the longer, the better)";
        nofocc.style.display="none";

        genBtn.addEventListener('click',()=>{
            passBox.value = generatePassword();

            let length_of_Password =passBox.value.length;
            if (length_of_Password == 0 || length_of_Password <= 4){
                strenthMeter.innerHTML = "Weak";
                strenthMeter.style.color = "red";
            } else if (length_of_Password <= 6) {
                strenthMeter.innerHTML = "Moderate";
                strenthMeter.style.color = "orange";
            } else if (length_of_Password <= 8) {
                strenthMeter.innerHTML = "Strong";
                strenthMeter.style.color = "green";
            } else {
                strenthMeter.innerHTML = "Very Strong";
                strenthMeter.style.color = "darkgreen";
            }
        });

    });
}
function options2(){
    // let nofocc=document.getElementById("nofocc");
    let ln=nofocc.value.length;
    btn.innerText="Numbers Of Occurance :-";
    nofocc.style.display="block";
    lowercase.checked = true;
    uppercase.checked = true;
    Numbers.checked = true;
    Symbols.checked = true;
    
    genBtn.addEventListener('click',()=>{
        passBox.value = generate_equal_charactor();

        let length_of_Password =passBox.value.length;
        if (length_of_Password == 0 || length_of_Password <= 4){
            strenthMeter.innerHTML = "Weak";
            strenthMeter.style.color = "red";
        } else if (length_of_Password <= 6) {
            strenthMeter.innerHTML = "Moderate";
            strenthMeter.style.color = "orange";
        } else if (length_of_Password <= 8) {
            strenthMeter.innerHTML = "Strong";
            strenthMeter.style.color = "green";
        } else {
            strenthMeter.innerHTML = "Very Strong";
            strenthMeter.style.color = "darkgreen";
        }

        
    });

}
function options3(){
    // removeEventListener.genBtn();
    // location.reload;
    btn.innerText="Password should have at least 2 special symbols";
    nofocc.style.display="none";
    lowercase.checked = true;
    uppercase.checked = true;
    Numbers.checked = true;
    Symbols.checked = true;

    genBtn.addEventListener('click',()=>{
        passBox.value = AtLeastTwoSpecialCharactor();

        let length_of_Password =passBox.value.length;
        if (length_of_Password == 0 || length_of_Password <= 4){
            strenthMeter.innerHTML = "Weak";
            strenthMeter.style.color = "red";
        } else if (length_of_Password <= 6) {
            strenthMeter.innerHTML = "Moderate";
            strenthMeter.style.color = "orange";
        } else if (length_of_Password <= 8) {
            strenthMeter.innerHTML = "Strong";
            strenthMeter.style.color = "green";
        } else {
            strenthMeter.innerHTML = "Very Strong";
            strenthMeter.style.color = "darkgreen";
        }
    });

}
function options4(){
    btn.innerText="Password Should have at least one character of each";
    nofocc.style.display="none";
    lowercase.checked = true;
    uppercase.checked = true;
    Numbers.checked = true;
    Symbols.checked = true;

    genBtn.addEventListener('click',()=>{
        passBox.value = OneCharacterOfEach();

        let length_of_Password =passBox.value.length;
        if (length_of_Password == 0 || length_of_Password <= 4){
            strenthMeter.innerHTML = "Weak";
            strenthMeter.style.color = "red";
        } else if (length_of_Password <= 6) {
            strenthMeter.innerHTML = "Moderate";
            strenthMeter.style.color = "orange";
        } else if (length_of_Password <= 8) {
            strenthMeter.innerHTML = "Strong";
            strenthMeter.style.color = "green";
        } else {
            strenthMeter.innerHTML = "Very Strong";
            strenthMeter.style.color = "darkgreen";
        }
    });
}
function options5(){
    document.getElementById("btn").innerText = "Password should not contain repeating characters";
    nofocc.style.display="none";
    lowercase.checked = true;
    uppercase.checked = true;
    Numbers.checked = true;
    Symbols.checked = true;

    genBtn.addEventListener('click',()=>{
        passBox.value = generatePasswordNoRepeatingCharacters();

        let length_of_Password =passBox.value.length;
        if (length_of_Password == 0 || length_of_Password <= 4){
            strenthMeter.innerHTML = "Weak";
            strenthMeter.style.color = "red";
        } else if (length_of_Password <= 6) {
            strenthMeter.innerHTML = "Moderate";
            strenthMeter.style.color = "orange";
        } else if (length_of_Password <= 8) {
            strenthMeter.innerHTML = "Strong";
            strenthMeter.style.color = "green";
        } else {
            strenthMeter.innerHTML = "Very Strong";
            strenthMeter.style.color = "darkgreen";
        }
    });
}
function options6(){
    document.getElementById("btn").innerText = "Password should not contain consecutive characters";
    nofocc.style.display="none";
    lowercase.checked = true;
    uppercase.checked = true;
    Numbers.checked = true;
    Symbols.checked = true;

    genBtn.addEventListener('click',()=>{
        passBox.value = generatePasswordNoConsecutiveCharacters();

        let length_of_Password =passBox.value.length;
        if (length_of_Password == 0 || length_of_Password <= 4){
            strenthMeter.innerHTML = "Weak";
            strenthMeter.style.color = "red";
        } else if (length_of_Password <= 6) {
            strenthMeter.innerHTML = "Moderate";
            strenthMeter.style.color = "orange";
        } else if (length_of_Password <= 8) {
            strenthMeter.innerHTML = "Strong";
            strenthMeter.style.color = "green";
        } else {
            strenthMeter.innerHTML = "Very Strong";
            strenthMeter.style.color = "darkgreen";
        }
    });
}

function options7(){
    document.getElementById("btn").innerText = "Select The Ocurrence Of Characters";
    nofocc.style.display="none";
    lowercase.style.display="none";
    uppercase.style.display="none";
    Numbers.style.display="none";
    Symbols.style.display="none";
    will1.style.display="block";
    will2.style.display="block";
    will3.style.display="block";
    will4.style.display="block";
    // inputSlider.style.display="none";
    // pass_gen.style.display="none";

    genBtn.addEventListener('click',()=>{
        passBox.value = userwill();


        let length_of_Password =passBox.value.length;
        if (length_of_Password == 0 || length_of_Password <= 4){
            strenthMeter.innerHTML = "Weak";
            strenthMeter.style.color = "red";
        } else if (length_of_Password <= 6) {
            strenthMeter.innerHTML = "Moderate";
            strenthMeter.style.color = "orange";
        } else if (length_of_Password <= 8) {
            strenthMeter.innerHTML = "Strong";
            strenthMeter.style.color = "green";
        } else {
            strenthMeter.innerHTML = "Very Strong";
            strenthMeter.style.color = "darkgreen";
        }
    });

}





  





  


