
// Navbar
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


// Login & Registration


let containerLogin =document.querySelector(".container-login");
let registerLink = document.getElementById("register-link");
let signup = document.querySelector(".sign-up");
let signIn = document.querySelector(".sign-in");
let signInCloseIcon = document.querySelector(".icon-close");
let signUpCloseIcon = document.querySelector(".sign-up .icon-close");
let loginbtn = document.querySelector("header #login-btn");
let loginbtnShowUl = document.querySelector(".show-ul #login-btn");
let showPass = document.querySelector(".sign-in .showpass");
let hidePass = document.querySelector(".sign-in .hidepass");
let inputPass = document.querySelector(".sign-in .password");

let showPassSignUp = document.querySelector(".sign-up .showpass");
let hidePassSignUp = document.querySelector(".sign-up .hidepass");
let inputPassSignUp = document.querySelector(".sign-up .password");

let confShowPassSignUp = document.querySelector(".sign-up .confshowpass");
let confHidePassSignUp = document.querySelector(".sign-up .confhidepass");
let confInputPassSignUp = document.querySelector(".sign-up .confpassword");

loginbtn.addEventListener("click" , () =>{
    containerLogin.style.display = "flex";
    signup.style.display = "none";
})
loginbtnShowUl.addEventListener("click" , () =>{
    containerLogin.style.display = "flex";
    signup.style.display = "none";
    show.style.display = "none";
    close.style.display = "none";
    open.style.display = "block";
})

registerLink.addEventListener("click", () => {
    signup.style.display = "block";
    signIn.style.display = "none";
});
signUpCloseIcon.addEventListener("click", () => {
    signIn.style.display = "block";
    containerLogin.style.display = "none";
    inputPass.type = "password" ;
    showPass.style.display = "block";
    hidePass.style.display = "none";
    inputPassSignUp.type = "password" ;
    showPassSignUp.style.display = "block";
    hidePassSignUp.style.display = "none";
    confInputPassSignUp.type = "password" ;
    confShowPassSignUp.style.display = "block";
    confHidePassSignUp.style.display = "none";
});
signInCloseIcon.addEventListener("click", () => {
    containerLogin.style.display = "none";
    inputPass.type = "password" ;
    showPass.style.display = "block";
    hidePass.style.display = "none";
    inputPassSignUp.type = "password" ;
    showPassSignUp.style.display = "block";
    hidePassSignUp.style.display = "none";
    confInputPassSignUp.type = "password" ;
    confShowPassSignUp.style.display = "block";
    confHidePassSignUp.style.display = "none";
});

showPass.addEventListener("click" , () =>{
    inputPass.type = "text" ;
    showPass.style.display = "none";
    hidePass.style.display = "block";
});
hidePass.addEventListener("click" , () =>{
    inputPass.type = "password" ;
    showPass.style.display = "block";
    hidePass.style.display = "none";
});

showPassSignUp.addEventListener("click" , () =>{
    inputPassSignUp.type = "text" ;
    showPassSignUp.style.display = "none";
    hidePassSignUp.style.display = "block";
});
hidePassSignUp.addEventListener("click" , () =>{
    inputPassSignUp.type = "password" ;
    showPassSignUp.style.display = "block";
    hidePassSignUp.style.display = "none";
});

confShowPassSignUp.addEventListener("click" , () =>{
    confInputPassSignUp.type = "text" ;
    confShowPassSignUp.style.display = "none";
    confHidePassSignUp.style.display = "block";
});
confHidePassSignUp.addEventListener("click" , () =>{
    confInputPassSignUp.type = "password" ;
    confShowPassSignUp.style.display = "block";
    confHidePassSignUp.style.display = "none";
});




// Transaction 
// الزرار
let depositBtnTable = document.querySelector(".transaction #tableOne #deposit-btn");
let withdrawBtnTable = document.querySelector('.transaction #tableOne #withdraw-btn');
// Table ال
let depositOne = document.querySelector("#tableOne #depositOne");
let withdrawOne = document.querySelector("#tableOne #withdrawOne");

depositBtnTable.addEventListener("click" , () =>{
    depositBtnTable.style.background = '#00bfff'; 
    withdrawBtnTable.style.background = '#26354d';

    depositOne.classList.remove('hide'); 
    withdrawOne.classList.add('hide'); 
});


withdrawBtnTable.addEventListener("click" , () =>{
    withdrawBtnTable.style.background = '#00bfff'; 
    depositBtnTable.style.background = '#26354d';

    withdrawOne.classList.remove('hide'); 
    depositOne.classList.add('hide'); 
});


// In Telephone 
// الزرار
let depositbtn2 = document.querySelector("#tableTwo #deposit-btn2");
let withdrawbtn2 = document.querySelector("#tableTwo #withdraw-btn2");
// Table ال
let depositTwo = document.querySelector(".depositTwo");
let withdrawTwo = document.querySelector(".withdrawTwo");

depositbtn2.addEventListener("click" , () =>{
    depositbtn2.style.background = '#00bfff'; 
    withdrawbtn2.style.background = '#26354d';

    depositTwo.style.display = 'block';
    withdrawTwo.style.display = 'none';
});


withdrawbtn2.addEventListener("click" , () =>{
    withdrawbtn2.style.background = '#00bfff'; 
    depositbtn2.style.background = '#26354d';

    depositTwo.style.display = 'none';
    withdrawTwo.style.display = 'block';
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


// Count 

let nums = document.querySelectorAll(" .counter .number");
let statssection = document.querySelector(".counter");
let started = false ;

window.onscroll = function () {
    if(window.scrollY >= statssection.offsetTop) {
        if(!started){
            nums.forEach((num) => startCount(num));
        }
        started = true ;
    }
};

// nums.forEach((num) => startCount(num));

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;  
        if(el.textContent == goal){
            clearInterval(count)
        }
    } , 2000 / goal);
}