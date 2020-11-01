 
 var backdrop = document.querySelector('.backdrop');
 var selectPlanButton = document.querySelectorAll('.plan button');
 var modal = document.querySelector('.modal');
 var modalButton = document.querySelector('.modal__action--negative');
 var toggleButton =document.querySelector('.toggle-button');
 var mobileNav =document.querySelector('.mobile-nav');
 var ctaButton = document.querySelector('.main__nav--cta');

  for (var i = 0 ; i < selectPlanButton.length ; i++){
    selectPlanButton[i].addEventListener('click', function(){
       modal.classList.add('open');
       backdrop.classList.add('open');
    })
  }

  // mobileNav.addEventListener('click', closeModel)
  backdrop.addEventListener('click', closeModel);

  if(modalButton){
    modalButton.addEventListener('click', closeModel);
  }


  function closeModel(){

    // mobileNav.style.display = 'none';
    mobileNav.classList.remove('open_mobile');
    backdrop.classList.remove('open');

    if(modal){
      modal.classList.remove('open');
    }
  
  }

  toggleButton.addEventListener('click', function(){
    // mobileNav.style.display = 'block';
    mobileNav.classList.add('open_mobile')
    backdrop.classList.add('open');
  })

  ctaButton.addEventListener('animationstart', function(){
    console.log('Animation Start', Event);
  })

  ctaButton.addEventListener('animationend', function(){
    console.log('Animation End', Event);
 })