function checkEmptyFields(formName) {
    const form = document.forms[formName];
    const inputs = form.getElementsByTagName('input');
    let isEmpty = false;
  
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value.trim() === '') {
        isEmpty = true;
        break;
      }
    }
  
    return isEmpty;
  }
  
  function checkValidation() {
    const formName = 'login-form';
    if (checkEmptyFields(formName)) {
      window.alert("Please enter all details.");
      return;
    }
  
    const email = document.forms[formName]['email'].value;
    const password = document.forms[formName]['pass'].value;
    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
    if (!email.match(emailPattern) || password.length < 8) {
      window.alert("Please enter valid credentials.");
    }
    
    if(!validcap()){

        return;

    }
        else {
    
      document.forms[formName].submit();
      window.alert("Login Successed.")
    }

    
  }
  
  function checkValidate() {
    const formName = 'signup-form';
    if (checkEmptyFields(formName)) {
      window.alert("Please enter all details.");
      return;
    }
  
    const email = document.forms[formName]['email'].value;
    const password = document.forms[formName]['pswd'].value;
    const password2 = document.forms[formName]['pass2'].value;
    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
    if (!email.match(emailPattern) || password.length < 8 || password !== password2) {
      window.alert("Please enter valid credentials.");
    } else {
   
      document.forms[formName].submit();
      window.alert("SignUp successed")
    }
  }
  function cap(){
    var alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V'
                 ,'W','X','Y','Z','1','2','3','4','5','6','7','8','9','0','a','b','c','d','e','f','g','h','i',
                 'j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', '!','@','#','$','%','^','&','*','+'];
                 var a = alpha[Math.floor(Math.random()*71)];
                 var b = alpha[Math.floor(Math.random()*71)];
                 var c = alpha[Math.floor(Math.random()*71)];
                 var d = alpha[Math.floor(Math.random()*71)];
                 var e = alpha[Math.floor(Math.random()*71)];
                 var f = alpha[Math.floor(Math.random()*71)];

                 var final = a+b+c+d+e+f;
                 document.getElementById("capt").value=final;
               }
               function validcap(){
                var stg1 = document.getElementById('capt').value;
                var stg2 = document.getElementById('textinput').value;
                if(stg1==stg2){
                  return true;
                }else{
                  alert("Please enter a valid captcha");
                  return false;
                }
               }
  
  function submitForm() {
       checkValidation();

       if(!validcap()){
        return;
       }
  }
  