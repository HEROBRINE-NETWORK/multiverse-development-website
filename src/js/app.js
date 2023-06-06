const hamburgerMenu = document.querySelector('#navigation .nav-icon');
const navContent = document.querySelector('#nav-content');
const closeNavButton = document.querySelector('#nav-content .close-btn');
const navLinks = document.querySelectorAll('#nav-content nav ul li a');
const scrollButton = document.querySelector(".scroll-top");



  /**
   * Disable right-click
   */
if (document.addEventListener) {
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  }, false);
} else {
  document.attachEvent('oncontextmenu', function() {
    window.event.returnValue = false;
  });
}

function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

document.onkeydown = (e) => {
  // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
  if (
    event.keyCode === 123 ||
    ctrlShiftKey(e, 'I') ||
    ctrlShiftKey(e, 'J') ||
    ctrlShiftKey(e, 'C') ||
    (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
  )
    return false;
};

document.onkeydown = function(e) {
  if(event.keyCode == 123) {
      return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
      return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
      return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
      return false;
  }
  if(e.ctrlKey && e.keyCode == 'C'.charCodeAt(0)){
      return false;
  }
  if(e.ctrlKey && e.keyCode == 'X'.charCodeAt(0)){
      return false;
  }
  if(e.ctrlKey && e.keyCode == 'Y'.charCodeAt(0)){
      return false;
  }
  if(e.ctrlKey && e.keyCode == 'Z'.charCodeAt(0)){
      return false;
  }
  if(e.ctrlKey && e.keyCode == 'V'.charCodeAt(0)){
      return false;
  }
  if (e.keyCode == 67 && e.shiftKey && (e.ctrlKey || e.metaKey)){
      return false;
  }
  if (e.keyCode == 'J'.charCodeAt(0) && e.altKey && (e.ctrlKey || e.metaKey)){
      return false;
  }
  if (e.keyCode == 'I'.charCodeAt(0) && e.altKey && (e.ctrlKey || e.metaKey)){
      return false;
  }
  if ((e.keyCode == 'V'.charCodeAt(0) && e.metaKey) || (e.metaKey && e.altKey)){
      return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)){
      return false;
  }
  if(e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)){
      return false;
  }
  if(e.ctrlKey && e.keyCode == 'H'.charCodeAt(0)){
      return false;
  }
  if(e.ctrlKey && e.keyCode == 'A'.charCodeAt(0)){
      return false;
  }
  if(e.ctrlKey && e.keyCode == 'F'.charCodeAt(0)){
      return false;
  }
  if(e.ctrlKey && e.keyCode == 'E'.charCodeAt(0)){
      return false;
  }
  }

eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(3(){(3 a(){8{(3 b(2){7((\'\'+(2/2)).6!==1||2%5===0){(3(){}).9(\'4\')()}c{4}b(++2)})(0)}d(e){g(a,f)}})()})();',17,17,'||i|function|debugger|20|length|if|try|constructor|||else|catch||5000|setTimeout'.split('|'),0,{}))


// scroll TOP Button Events

if(scrollButton){
  window.addEventListener('scroll', ()=> {
    if(pageYOffset > (window.innerHeight * 1.2)){
      scrollButton.style.display="flex";
    }else{
      scrollButton.style.display="none";
    }
  });
  scrollButton.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });
}

// Hamburger Menu events
hamburgerMenu.addEventListener('click', ()=>{
  navContent.classList.add('show');
  document.body.style.overflow="hidden";
});
closeNavButton.addEventListener('click', ()=>{
  navContent.classList.remove('show');
  document.body.style.overflow="initial";
});
navLinks.forEach( link => {
  link.addEventListener('click', ()=> {
    navContent.classList.remove('show');
    document.body.style.overflow="initial";
  })
})

  /**
   * Visitor Counter
   */
  const countEl = document.getElementById('count');

  updateVisitCount();
  
  function updateVisitCount() {
    fetch('https://api.countapi.xyz/update/galacyber.is-a.dev/youtube/?amount=1')
      .then(res => res.json())
        .then(res => {
          countEl.innerHTML = res.value;
        })
  }