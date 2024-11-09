For HTML links, add the attribute rel="noopener noreferrer" to every link.
For JavaScript, use this function to open a window (or tab):

__________________________________
Navigation (touch):
Issues:
-The time it takes the client to navigate to a link/target



solution:
 .nav-list-item > a,
  #login,#signup{
    transition: unset;
  }
  .nav-list-item > a:hover,
  #login:hover,#signup:hover {
    color: #000;
    background: transparent;
  }
  .nav-list-item > a:active,
  #login:active,#signup:active {
    color: ghostwhite;
    background: #333;
    cursor: pointer;
  }

  const mobileWidth = window.innerWidth <= 900;
if (!mobileWidth) {
  item.addEventListener("mouseenter", hoverOverListItem);
  item.addEventListener("mouseleave", hoverLeaveListItem);
}