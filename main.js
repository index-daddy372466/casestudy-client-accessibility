const navlistitems = document.querySelectorAll(".nav-list-item>a");
const login = document.getElementById("login");
const signup = document.getElementById("signup");
const mobbtn = document.getElementById('span-container')
const mobwrap = document.getElementById('mob-wrapper')
const spanclasses = ['top-span','mid-span','bottom-span']
const spans = [...mobbtn.children]
const mobileWidth = window.innerWidth <= 989;

let interval;
// iterate over nav list items and execute event listeners
navlistitems.forEach((item, index) => {
 if(!mobileWidth){
  item.addEventListener("mouseenter", hoverOverListItem);
  item.addEventListener("mouseleave", hoverLeaveListItem);
 }
  
});

// navigation hover over and hover leave events
function hoverOverListItem(e) {
  let event = e || window;
  const hr = document.createElement("hr");
  const smidge = 12;
  const midHeight = e.currentTarget.clientHeight / 2 + smidge;
  const hrclass = "hr-class";
  hr.classList.add(hrclass);
  hr.style.top = midHeight + "px";
  if (event.currentTarget.children.length < 1) {
    event.currentTarget.appendChild(hr);
  }
}
function hoverLeaveListItem(e) {
  let event = e || window;
  const hrclass = ".hr-class";
  const hr = document.querySelector(hrclass);
  if (
    event.currentTarget.children.length > 0 &&
    event.currentTarget.children.length < 2
  ) {
    event.currentTarget.removeChild(hr);
  }
}
function invertHeader(){
  const navclosed = document.querySelector('#nav').classList['value'].split` `.filter(x=>/(hi-nav|bye-nav)/i.test(x)).length < 2
  mobwrap.classList.add('invert-env')
  spans.forEach(sp=>navclosed ? sp.classList.add('invert-span') : sp.classList.remove('invert-span'))
  document.getElementById('logo').classList.add('invert-logo')
}
function removeInvertHeader(){
  mobwrap.classList.remove('invert-env')
  spans.forEach(sp=>sp.classList.remove('invert-span'))
  document.getElementById('logo').classList.remove('invert-logo')
}


// test toggle nav by class
  const toggleNav = (nav) => {
  nav.classList.toggle('hi-nav')
  const navclosed = document.querySelector('#nav').classList['value'].split` `.filter(x=>/(hi-nav|bye-nav)/i.test(x)).length < 2
  // conditions based on screen size and scroll position
  if(window.scrollY > 0 && window.innerWidth <= 989){
   if(!navclosed){
    spans.forEach(sp=>sp.classList.remove('invert-span'))
   } else {
    spans.forEach(sp=>sp.classList.add('invert-span'))
  
   }
  }
  }
  const removeNav = (nav) => {
      nav.classList.remove('hi-nav')
  }
  const revertSpan = (span) => {
      let classes = [...span.classList].filter(x=>x!='mob-span'&&x!='no-pointer')
      console.log(classes)
      if(classes.length == 1) span.classList.remove(classes[0])
  }
  // test click mob button
  mobbtn.onclick = e => {
      console.log('target acquired')
      spans.forEach((sp,idx)=>{
         sp.classList.toggle(spanclasses[idx])
      })
      toggleNav(document.getElementById('nav'))
  }
  
  // resize window
  window.onresize = e => {
    // toggle button classes are removed
    if(window.innerWidth > 989){
      removeNav(document.getElementById('nav'))
      spans.forEach(sp=> revertSpan(sp))
    }
  }

// window onscroll
  window.onscroll = e => {
    console.log(window.scrollY)
    if(window.scrollY > 0 && window.innerWidth <= 989){
      invertHeader()
    } else {
      removeInvertHeader()
    }
  }

