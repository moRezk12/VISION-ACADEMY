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
    if(scrollvalue < 200){

        navbarbottom.style.background = '#00000033';
        navbartop.classList.remove('none');
        navbar.classList.remove('bgcolor');
    } else{
        navbar.classList.add('bgcolor');
        navbartop.classList.add('none');
        navbarbottom.style.background = '#001e33';

    }
}

window.addEventListener('scroll' , changebg);

// 

let depositbtn = document.querySelector('#deposit-btn');
let withdrawbtn = document.querySelector('#withdraw-btn');

let deposit = document.querySelector('#deposit');
let withdraw = document.querySelector('#withdraw');

depositbtn.addEventListener("click" , () =>{
    depositbtn.style.background = '#00bfff'; 
    withdrawbtn.style.background = '#26354d';

    deposit.classList.remove('hide'); 
    withdraw.classList.add('hide'); 
});


withdrawbtn.addEventListener("click" , () =>{
    withdrawbtn.style.background = '#00bfff'; 
    depositbtn.style.background = '#26354d';

    withdraw.classList.remove('hide'); 
    deposit.classList.add('hide'); 
});

// In Telephone 
let depositbtn2 = document.querySelector('#deposit-btn2');
let withdrawbtn2 = document.querySelector('#withdraw-btn2');


let deposit2 = document.querySelector('.table-tablet-deposit');
let withdraw2 = document.querySelector('.table-tablet-withdraw');

depositbtn2.addEventListener("click" , () =>{
    depositbtn2.style.background = '#00bfff'; 
    withdrawbtn2.style.background = '#26354d';

    deposit2.style.display = 'block';
    withdraw2.style.display = 'none';
});


withdrawbtn2.addEventListener("click" , () =>{
    withdrawbtn2.style.background = '#00bfff'; 
    depositbtn2.style.background = '#26354d';

    deposit2.style.display = 'none';
    withdraw2.style.display = 'block';
});


// Accordion

const accordionContent = document.querySelectorAll('.accordion-content');

accordionContent.forEach((item , index) =>{
    let header = item.querySelector('.accordion-head');

    header.addEventListener("click" , () =>{
        item.classList.toggle("open");

        let description = item.querySelector('.description');
        if(item.classList.contains('open')){
            description.style.height = `${description.scrollHeight}px`;
            item.querySelector('i').classList.replace('fa-plus','fa-minus');


        }else{
            description.style.height = '0px';
            item.querySelector('i').classList.replace('fa-minus','fa-plus');
        }
        removeOpen(index);
        console.log(item);
    });
    
});

function removeOpen (index1){
    accordionContent.forEach((item2,index2) =>{
        if(index1 != index2){
            item2.classList.remove('open');
            let des = item2.querySelector('.description');
            des.style.height = '0px';
            item2.querySelector('i').classList.replace('fa-minus' , 'fa-plus');
        }
    });
};