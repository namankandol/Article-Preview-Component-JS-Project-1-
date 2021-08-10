const share = document.querySelector('.share');
const shareBox = document.querySelector('.shareBox');
const arrow = document.querySelector('.arrow');

share.addEventListener('click', ()=>{
  share.classList.toggle('shareClicked');
  shareBox.classList.toggle('visibility');
  arrow.classList.toggle('visibility');
})           