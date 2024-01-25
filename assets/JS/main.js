let open = document.querySelector("#open");
let close = document.querySelector("#close");
let show = document.querySelector(".show-ul");

let deposit = document.querySelector(".deposit");
let withdraw = document.querySelector(".withdraw");
let active = document.querySelector(".active");
let hide = document.querySelector(".hide");


open.addEventListener("click" , () =>{
    open.style.display = 'none'; 
    close.style.display = 'block'; 
    show.style.display = 'block'; 
})
close.addEventListener("click" , () =>{
    close.style.display = 'none'; 
    open.style.display = 'block'; 
    show.style.display = 'none'; 
})


deposit.addEventListener("click" , () =>{
    hide.style.display = 'none'; 
    active.style.display = 'block';

    deposit.style.background =  "00bfff" ;
    deposit.style.color =  "#fff" ;
    
    withdraw.style.color =  "#fff" ;
    withdraw.style.background =  "#26354d" ;

})
withdraw.addEventListener("click" , () =>{
    hide.style.display = 'block'; 
    active.style.display = 'none';

    withdraw.style.background =  "00bfff" ;
    withdraw.style.color =  "#fff" ;

    deposit.style.color =  "#fff" ;
    deposit.style.background =  "#26354d" ;

})

// Scroll
let btn = document.querySelector('#btn-scroll');

window.onscroll = function(){
    if(scrollY >=150){
        btn.style.display = 'block'; 
    }else{
        btn.style.display = 'none';  
    }
}

btn.onclick = function (){
    scroll({
        left: 0,
        top: 0 ,
        behavior: 'smooth'
    }    
        
    )
    
}

// change navbar

function changebg(){
    // let container = document.querySelector('.navbar-bottom .container');
    let navbartop = document.querySelector('.navbar-top');
    let navbar = document.querySelector('.navbar-bottom');
    let scrollvalue = window.scrollY ;
    if(scrollvalue < 400){
        // container.style.display = 'block';
        navbartop.classList.remove('none');
        navbar.classList.remove('bgcolor');
    } else{
        navbar.classList.add('bgcolor');
        navbartop.classList.add('none');
        // container.style.display = 'none';
    }
}

window.addEventListener('scroll' , changebg);