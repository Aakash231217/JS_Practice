var rect = document.querySelector("#center");
rect.addEventListener("mousemove", function(details) {
   var rectlocation=(rect.getBoundingClientRect());
   var insider=(details.clientX-details-rectlocation.left);
   //it will give you the location
   if(insider < rectlocation.width/2){
    console.log("left");  
   }
   else {
    console.log("right")
   }
}) 