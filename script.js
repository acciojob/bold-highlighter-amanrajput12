let value = document.querySelectorAll("strong");
function highlight() {
    //Write your code here
// alert("in")
	value.forEach((data)=>{
		data.style.color="rgb(0, 128, 0)"
	})

}


function return_normal() {
    //Write your code here
// alert("move out")

	value.forEach((data)=>{
		data.style.color="rgb(0,0, 0)"
	})
}
