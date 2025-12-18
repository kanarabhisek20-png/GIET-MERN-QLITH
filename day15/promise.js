console.log("today we are going to learn js promise");

document.addEventListener("keydown", (e) => {
    console.log(e.key);
    console.log(e.code);
    console.log(e.keyCode);
    console.log(e.ctrlKey);
    console.log(e.altKey);
    console.log(e.shiftKey);
    // console.log("key down")
})

// // document.addEventListener("keyup", () => {
// //     console.log("key up");
// // })

// document.addEventListener("keypress", () => {
//     console.log("key press");
// })

let inputfield=document.querySelector("#input-tag");  //for targeting
inputfield.addEventListener("input",(e)=>{
    console.log(e)
    console.log("input event");
})

// inputfield.addEventListener("change",()=>{
//     console.log("change event");
// })

// inputfield.addEventListener("focus",()=>{
//     console.log("focus event");
// })

// inputfield.addEventListener("blur",()=>{
//     console.log("blur event");
// })

let form=document.querySelector("form");
    form.addEventListener("submit",(evl) =>{
        console.log(evl)
        evl.preventDefault()
    console.log("submit")
})

// //window
// // window.addEventListener("load",()=>{
// //     console.log("load")
// // })

window.addEventListener("DOMconentLoaded",(e)=>{
    console.log("dom load")
    console.log(e);
})

// window.addEventListener("resize",()=>{
//     console.log("resize")
// })

// window.addEventListener("scroll",()=>{
//     console.log("scroll")
// })

