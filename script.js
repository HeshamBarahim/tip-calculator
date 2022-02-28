let bill = document.getElementById("bill")
let people_input = document.getElementById("people-input")
let custom_input = document.getElementById("custom")
let gorup_tips = document.querySelector(".box-of-tips")
let tips = document.querySelectorAll(".tips")
let tip_amount = document.querySelector(".tip-amount")
let total = document.querySelector(".total")
let reset = document.getElementById("reset")
let error = document.querySelector(".red-error")
let no_zero  =document.getElementById('no-zero')
let tips_value = 0.15
let bill_value 
let people_value 
let amount_value 
let total_value

custom_input.addEventListener("input" , ()=>{
   tips_value = custom_input.value/100
   calc()
})

bill.addEventListener("input" , ()=>{
bill_value = parseFloat(bill.value)
calc()
})

people_input.addEventListener("input" , ()=>{
    if(people_input.value > 0 ){
        people_value = parseFloat(people_input.value)
        error.style.display = 'none'
        no_zero.style.border = "none"
        calc();
    }
else{
    error.style.display = 'block'
    no_zero.style.border = "thick solid red"
}  
})

    tips.forEach((val)=>{
val.addEventListener('click' , ()=>{
    tips_value  = parseFloat(val.innerHTML) / 100
    calc()
}) })

function calc(){
    if(people_value>0 && bill_value >0){
        let tipAmount =  (tips_value * bill_value ) / people_value;
        let totaltip  =  (bill_value + tipAmount) /  people_value ;
        tip_amount.innerHTML = tipAmount.toFixed(2);
         total.innerHTML = totaltip.toFixed(2);
    }
}

reset.addEventListener('click' , ()=>{
    
    bill.value = 0
    tips_value.value = 0
    custom_input.value = ""
    people_input.value = 0
    tip_amount.innerHTML = 0
    total.innerHTML = 0
})
