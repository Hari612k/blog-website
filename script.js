function submitComment(postId){
  const nameInput = document.getElementById(`name-${postId}`);
  const messageInput = document.getElementById(`message-${postId}`);
  const commentList = document.getElementById(`comments-${postId}`);

  const name = nameInput.value.trim();
  const message = messageInput.value.trim();

  if(name === '' || message === ''){
    alert("Please enter both name and comment.");
    return;
  }

  const comment = document.createElement('div');
  comment.classList.add('comment');
  comment.innerHTML = `<strong>${name}:</strong> ${message}`;
  commentList.appendChild(comment);

  nameInput.value = '';
  messageInput.value = '';
}

const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("input", function(){
  const searchValue = this.value.toLowerCase();
  const blogPosts = document.querySelectorAll(".blog-post");

  blogPosts.forEach(post => {
    const title = post.querySelector("h2").textContent.toLowerCase();
    const content = post.querySelector("p").textContent.toLowerCase();

    if(title.includes(searchValue) || content.includes(searchValue)){
      post.style.display = "block";
    } else {
      post.style.display = "none";
    }
  });
});

function share(title){
  alert(`You shared the blog post: "${title}" on social media!`);
}