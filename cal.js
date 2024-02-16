let inputvalue = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let btnArray = Array.from(buttons);

let string = '';


btnArray.forEach((eachbth)=>{
    eachbth.addEventListener('click', (btnvalue) =>{

        if (btnvalue.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length -1)
            inputvalue.value = string;
        }else if (btnvalue.target.innerHTML == 'AC') {
            string= '';
            inputvalue.value = string;
        }else if (btnvalue.target.innerHTML == '=') {

            string = eval(string);
            inputvalue.value = string;
        }

        else{
            string += btnvalue.target.innerHTML;

            inputvalue.value = string; 
        }        
    });
});

















// console.log(btnArray);