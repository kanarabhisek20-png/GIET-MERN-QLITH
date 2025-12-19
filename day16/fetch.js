console.log("Today we are going to learn fetch method");

let promise=new Promise((resolve,reject) => {
    setTimeout(()=> {
        console.log("hello")
        // reject()
        // resolve("success")
        reject("reject")

},2000)
})
console.log(promise);

promise.then((res)=>{
    console.log(res)
}).catch((res)=>{
    console.log(res)
})
// independent used for- to create Asynchronous block.
// fetch method-
// let getData= async() => {
//     let res=fetch("");
//     console.log(res)
// }

// getData()

let getData= async() => 
{
    let res= await fetch("https://jsonplaceholder.typicode.com/posts");
    let data=await res.json()
    console.log(data)
    let ul=document.createElement("ul");
    ul.style.cssText="max-width:1024px;margin:auto;display:flex;flex-wrap:wrap;gap:5px;list-style:none"
    data.forEach((obj)=>
        {
            let li=document.createElement("li");
            li.innerText=obj.title;
            li.style.cssText="width:200px;height:200px;box-shadow:2px 2px 5px black;display:flex;justify-content:center;align-items:center"
            ul.append(li)
        })

    document.body.append(ul)
}

getData()


let createData = async () => {
    let res=await fetch("https://jsonplaceholder.typicode.com/posts" , {
        method:"post",
        body:JSON.stringify({
            name:"Abhi",
            age:21
        }),
        headers:{
            "content-Type":"application/json"
        }
    })
    let data=await res.json();
    console.log(data)
    console.log("Successfully data saved")
}

createData()



// let updateData = async () => {
//     let res=await fetch("https://jsonplaceholder.typicode.com/posts/1",{
//         method: "PUT",
//         body:JSON.stringify({
//             title: "this is the updated title"
//         }),
//         headers: {
//            "content-Type":"application/json" 
//         }
//     });
//     let data=await res.json();
//     console.log(data);
//     console.log("successfully updated")
// }

// updateData()

let deleteData=async()=>{
    let res=await fetch("https://jsonplaceholder.typicode.com/posts/1",{
        method:"DELETE"
    });
    let data=await res.json();
    console.log(data);
    console.log("successfully deleted")
}
deleteData()