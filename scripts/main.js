
var myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

var myImage = document.querySelector("img");

myImage.onclick = function(){
    let mySrc = myImage.getAttribute("src");
    if(mySrc == "images/cat.jpg"){
        myImage.setAttribute("src","images/dog.jpg");
    }
    else{
        myImage.setAttribute("src","images/cat.jpg");
    }
};
/*document.querySelector("html").onclick = function() {
    alert("ouch ! Stop poking me!");
};*/
var mybotton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName(){
    let myName = prompt("Please enter your name.");
    if(!myName || myName == null){
        setUserName();
    }
    else{
        localStorage.setItem("name",myName);
        myHeading.innerHTML = "Mozilla is cool, " + myName;
    }
    
}

if (!localStorage.getItem("name")) {
    setUserName();
}
else{
    let storedName = localStorage.getItem("name");
    myHeading.innerHTML = "Mmozilla is cool, " + storedName;
}
myButton.onclick = function(){
    setUserName();
};
