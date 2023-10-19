const result = document.querySelector('.res');

document.addEventListener('click', function(e) 
{
	if(e.target.type == "button") 
  {
		if(e.target.value == "cls") 
    {
			result.value = '';
	  } 
    else if(e.target.value == "del") 
    {
			result.value = result.value.toString().slice(0, -1);
		} 
    else if (e.target.value == "=")
    {
			result.value = eval(result.value);
		} 
    else 
    {
			result.value += e.target.value;
		}
	}
});	

