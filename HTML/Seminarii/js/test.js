async function getPosts(){
   let res = await fetch("https://jsonplaceholder.typicode.com/posts");
   let posts = await res.json();
   posts.forEach((post) => {
    document.querySelector(".post-list").innerHTML += `
    <div class="card" style="width: 96%;">
    <div class="card-body">
      <h5 class="card-title">${post.title}</h5>
      <p class="card-text">${post.body}</p>
    </div>
  </div>

  `
    
   }); 
}
getPosts();

