/*=============== SHOW MENU ===============*/
/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

  toggle.addEventListener('click', () =>{
      // Add show-menu class to nav menu
      nav.classList.toggle('show-menu')

      // Add show-icon to show and hide the menu icon
      toggle.classList.toggle('show-icon')
  })
}

const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 300) { // Show backToTopButton
    if(!backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnExit");
      backToTopButton.classList.add("btnEntrance");
      backToTopButton.style.display = "block";
    }
  }
  else { // Hide backToTopButton
    if(backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnEntrance");
      backToTopButton.classList.add("btnExit");
      setTimeout(function() {
        backToTopButton.style.display = "none";
      }, 250);
    }
  }
}

backToTopButton.addEventListener("click", smoothScrollBackToTop);

// function backToTop() {
//   window.scrollTo(0, 0);
// }

function smoothScrollBackToTop() {
  const targetPosition = 0;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 750;
  let start = null;
  
  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
    if (progress < duration) window.requestAnimationFrame(step);
  }
}

function easeInOutCubic(t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t*t + b;
	t -= 2;
	return c/2*(t*t*t + 2) + b;
};

let availableKeywords = [
  'Acceuille',
  'Réseaux',
  'Bureaux',
  'Rendez-vous',
  'Profile',
  'Contact',
  'Facebook',
  'WhatsApp',
  'Messenger',
  'Youtube',
  'Tiktok',
  'Payements',
  'Moneys',
];

const resultsBox = document.querySelector(".result-box"); 
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
  let result = []
  let input = inputBox.value;
  if(input.length){
    result = availableKeywords.filter((keyword)=>{
      return keyword.toLowerCase().includes(input.toLowerCase());
    });
    console.log(result);
  }
  display(result);

  if(!result.length){
    resultsBox.innerHTML = '';
  }
}
function display(result){
  const content = result.map((list)=>{
    return "<li onclick=selectInput(this)>" + list + "</li>";
  });

  resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list){
  inputBox.value = list.innerHTML;
  resultsBox.innerHTML = '';
}

function ouvrepage(){
  var a = document.getElementById('input-box').value;

  if(a === "Accueille"){
      window.open('index.html');
  }
  if(a === "Réseaux"){
      window.open('réseaux.html');
  }
  if(a === "Bureaux"){
      window.open('#');
  }
  if(a === "Rendez-vous"){
      window.open('#');
  }
  if(a === "Profile"){
      window.open('#');
  }
  if(a === "Contact"){
      window.open('#');
  }
  if(a === "Facebook"){
      window.open('https://www.facebook.com/passekdeida.nonguierma.7?mibextid=ZbWKwL');
  }
  if(a === "WhatsApp"){
      window.open('https://wa.me/76636534');
  }
  if(a === "Messenger"){
      window.open('#');
  }
  if(a === "Youtube"){
      window.open('https://youtube.com/@idanonguierma7138?si=b9WN7OFbIMP562hi');
  }
  if(a === "Tiktok"){
      window.open('https://www.tiktok.com/@agencechekina');
  }
  if(a === "Payements"){
      window.open('#');
  }
  if(a === "Moneys"){
      window.open('#');
  }
}