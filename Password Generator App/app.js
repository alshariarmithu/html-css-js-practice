const passwordBox = document.getElementById("Password");
const length = 12;
const upperCase = "ASDFGHJKLZXCVBNMQWERTYUIOP";
const lowerCase = "asdfghjklqwertyuiopzxcvbnm";
const number = "1234567890";
const symbols = "!@#$%^&*-/";

function generate(){
    let pass = "";
    for(let i = 0;i<3;i++)
    {
        let u = Math.floor(Math.random()*upperCase.length);
        let l = Math.floor(Math.random()*lowerCase.length);
        let n = Math.floor(Math.random()*number.length);
        let s = Math.floor(Math.random()*symbols.length);
        pass+=upperCase[u];
        pass+=lowerCase[l];
        pass+=number[n];
        pass+=symbols[s];
    }
    passwordBox.value = pass;
    pass="";
}

function copyPassword()
{
    passwordBox.select();
    document.execCommand("copy");
}

