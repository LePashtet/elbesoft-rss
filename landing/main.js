  const reviewsContainer = document.querySelector(".card-slider");
  const leftRButton = document.querySelector(".reviews-arrow-left");
  const rightRButton = document.querySelector(".reviews-arrow-right");
  const footerButton=document.querySelector('.footer-button')
  const accordionItem =document.querySelectorAll(".accordion-item")
  const burgerButton=document.querySelector('.burger-icon')
  const burgerButtonClose=document.querySelector('.burger-icon-close')
  const headerMenu = document.querySelector('.menu-items');
  const tlFirstScroll = new TimelineMax();
  const controller = new ScrollMagic.Controller();
  
  const tlSlide1 = new TimelineMax();
  tlSlide1
    .set('.slide-1', { y: '50%', opacity: 0 }) 
    .to('.slide-1', 1, { y: '0%', opacity: 1 }); 
  
  const slide1 = new ScrollMagic.Scene({
    triggerElement: '#home',
    triggerHook: 0,
    duration: '100%'
  }).setTween(tlSlide1).addTo(controller);
  
  const tlSlide2 = new TimelineMax();
  tlSlide2
    .set('.slide-2', { y:  `${window.innerWidth<480 ? '10%' : '70%'}`, opacity: 0 }) 
    .to('.slide-2', 2, { y: '0%', opacity: 1 });
  
  const slide2 = new ScrollMagic.Scene({
    triggerElement: `${window.innerWidth<480 ? '.slide-title-1' : '.about-title'}`, 
    triggerHook: 0,
    duration: '100%'
  }).setTween(tlSlide2).addTo(controller);
  
  const tlSlide3 = new TimelineMax();
  tlSlide3
  .set('.slide-3', { y:  `${window.innerWidth<480 ? '10%' : '70%'}`, opacity: 0 }) 
  .to('.slide-3', 2, { y: '0%', opacity: 1 }); 
  
  const slide3 = new ScrollMagic.Scene({
    triggerElement: `${window.innerWidth<480 ? '.slide-title-2' : '.slide-title-1'}`, 
    triggerHook: 0,
    duration: '100%'
  }).setTween(tlSlide3).addTo(controller);
  
  const tlSlide4 = new TimelineMax();
  tlSlide4
  .set('.slide-4', { y:  `${window.innerWidth<480 ? '10%' : '70%'}`, opacity: 0 }) 
  .to('.slide-4', 2, { y: '0%', opacity: 1 }); 
  
  const slide4 = new ScrollMagic.Scene({
    triggerElement:  `${window.innerWidth<480 ? '.slide-title-3' : '.slide-title-2'}`, 
    triggerHook: 0,
    duration: '100%'
  }).setTween(tlSlide4).addTo(controller);

  const tlFeatures = new TimelineMax();
  tlFeatures
  .set('#features', { y: '20%', opacity: 0 }) 
  .to('#features',1, { y: '0%', opacity: 1 }); 
  
  const features = new ScrollMagic.Scene({
    triggerElement:  `${window.innerWidth<480 ? '.slide-img-3' : '.slide-4'}`, 
    triggerHook: 0,
    duration: '100%'
  }).setTween(tlFeatures).addTo(controller);

  const tlFeatureInfo1 = new TimelineMax();
  tlFeatureInfo1
  .set('.feature-info-consumers', { x: '-100%', opacity: 0 }) 
  .to('.feature-info-consumers',7, { x: '0%', opacity: 1 }); 
  
  const featureInfo1 = new ScrollMagic.Scene({
    triggerElement:  `${window.innerWidth<480 ? '.slide-4' : '.slide-4'}`, 
    triggerHook: 0,
    duration: '100%'
  }).setTween(tlFeatureInfo1).addTo(controller);


  const tlFeatureImg1 = new TimelineMax();
  tlFeatureImg1
  .set('.features-consumers_img', { x: `${window.innerWidth<480 ? '100%' : '100%'}`, opacity: 0 }) 
  .to('.features-consumers_img',window.innerWidth<480 ? 1 : 1, { x: '0%', opacity: 1 }); 
  
  const featureImg1 = new ScrollMagic.Scene({
    triggerElement:  `${window.innerWidth<480 ? '.slide-4' : '.slide-4'}`, 
    triggerHook: 0,
    duration: '100%'
  }).setTween(tlFeatureImg1).addTo(controller);


  const tlFeatureInfo2 = new TimelineMax();
  tlFeatureInfo1
  .set('.feature-info-specialist', { x: '1000%', opacity: 0 }) 
  .to('.feature-info-specialist',7, { x: '0%', opacity: 1 }); 
  
  const featureInfo2 = new ScrollMagic.Scene({
    triggerElement:  `${window.innerWidth<480 ? '.features-busy' : '.features-busy'}`, 
    triggerHook: 0,
    duration: '200%'
  }).setTween(tlFeatureInfo2).addTo(controller);


  const tlFeatureImg2 = new TimelineMax();
  tlFeatureImg1
  .set('.features-specialist_img', { x: `${window.innerWidth<480 ? '-300%' : '-100%'}`, opacity: 0 }) 
  .to('.features-specialist_img',window.innerWidth<480 ? 20 : 1, { x: '0%', opacity: 1 }); 
  
  const featureImg2 = new ScrollMagic.Scene({
    triggerElement:  `${window.innerWidth<480 ? '#price' : '.features-busy'}`, 
    triggerHook: 0,
    duration: '200%'
  }).setTween(tlFeatureImg2).addTo(controller);

  const tlFeatureInfo3 = new TimelineMax();
  tlFeatureInfo3
  .set('.feature-info-busy', { x: '-50%', opacity: 0 }) 
  .to('.feature-info-busy',1, { x: '0%', opacity: 1 }); 
  
  const featureInfo3 = new ScrollMagic.Scene({
    triggerElement:  `${window.innerWidth<480 ? '.features-text-consumers' : '.features-text-consumers'}`, 
    triggerHook: 0,
    duration: '100%'
  }).setTween(tlFeatureInfo3).addTo(controller);

  const tlFeatureImg3 = new TimelineMax();
  tlFeatureImg3
  .set('.features-busy_img', { x:`${window.innerWidth<480 ? '10%' : '50%'}`, opacity: 0 }) 
  .to('.features-busy_img',window.innerWidth<480 ? 0.1 : 1, { x: '0%', opacity: 1 }); 
  
  const featureImg3 = new ScrollMagic.Scene({
    triggerElement:  `${window.innerWidth<480 ? '.features-specialist_img' : '.features-text-consumers'}`, 
    triggerHook: 0,
    duration: '100%'
  }).setTween(tlFeatureImg3).addTo(controller);

  const tlPrice = new TimelineMax();
  tlPrice
  .set('#price', { y: '10%', opacity: 0 }) 
  .to('#price',0.5, { y: '0%', opacity: 1 }); 

  const price = new ScrollMagic.Scene({
    triggerElement:  `${window.innerWidth<480 ? '.features-title-busy' : '.features-text-specialist'}`, 
    triggerHook: 0,
    duration: '100%'
  }).setTween(tlPrice).addTo(controller);

  const tlFaq = new TimelineMax();
  tlFaq
  .set('#faq', { y: '50%', opacity: 0 }) 
  .to('#faq',2, { y: '0%', opacity: 1 }); 
  
  const faq = new ScrollMagic.Scene({
    triggerElement: '.price-trial', 
    triggerHook: 0,
    duration: '100%'
  }).setTween(tlFaq).addTo(controller);

  

  function toggleMenu() {
    headerMenu.classList.toggle('menu-items-active')
  }
burgerButton.addEventListener('click',toggleMenu)
burgerButtonClose.addEventListener("click",toggleMenu)

  const scrollSliderCount=()=>{
    if(window.innerWidth>=1024){
      return 3
    }else if (window.innerWidth>=480){
      return 2
    }else{
      return 1
    }
  }
  function leftScroll() {
    const scrollAmount = -reviewsContainer.offsetWidth / scrollSliderCount();
    reviewsContainer.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
    
    if (reviewsContainer.scrollLeft === 0) {
      reviewsContainer.scrollTo({
        left: reviewsContainer.scrollWidth - reviewsContainer.offsetWidth,
        behavior: "smooth",
      });
    }
  }

  function rightScroll() {
    const scrollAmount = reviewsContainer.offsetWidth / scrollSliderCount();
    reviewsContainer.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
      console.log(reviewsContainer.scrollLeft + reviewsContainer.offsetWidth);
    if (reviewsContainer.scrollLeft + reviewsContainer.offsetWidth >= reviewsContainer.scrollWidth-30) {
      reviewsContainer.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }
  }

  leftRButton.addEventListener('click',leftScroll) 
  rightRButton.addEventListener('click',rightScroll)



  accordionItem.forEach((item) => {
    item.querySelector(".accordion-item-header").addEventListener("click", () => {
      item.classList.toggle("open");
    });
  });
  
footerButton.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});