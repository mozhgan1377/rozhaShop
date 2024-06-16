let menuItems = document.querySelectorAll(".drop_down_item") ;


menuItems.forEach(item => {
    item.addEventListener("mouseover",function(){
        document.querySelector(".active").classList.remove("active") ;
        this.classList.add("active") ;

        let id = item.getAttribute("data-id") ;
        console.log(id);
        document.querySelector(".show").classList.remove("show")
        document.getElementById(id).classList.add("show")
       
    })
})

// timer
let dayElems = document.querySelectorAll(".day") ;
let houreElems = document.querySelectorAll(".houre") ;
let minuteElems = document.querySelectorAll(".minute") ;
let secondElems = document.querySelectorAll(".second") ;
let countDownTime = new Date("sep 30 2024").getTime() ;


let countDownTimer = setInterval(function(){
    let now = new Date().getTime() ;
    let remind = countDownTime - now ;

    if(remind < 0){
        clearInterval(countDownTime) ;
        dayElem.innerHTML = "00" ;
        houreElem.innerHTML = "00" ;
        minuteElem.innerHTML = "00" ;
        secondElem.innerHTML = "00" ;
        return
    }

    
    let days = Math.floor(remind / (1000 * 60 * 60 * 24));
    let hours = Math.floor((remind % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((remind % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((remind % (1000 * 60)) / 1000);
    
    if(days < 10){
        days = "0" + days
    }
    if(hours < 10){
        hours = "0" + hours
    }
    if(minutes < 10){
        minutes = "0" + minutes
    }
    if(seconds < 10){
        seconds = "0" + seconds
    }

    dayElems.forEach( elem => elem.innerHTML = days)
    houreElems.forEach( elem => elem.innerHTML = hours)
    minuteElems.forEach( elem => elem.innerHTML = minutes)
    secondElems.forEach( elem => elem.innerHTML = seconds)
}, 1000);

// slider

let large_sliderImg = [
 "./pictures/slider-1.jpg" ,
 "./pictures/slider-2.jpg" , 
 "./pictures/slider-3.jpg"
]
let medium_sliderImg = [
 "./pictures/slider-1-mob.jpg" ,
 "./pictures/slider-2-mob.jpg" , 
 "./pictures/slider-3-mob.jpg"
]

let i = 0 ;
setInterval(function(){
   let large_sliderElem = document.querySelector(".lg_slider") ;
   let medium_sliderElem = document.querySelector(".med_slider") ;
   let dots = document.querySelectorAll(".dot");
    
   if( i > 2 ){
    i = 0
   }

   large_sliderElem.src = large_sliderImg[i] ;
   medium_sliderElem.src = medium_sliderImg[i] ;
   document.querySelector(".dot--active").classList.remove("dot--active")
   dots[i].classList.add("dot--active")
   i++ ;

},3000)


// product slider 

let prevProducBtns = document.querySelectorAll(".prev_product_button") ;
let nextProducBtns = document.querySelectorAll(".next_product_button") ;
let products = document.querySelectorAll("products") ;

prevProducBtns.forEach(btn => {
    btn.addEventListener("click",function(){
        let id = btn.getAttribute("data-id") ;
        let product = document.getElementById(id) ;
    
    })
})

nextProducBtns.forEach(btn => {
    btn.addEventListener("click",function(){
        let id = btn.getAttribute("data-id") ;
        let product = document.getElementById(id) ;
    })
})
