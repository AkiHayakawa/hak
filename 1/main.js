
let objold = [
    {name: 'alex',password: 1,age: '12',isLogin: false,},
     {name: 'rick',password: 2,age: '12',isLogin: false,},

 ];
 function registerUser(){
    let name = prompt("введите имя")
    function checkname(){
        if(objold.find((i) => i.name === name)){
            alert("имя уже занято")
            registerUser()
        }
    };checkname()
    
    let age = prompt("введите возраст")
    let password = prompt("введите пароль")
let password1 = prompt("повторите пароль")
    function checkPasswords(){
        if(password != password1){
            alert("пароль неверный")
            registerUser()
        }else {
            alert("пароль совпал")
        }
    };checkPasswords()
   
  let newobj = {
    name: name,
    age: age,
    password:password,
    isLogin:false,
  }
  objold.push(newobj)





  
 };registerUser()
 console.log(objold)

 function loginUser(){
    let login = confirm("войти в аккаунт?")
    if(login){
        if(objold.at(-1).isLogin === false){
            let name = prompt("введите имя")
            if( name === objol.at(-1).name){
                let password = prompt("введите пароль")
                if(password === objold.at(-1).password){
                    objold.at(-1).isLogin = true;
                    alert("вы вошли в аккунт")
                }else {
                    alert("вы не смогли")
                    loginUser()
                }
            }else{
                alert("проверьте пароль");
                changeInfoUser()

            } 
            
        }else if(objold.at(-1).isLogin === false){
            alert("вы должны войти в аккаунт")
            loginUser()
            changeInfoUser()
        }
    }else (alert("ok"))
 };changeInfoUser()
  function exitUser(){
    let exit = confirm("войти в аккаунт?")
    if(exit){
        if(objold.at(-1).isLogin === true){
            objold.at(-1).isLogin = false;
            alert("вы вышли")
        }else {
            alert("ok")
        }
    }
  };exitUser()