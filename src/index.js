const display=document.getElementById('display');
//  let newValue='';
let resultDisplayed = false;

function appendvalue(value){
    if(resultDisplayed){
        display.value='';
        resultDisplayed=false;
        appendvalue(value)
        preventDefault();
    }
   console.log('Current display before append:', display.value, 'Appending value:', value);
   
    // newValue+=value ;
    // display.value = newValue;
    display.value += value;
   
}

function cleardisplay(){
    display.value='';
    // newValue='';
}

function deletelast(){
    display.value= display.value.slice(0,-1);
}

function calculate(){
    try {
        display.value=eval(display.value);
        resultDisplayed=true;
    } catch (error) {
        display.value='Error';
    }
}
//keyboard inputs

document.addEventListener('keydown',(event)=>{
    const key= event.key;
    console.log('Key pressed:', key);
    if(!isNaN(key)|| key==='.'){
        appendvalue(key);}
    else if(key==='Backspace'){
        deletelast();}
    else if(key==='Enter'|| key==='='){
        event.preventDefault();
        calculate();}
    else if( key ==='Escape'){
        cleardisplay();}
    else if(key ==='+'|| key==='-'|| key==='*'||key==='/'){
        appendvalue(key);}
})
window.addEventListener('load',()=>{
    cleardisplay();
})
