let input=document.getElementById('inputBox');
let buttons=document.querySelectorAll('button');
let string="";
let arr=Array.from(buttons);

arr.forEach(button =>{
    button.addEventListener('click',(e)=>{
        console.log("Button clicked: ", e.target.innerHTML); 
        if(e.target.innerHTML=== '='){
            try{
                string=eval(string);
                input.value=string;
            }
            catch(error){
                input.value="Error";
                string="";
            }
        }
        else if(e.target.innerHTML==='AC')
        {
            string="";
            input.value=string;
        }
        else if(e.target.innerHTML==='DEL')
        {
            string=string.slice(0,-1);
            input.value=string;
        }
        else
        {
            if("+-*/%.".includes(e.target.innerHTML) && "+-*/%.".includes(string.slice(-1))){ 
                console.log("Consecutive operator ignored");
                return;
            }
            string+=e.target.innerHTML;
            input.value=string
        }
       
    })
})