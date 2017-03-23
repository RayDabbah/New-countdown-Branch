function totalWrap(){}
var thin=document.getElementById("dropdown");
function drop () {
  thin.classList.toggle("show");
}
var lick=document.getElementById("button");
lick.onclick = function() {
  drop();
};          
/*window.onclick= function(event) {
  if (!event.target.matches('lick')){
   //if (thin.classList.contains('show')) {
      thin.classList.remove('show');
   }
 // }
};*/
var first= document.getElementById('first'),
last= document.getElementById('last'),
pass= document.getElementById('password'),

est= document.getElementById('est');
 est.disabled = true;
/* document.getElementById('torahform').addEventListener('submit', action);
function action(event){
  event.preventDefault();

}*/
  document.getElementById('sub').innerHTML= 'Subtotal: $0.00<br>Tax: $0.00<br>% 0.00<br>Shipping: $0.00';
document.getElementById('torahform').addEventListener('change', figure);
document.getElementById('torahform').addEventListener('input', figure);
function figure(){
  if (first.value=== '' || last.value=== '' || pass.value === '') {
  est.disabled=true;
} else {
  est.disabled= false;
}   
  var cd= parseInt(document.getElementById('cd').value, 10) || 0,
      flash=parseInt(document.getElementById('flash').value, 10) || 0,
      mp3=parseInt(document.getElementById('mp3').value, 10) || 0,
      state=document.getElementById('state').value,
      taxFactor= 1,
      shipping=document.getElementById('shipping').value,
      shipPrice,
      taxRate,
      price=document.getElementById('estimate');
      sub= document.getElementById('sub');
      
   
     
      if (state==='NJ') {
        taxFactor=1.07;
      } else if (state==='CA') {
        taxFactor= 1.075;
        } else if( state==='WA') {
          taxFactor=1.065;
        } else {
          taxFactor= 1;
        }
        switch (shipping) {
          case 'standard':
            shipPrice = 2.75;
            break;
          case 'speedy':
            shipPrice = 10.40;
            break;
            case 'over':
            shipPrice= 93.75;
              break;
        }
         var estimate = (1 * cd) + (15 * flash) + (150 * mp3);
        if (estimate >= 30 &&  shipping==='standard' || estimate===0 ) {
          shipPrice= 0;
        }
        taxRate= ((taxFactor-1) * 10).toFixed(2);
        
      
      //result
      price.value='$' + ((estimate * taxFactor)+ shipPrice).toFixed(2);
      sub.innerHTML= 'Subtotal: $' + estimate.toFixed(2) + '<br>Tax: $' + (estimate * taxRate/10).toFixed(2) + '<br>' + (taxRate * 10).toFixed(2) + '% ' + state + '<br>Shipping: $' + shipPrice.toFixed(2);
}
//countdown clock
function countdown() { var timeLeft= new Date(2017, 3).getTime()-new Date().getTime();
      //=parseInt(t-today, 10);
var second=Math.floor((timeLeft/ 1000) % 60 ),
    seconds = ('0' + second).substr(-2),
    minutes=('0' + Math.floor((timeLeft/ 1000/60) % 60)).substr(-2),
    hours = Math.floor((timeLeft/ 1000/60/60) % 24),
    days = Math.floor(timeLeft/ 1000/ 60 / 60 / 24);
    if (seconds + minutes + hours + days >= 0){
    document.getElementById('countdown').innerHTML= days + ' Days, ' + hours + ' Hours, ' + minutes + ' Minutes, ' + seconds +' Seconds';
    } else {document.getElementById('countdown').innerHTML= 'SORRY BUT OUR SALE HAS EXPIRED!';}
}
countdown();
setInterval(countdown, 1000);
var age= document.getElementById('age'),
reveal = document.getElementById('reveal');
age.style.display = "none";
function hideCheckBox() {
  if (reveal.checked) {
    age.style.display = "";
  } else {
    age.style.display = "none";
  }
}
reveal.addEventListener('click',hideCheckBox);

window.onload=function(){
  totalWrap();
};