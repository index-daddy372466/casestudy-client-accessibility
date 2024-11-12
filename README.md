# Case Study: Shaggy Secrets
<img src="./images/desktop.png"/>

## Description

- Stay up to date with the latest gossip that you cannot get anywhere else.
Connect with the right people and you may get lost in a world of secrets.

### Issues:

1. #### _Overlapped Elements_ <br>

<img src="./images/problemissue.jpg" style="transform:scale(.88);"/>

**Description**: <br> Notice how the navigation is reduced in size compared to the desktop view above. The first navigation link, "What we Offer" seems to overlap the logo. Just like our navigation list-items, the logo is covered by an article tag that ulitmately refreshes the page.

```
    <div id="logo-container">
        <a href="/">
          <img src="/images/shh.webp" alt="" height="75" width="85" id="logo" />
        </a>
    </div>
```

After testing, the navigation-item, "What we offer" is clicked on, as this seems to be on a greater index than the logo image.
After modifying the navigation link's href to _#whatweoffer_, we can see that this link has been clicked.

<img src="./images/overlapresult.jpg" style="width:200px;height:200px"/>

If the client intends to click on the logo, then the logo's z-index would need to be higher that the navigation item that overlaps. In result, _What we Offer_ will be inaccessible. 




2. #### _Touch event: element remains in hovered state_ <br>
3. #### _When scrolling down, access the navigation items_ is limited. <br>

**Description**: <br>Whether the target link is directed to a __Blank_ page or __self_, the item touched remains in it's hovered state. The underline-feature seems to be cutting through the navigation-item text.
When scrolling down, access to navigation pane is limited.

<img src="./images/problemissue3.jpg" style="transform:scale(.88);"/><img src="./images/problemissue2.jpg" style="transform:scale(.88);"/>


4. #### _Button-element text color is not consistent with the rest of the page._ <br>

**Description**: <br> Buttons _Login_ & _Signup_ default to light blue. Element consistency and uniformity is weakened. 

<img src="./images/problemissue2.jpg" style="transform:scale(.88);"/>

_____

### Solutions:

1. _Overlapped Elements_
1. _Touch event: element remains in hovered state_
