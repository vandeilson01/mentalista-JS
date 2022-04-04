var n = parseInt(Math.random() * 100);
var t = 5;

var button =  document.querySelector('button');

button.addEventListener('click', function(){
  
  //3 tentativas
while(t > 1){
  var c = parseInt(prompt('Digite um numero de 0 a 100'));
  
  if(c === n){
    alert('acertou');
    
    button.style.transform = 'rotate(-360deg)';
    break;
  }else if( c < n){
    alert('maior');
    t = t-1;
  }else if( c > n){
    alert('menor');
    t = t-1;
  }
  
 
}

if(c != n){
  alert('erro todas, o numero secreto é:' + n);
  
  
}

console.log(n);

});
