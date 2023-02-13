import './style.css';
import Hero from './components/Hero';
import Projects from './components/projects/Projects';
import About from "./components/about/About";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
    <Hero />
    <Projects />
    <About />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;

window.onload = function(){

  // Custom Cursor
  
  const cursor = document.getElementById("cursor");
  
  window.addEventListener('mousemove', (e)=>{
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
    cursor.setAttribute('data-fromTop', (cursor.offsetTop - window.scrollY));
  })
  
  window.addEventListener('scroll', ()=>{
    const fromTop = parseInt(cursor.getAttribute('data-fromTop'));
    cursor.style.top = window.scrollY + fromTop + 'px';
  })
  
  window.addEventListener('click', ()=>{
    if(cursor.classList.contains('click')){
      cursor.classList.remove('click');
  
      void cursor.offsetWidth;
      cursor.classList.add('click');
    } else{
      cursor.classList.add('click')
    }
  })
  
  // Reveal on scroll
  
  function reveal() {
    var reveals = document.querySelectorAll(".box");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("reveal");
      } else {
        reveals[i].classList.remove("reveal");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  
  // Scroll to specific section
  
  const home = document.querySelector(".navItemH");
  const projects = document.querySelector(".navItemP");
  const about = document.querySelector(".navItemA");
  const contact = document.querySelector(".navItemC");
  
  home.addEventListener("click", function(event) {
    event.preventDefault();
    const heroPosition = document.querySelector(".hero").offsetTop - 50;
    window.scrollTo({
      top: heroPosition,
      behavior: "smooth",
    })
  });
  
  projects.addEventListener("click", function(event) {
    event.preventDefault();
    const projectsPosition = document.querySelector(".projects").offsetTop - 50;
    window.scrollTo({
      top: projectsPosition,
      behavior: "smooth",
    })
  });
  
  about.addEventListener("click", function(event) {
    event.preventDefault();
    const aboutPosition = document.querySelector(".about").offsetTop - 50;
    window.scrollTo({
      top: aboutPosition,
      behavior: "smooth",
    })
  });
  
  contact.addEventListener("click", function(event) {
    event.preventDefault();
    const contactPosition = document.querySelector(".contact").offsetTop - 150;
    window.scrollTo({
      top: contactPosition,
      behavior: "smooth",
    })
  });
  
  // Scroll To Top
  
  document.querySelector(".backToTop").addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

// Mobile Nav

const menuPanel = document.querySelector(".menuPanel");
const menuIcon = document.querySelector(".menu");
const closeIcon = document.querySelector(".close");
const navItems = document.querySelector(".navItems");

closeIcon.classList.add("hidden");

let isMenuOpen = false;

menuIcon.addEventListener("click", ()=>{

  isMenuOpen = true;
  menuPanel.style.top = "0";
  navItems.style.top = "5rem";
  
  if(isMenuOpen){
    menuIcon.classList.add("hidden");
    closeIcon.classList.add("visible");
  }
  else{
    menuIcon.classList.remove("visible");
    closeIcon.classList.add("hidden");
  }
})

closeIcon.addEventListener("click", ()=>{

  isMenuOpen = false;
  menuPanel.style.top = "-90rem";
  navItems.style.top = "-50rem";
  
  if(isMenuOpen){
    menuIcon.classList.add("hidden");
    closeIcon.classList.add("visible");
  }
  else{
    menuIcon.classList.add("visible");
    closeIcon.classList.add("hidden");
    closeIcon.classList.remove("visible");
  }
})

};