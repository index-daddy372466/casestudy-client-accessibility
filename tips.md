For HTML links, add the attribute rel="noopener noreferrer" to every link.
For JavaScript, use this function to open a window (or tab):

```
function openPopup(url, name, windowFeatures){
  //Open the popup and set the opener and referrer policy instruction
  var newWindow = window.open(url, name, 'noopener,noreferrer,' + windowFeatures);
  //Reset the opener link
  newWindow.opener = null;
}
```

Add the HTTP response header Referrer-Policy: no-referrer to every HTTP response sent by the application (Header Referrer-Policy information. This configuration will ensure that no referrer information is sent along with requests from the page.