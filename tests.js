// test the time it takes to click a link on page load
// window.onload = () => {
//     let interval,elapsed;
//     // start time
//     const start = Date.now();
//     // start interval
//     interval = setInterval(()=>{
//         // retrieve ms
//         const mills = Date.now() - start;
//         console.log(mills/1000)
//         elapsed = (mills/1000)
//     },10)

// // test link click
// const links = [login,signup,...navlistitems]
// links.forEach((link,indx)=>{
//     link.onclick = e => {
//         // clear interval timer
//         clearInterval(interval)
//         // console end time
//         console.log('time to link: ' + elapsed)
//     }
// })
// }


// test toggle nav by class
const toggleNav = (nav) => {
nav.classList.toggle('hi-nav')
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
const mobbtn = document.getElementById('span-container')
const spanclasses = ['top-span','mid-span','bottom-span']
const spans = [...mobbtn.children]
mobbtn.onclick = e => {
    console.log('target acquired')
    spans.forEach((sp,idx)=>{
       sp.classList.toggle(spanclasses[idx])
       toggleNav(document.getElementById('nav'))
    })
}

// resize window
window.onresize = e => {
  // toggle button classes are removed
  if(window.innerWidth > 989){
    removeNav(document.getElementById('nav'))
    spans.forEach(sp=> revertSpan(sp))
  }

}
