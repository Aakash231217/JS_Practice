const myInput = document.getElementById("input-event");

//keyup



myInput.addEventListener("input",(e)=>{
    console.log(e.target.value);
})

// inplace of input if you are writing change then once you are done with writing and shift your focus
// then only it will detect in console.