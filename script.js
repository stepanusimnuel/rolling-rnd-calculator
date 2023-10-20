const result = document.querySelector('.res');
 
document.addEventListener('click', function(e) {
 if(e.target.type == "button") {
  if(e.target.value == "cls") {
   result.value = '';
  } else if(e.target.value == "del") {
   result.value = result.value.toString().slice(0, -1);
  } else if (e.target.value == "="){
   try {
    result.value = eval(result.value);
   } catch(err){
    result.value = "error pak";
   }
    
  } else result.value += e.target.value;
 }
}); 

document.addEventListener('keydown', function(e) {
 if(result.value == '') result.value = "error pak";
 if(e.code == "Enter") {
  event.preventDefault();
  try {
   result.value = eval(result.value);
  } catch(err){
   result.value = "error pak";
  }
 }
}); 

