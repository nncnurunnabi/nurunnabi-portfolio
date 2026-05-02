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


//Header hide on scroll
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
link_lists.forEach(li=>{
    
    li.addEventListener('click',()=>{
        navlinks.classList.remove("show");
         smallscreenOverlay.style.visibility =  "hidden" ;
           document.body.style.overflow = '';
   
});
});

const currentYear = new Date().getFullYear();
const yearSpan = document.getElementById('current-year');

// Check if the element exists to avoid errors
if (yearSpan) {
    yearSpan.textContent = currentYear;
}
  
    const showmobile_btn= document.querySelector(".show-mobile-view-btn");
    const mobile_view_wrapper= document.querySelector(".mobile-view-wrapper");
    const hidemobile_view= document.querySelector(".hide-mobile-view");
    
    if (showmobile_btn && mobile_view_wrapper && hidemobile_view) {
        showmobile_btn.addEventListener('click',()=>{
            mobile_view_wrapper.style.display = 'flex';
            hidemobile_view.style.display = 'block';
        });
        hidemobile_view.addEventListener('click',()=>{
            mobile_view_wrapper.style.display = 'none';
            hidemobile_view.style.display = 'none';
        });
    }

const sticky = document.querySelector('.sticky');
const observer= new MutationObserver(()=>{
  let leftvalue=  window.getComputedStyle(navlinks).left;
   
if(leftvalue == '0px'){
    sticky.style.opacity = 1;
}else{    sticky.style.opacity = 0;}
});
observer.observe(navlinks,{
attributes: true, attributeFilter:['class']
})
});

  
