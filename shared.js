 
 var backdrop = document.querySelector('.backdrop');
 var selectPlanButton = document.querySelectorAll('.plan button');
 var modal = document.querySelector('.modal');
 var modalButton = document.querySelector('.modal__action--negative');
 var toggleButton =document.querySelector('.toggle-button');
 var mobileNav =document.querySelector('.mobile-nav')

  for (var i = 0 ; i < selectPlanButton.length ; i++){
    selectPlanButton[i].addEventListener('click', function(){
       modal.classList.add('open');
       backdrop.classList.add('open');
    })
  }


  backdrop.addEventListener('click', closeModel);

  if(modalButton){
    modalButton.addEventListener('click', closeModel);
  }


  function closeModel(){

    mobileNav.style.display = 'none';
    backdrop.classList.remove('open');

    if(modal){
        modal.classList.remove('open');
    }
  
  }

  toggleButton.addEventListener('click', function(){
    mobileNav.style.display = 'block';
    backdrop.classList.add('open');
  })