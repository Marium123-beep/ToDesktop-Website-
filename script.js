const navDialog = document.getElementById('nav-dialog');
function handleMenu(){
   navDialog.classList.toggle('hidden');
}

// APPS POWERED BY TODESTOP (icons scroll)
const initialTranslateLTR = -48*4;//left side pe jaega
const initialTranslateRTL =  36*4; //right side pe jaega


function setupIntersectionObserver(element, isLTR, speed){
   const intersectionCallback = (entries) => {
   
      const isIntersecting = entries[0].isIntersecting;

      if(isIntersecting){
         document.addEventListener('scroll', scrollHandler);

      } else {
         document.removeEventListener('scroll', scrollHandler);
      }

   }
   const intersectionObserver = new IntersectionObserver(intersectionCallback)

   intersectionObserver.observe(element);

   function scrollHandler(){
      const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;

   let totalTranslate = 0;
   if(isLTR) {

      totalTranslate = translateX + initialTranslateLTR;

   } else {
       totalTranslate = -(translateX + initialTranslateRTL);
   }

      element.style.transform = `translateX(${totalTranslate}px)`;
   }

}



const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');
// Companies Feature Line (feature scroll)
const line4 = document.getElementById('line4');


setupIntersectionObserver(line1, true, 0.15);
setupIntersectionObserver(line2, false, 0.15);
setupIntersectionObserver(line3, true, 0.15);
// Companies Feature Line (feature scroll)
setupIntersectionObserver(line4, true, 0.8);

//FAQs (dt per event listner lagaen gein taky click karein tw dd miljae)
const dtElements = document.querySelectorAll('dt');
dtElements.forEach(element => {
     element.addEventListener('click' , () => {
     const ddId = element.getAttribute('aria-controls');
     const ddElement = document.getElementById(ddId);
     const ddArrowIcon = element.querySelectorAll('i')[0];

     ddElement.classList.toggle('hidden');
     ddArrowIcon.classList.toggle('-rotate-180');
})

})

