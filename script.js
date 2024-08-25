document.addEventListener('DOMContentLoaded', ()=>{
const nav = document.getElementById('navbar');
const Sections = nav.getElementsByTagName('a');
 window.addEventListener('scroll',()=>{
    if(window.scrollY>50){
        nav.classList.add('scrolled');
    }else{
        nav.classList.remove('scrolled');
    }    
});

Array.from(sections),forEach(item=>{
    item.addEventListener('mouseenter',()=>{
        item.style.transform='scale(1.1)';
    });
    item.addEventListener('mouseleave',()=>{
        item.style.transform='scale(1)';
    });
});


Array.from(sections).forEach(item=>{
    item.addEventListener('click',(e) =>{
        e.preventDefault();
        const targetId = item.getAttribute('href');
        const targetsection = document.querySelector(targetId);
        targetsection.scrollIntoView({behaviour:'smooth'});

    });
});

