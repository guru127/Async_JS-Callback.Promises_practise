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
     setTimeout(()=>{
         posts.push(post);
     },2000);
 }
    
 creatPosts( {title:"title 3",  body:"this is body three"});

 getPosts();
