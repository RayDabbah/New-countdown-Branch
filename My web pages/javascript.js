/*var torahp=document.getElementsByTagName("p");
console.log("Type: ",torahp.childNode);
console.log("Links: ",torahp.length);
console.log("trying again", torahp.length);
//document.getElementById("nav").innerHTML="Farfel!";
var thing=document.getElementById("nav");
console.log("Type: ",thing.childNode);
console.log("Links: ",thing.length);
var child= thing.getElementsByTagName("a");
console.log("Next item", child.length);
console.log("New guy", child.innerHTML);
var news= document.createElement("li");
//thing.appendChild(child[0]);
child.innerHTML = "How's life today?";


var newp=document.createElement("h2");
newp.innerHTML = "This is great!";
document.getElementById("jst").appendChild(newp);


var change=document.getElementById("jst");
console.log (change.innerHTML);
var head2=document.createElement("h3");
var next=document.createElement("p");
head2.innerHTML="Trying this out.";
next.innerHTML="Now it really works!";
document.getElementById("jst").appendChild(head2);
document.getElementById("jst").appendChild(next);
//Real way.
var real= document.createTextNode("This is the Fancy way.");
var reap= document.createTextNode("How do you like this?");
head2.appendChild(real);
next.appendChild(reap);
//before.
var listi = document.createElement("li");
var calling=document.getElementsByTagName("li")[10];
listi.innerHTML="It looks good!";
calling.appendChild(listi,calling);
var lis=document.getElementsByTagName("li");
console.log(lis);
var whole=document.getElementsByClassName("whole");
console.log(whole);
var big=document.getElementById("bigger");
console.log("Plain", big);
console.log("This is the big",big.childNodes);
console.log("This is the big",big.childNodes[3]);

//Putting stuff with .insertBefore on the page.*/
function totalWrap() {
//Change pix
var pix=document.getElementById("pic");
var pixa=["lady.png","images/DSCF6233.jpg","images/images.jpg", "images/RReisman.jpg","images/sefer.jpg","images/shiur.jpg","images/Shiur2.jpg",
          "images/sifrei_torah.png","images/yemenite.jpg"];
var pixIndex=0;
function changeImage() {
pix.setAttribute("src",pixa[pixIndex]);
pixIndex++;
 if (pixIndex >= pixa.length){
   pixIndex=0;
   }
  //console.log(pixa[pixIndex]);
}
setInterval(changeImage,2500);
pix.onclick = function () {
  changeImage();/* setInterval(changeImage,7500);*/
  };
  
//console.log(pixa[pixIndex]);

var feet= document.getElementById("bigger");
var im= document.createElement("img");
feet.onclick= function() {
  im.setAttribute("src","images/sefarim.jpg");
  feet.appendChild(im);
};

//Dropdown

var thin=document.getElementById("dropdown");
function drop () {
  thin.classList.toggle("show");
  
}
var lick=document.getElementById("button");
lick.onclick = function() {
  console.log("Should be showing");
  drop();
};
/*var lastName =document.getElementById('torahform').addEventListener('submit', action);
function action(event){
  event.preventDefault();
  console.log("You just submitted this form!"); 
}*/

}
window.onload = function() {
  totalWrap();
};