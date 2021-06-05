let myImage = document.querySelector('img');
let mybutton = document.querySelector('button');
let myheading = document.querySelector('h1');
myImage.onclick = function(){
    let mysrc = myImage.getAttribute('src');
    if(mysrc === "images/Firefox.png")
    {myImage.setAttribute('src', 'images/mayun.jpg');}
    else
    {myImage.setAttribute('src', 'images/Firefox.png');    }
    };

function setusername()
{
    let myname = prompt("请输入你的名字：");
    if(!myname || myname === null )
    {setusername();}
    else{
    localStorage.setItem('username', myname);
    myheading.textContent = "你好，新用户"+myname;}
}

if(!localStorage.getItem('username'))
{setusername();}
else
{
let name = localStorage.getItem('username');
myheading.textContent = "你好，新用户"+name;
}

mybutton.onclick = function(){
    setusername();
}