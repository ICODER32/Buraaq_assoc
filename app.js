const navBtn=document.querySelector('.fas');
const navbar=document.querySelector('.linkscontainer');
navBtn.addEventListener('click', function(){
    navBtn.classList.toggle('fa-times');
   navbar.classList.toggle('showNav')
})

