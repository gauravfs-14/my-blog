const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('nav-links li');


    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
    });

    navLinks.forEach((link,index) =>{
        link.style.animation = `navLinkFade 0.5s ease forwards ${index/7+1}s`;
    });
}

navSlide();

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// scrollreveal
  sr.reveal('.social-media, .top, .logo',{
    origin: 'top',
});
    sr.reveal('#text, #msg, .left, .typing-effect, .img',{
    origin: 'left',
});
      sr.reveal('#email, .submit-btn, .right, .naav-link',{
    origin: 'right',
});
sr.reveal('.foot, p',{
    origin: 'bottom',
});

