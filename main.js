
document.addEventListener('DOMContentLoaded', () => {
    
const menu_icon = document.querySelector(".menu-icon");
const navlinks = document.querySelector(".nav-links-smallscreen");
const smallscreenOverlay = document.querySelector(".smallscreen-overlay");
const link_closebtn= document.querySelector(".link-closebtn");
const link_lists= document.querySelectorAll(".nav-links-smallscreen li");
menu_icon.addEventListener('click', () => {
    navlinks.classList.toggle("show");
    smallscreenOverlay.style.visibility =  "visible" ;
    document.body.style.overflow = "hidden";
});

smallscreenOverlay.addEventListener('click', () => {
    navlinks.classList.remove("show");
    smallscreenOverlay.style.visibility =  "hidden" ;
    document.body.style.overflow = '';});

link_closebtn.addEventListener('click', () => {
    
        navlinks.classList.remove("show");
         smallscreenOverlay.style.visibility =  "hidden" ;
           document.body.style.overflow = '';

});

link_lists.forEach(li=>{
    
    li.addEventListener('click',()=>{
        navlinks.classList.remove("show");
         smallscreenOverlay.style.visibility =  "hidden" ;
           document.body.style.overflow = '';
   
});
});


const items = document.querySelectorAll(".accordion-item");

items.forEach(item => {
    item.querySelector(".accordion-header").addEventListener("click", () => {

        // Close all
        items.forEach(i => {
            if(i !== item){
                i.classList.remove("active");
            }
        });

        // Toggle current
        item.classList.toggle("active");
    });
});

const currentYear = new Date().getFullYear();
const yearSpan = document.getElementById('current-year');

   
   
// Check if the element exists to avoid errors
if (yearSpan) {
    yearSpan.textContent = currentYear;
}
  const header= document.querySelector('header');
  
      let lastScroll= 0;  //it is for  scroll diff  determine
 function hideHeader(){

let currentScroll = window.scrollY;

    if(currentScroll>lastScroll){
  header.style.transform= "translateY(-100%)";
    }else  {
  header.style.transform= "translateY(0)";}

   lastScroll = currentScroll; 

}
window.addEventListener('scroll',  hideHeader);
 

const form = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

async function handleSubmit(event) {
    event.preventDefault(); // This is the crucial line: it stops the browser from redirecting!

    const formData = new FormData(event.target);
    
    // You can show a "Sending..." message here
    formStatus.textContent = "Sending...";

    try {
        const response = await fetch(event.target.action, {
            method: form.method,
            body: formData,
            headers: {
                'Accept': 'application/json' // This tells Formspree to send a JSON response
            }
        });

        if (response.ok) {
            formStatus.textContent = "Thank you! Your message has been sent.";
            formStatus.style.color = "white"; // Optional: style the message
            form.reset();
            setTimeout(()=>{
                formStatus.textContent = "";
            },4000);
        } else {
            // This part handles errors from Formspree or your server
            const data = await response.json();
           
                formStatus.textContent = "Oops! There was an error. Please try again later.";
            
            formStatus.style.color = "red"; // Optional: style the message
        }
    } catch (error) {
        // This part handles network errors
        formStatus.textContent = "A network error occurred. Please check your connection.";
        formStatus.style.color = "red"; // Optional: style the message
        console.error(error);
    }
}

// Add an event listener to the form to call our JavaScript function on submission
form.addEventListener('submit', handleSubmit);

const sections = document.querySelectorAll('section');

// Intersection Observer for section animation
const observerOptions = {
    threshold: 0.1 // Trigger when 10% of the section is visible
};
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } 
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);});

});