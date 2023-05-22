const subscribeBtn = document.querySelector("#notify")
subscribeBtn.addEventListener('click', handleClick);

function handleClick(event) {
    const btn = event.target;
    btn.classList.toggle('btn-danger');
    btn.classList.toggle('btn-secondary');
    if (btn.classList.contains('btn-danger')) {
        btn.textContent = 'Notify me'  
    } else {
        btn.textContent = 'You are notified!'
    }
    
}


const accordionHeaders=document.querySelectorAll('[data-name="accordeon-title"]');

accordionHeaders.forEach((accordionHeader)=>{
  accordionHeader.addEventListener("click",showAcordionBox)
})
  function showAcordionBox(event) {
    const boxToShowHide = event.target.nextElementSibling;
    boxToShowHide.classList.toggle("hidden")
  }


function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


