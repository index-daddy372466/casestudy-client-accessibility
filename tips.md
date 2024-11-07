For HTML links, add the attribute rel="noopener noreferrer" to every link.
For JavaScript, use this function to open a window (or tab):

__________________________
Navigation (touch vs desktop):
Issues:
iss#1: 

-Navigation Link remains in hovered state when sliding finger over element [ touch devices ]
-Navigation Link remains in hovered state when touching finger over element [ touch devices ]


solution 1:
configure a @media query
    File: styles.css
    code:
    @media screen and (max-width: 900px) {
      .nav-list-item > a:hover,
      #login:hover,#signup:hover {
        background: unset;
        cursor: unset;
        color: #000;
      }
      .nav-list-item > a{
        transition:unset;
      }
      .nav-list-item > a:active,
      #login:active,#signup:active {
        color: ghostwhite;
        background: #333;
        cursor: pointer;
      }
        #login,#signup{
          transition: none;
        }
    }

solution: 2:
Activate hover eventlisteners based on condition:
    device width
    File: main.js
    code:
    navlistitems.forEach((item,index)=>{
        if(!mobileWidth){
            item.addEventListener('mouseenter',hoverOverListItem)
            item.addEventListener('mouseleave',hoverLeaveListItem)
        } 
    })
__________________________________
Navigation (touch vs desktop):
Issues:
-The time it takes the client to navigate to a link/target








