const navlistitems = document.querySelectorAll('.nav-list-item>a')
const mobileWidth = window.innerWidth <= 900;
const login = document.getElementById('login')
const signup = document.getElementById('signup')
let interval;
// iterate over nav list items and execute event listeners
navlistitems.forEach((item,index)=>{
    item.addEventListener('mouseenter',hoverOverListItem)
    item.addEventListener('mouseleave',hoverLeaveListItem)
})


// navigation hover over and hover leave events
function hoverOverListItem(e){
    let event = e||window;
    const hr = document.createElement('hr')
    const smidge = 12
    const midHeight = (e.currentTarget.clientHeight / 2) + smidge
    const hrclass = 'hr-class'
    hr.classList.add(hrclass)
    hr.style.top = midHeight + 'px'
    if(event.currentTarget.children.length < 1){
        event.currentTarget.appendChild(hr)
    }
    }
function hoverLeaveListItem(e){
    let event = e||window;
    const hrclass = '.hr-class'
    const hr = document.querySelector(hrclass)
    if(event.currentTarget.children.length > 0 && event.currentTarget.children.length < 2){
        event.currentTarget.removeChild(hr)
    }
}

