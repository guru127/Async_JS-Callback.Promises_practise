const posts =[
    {title:"title 1",  body:"this is body one"},
    {title:"title 2",  body:"this is body two"}
]
const getPosts=()=>{
 setTimeout(()=>{
     let output='';
     posts.forEach((post, index)=>{
         output += `<li>${post.title}</li> `
     });
      document.body.innerHTML = output;

 },1000)
}
 const creatPosts=(post)=>{
     return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            posts.push(post);
            const error =false;

            if(!error){
                resolve();
            }else{
                reject('EROR : Something went wrong')
            }
        },2000);
     });
   }
   creatPosts(
       {title:"title 3",  body:'this is body three'})
        .then(getPosts)
        .catch(err => console.log(err))
 

    //Promise all
     const promise1 = Promise.resolve('Hello Guru ');
     const promise2 = 1996;
     const promise3 = new Promise((resolve, reject)=>
     setTimeout(resolve, 2000, 'Good Bye') 
     );
     //with  fetch function --
     const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
     .then(res =>res.json());

     Promise.all([promise1, promise2, promise3, promise4])
     .then(value =>{
        console.log(value)
     });