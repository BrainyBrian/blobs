// JavaScript code
// Use JavaScript to track the cursor's position and update the position of the blobs in response
document.addEventListener("mousemove", function(event) {
    var x = event.clientX;
    var y = event.clientY;
  
    // Generate random numbers to update the position of each blob
    var dx1 = Math.random() * 100 - 50;
    var dy1 = Math.random() * 100 - 50;
    var dx2 = Math.random() * 100 - 50;
    var dy2 = Math.random() * 100 - 50;
    var dx3 = Math.random() * 100 - 50;
    var dy3 = Math.random() * 100 - 50;
  
    // Update the position of each blob based on the cursor's position and the random numbers
    document.querySelector("#blob1").style.top = y + dy1 + "px";
    document.querySelector("#blob1").style.left = x + dx1 + "px";
  
    document.querySelector("#blob2").style.top = y + dy2 + "px";
    document.querySelector("#blob2").style.left = x + dx2 + "px";
  
    document.querySelector("#blob3").style.top = y + dy3 + "px";
    document.querySelector("#blob3").style.left = x + dx3 + "px";
  });
  