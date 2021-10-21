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
async function init(){
    await creatPosts({title:"title 3",  body:'this is body three'});

    getPosts();
}
init();

 
