let open = document.querySelector("#open");
let close = document.querySelector("#close");
let closes = document.querySelector("#closes");
let show = document.querySelector(".show-ul");



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
closes.addEventListener("click" , () =>{        
    open.style.display = 'block'; 
    close.style.display = 'none'; 
    show.style.display = 'none'; 
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
    let navbartop = document.querySelector('.navbar-top');
    let navbar = document.querySelector('.navbar-bottom');
    let navbarbottom = document.querySelector('.navbar-bottom .container');

    let scrollvalue = window.scrollY ;
    if(scrollvalue < 400){

        // navbarbottom.classList.remove('bgcontainer');
        navbarbottom.style.background = '#00000033';
        navbartop.classList.remove('none');
        navbar.classList.remove('bgcolor');
    } else{
        navbar.classList.add('bgcolor');
        navbartop.classList.add('none');
        navbarbottom.style.background = '#001e33';
        // navbarbottom.classList.add('bgcontainer');

    }
}

window.addEventListener('scroll' , changebg);
