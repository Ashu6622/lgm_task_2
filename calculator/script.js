let buttons = document.querySelector('.buttons');
// console.log(buttons);
let screen = document.querySelector('#screen');

let btn = document.querySelectorAll('.btn');
let string = "";


btn.forEach((e)=>{

    // console.log(e);
    e.addEventListener('click' , (digit)=>{

        

        if(digit.target.innerHTML == 'C'){
            string = "";
            screen.value = 0;

        }
        else if(digit.target.innerHTML == "="){
            string = eval(string)
            screen.value = string;
        }
        else{
            string+=digit.target.innerHTML;
            screen.value = string
            console.log(string);
        }
    })
})