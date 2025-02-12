const clicarPost = document.querySelectorAll('.post');

clicarPost.forEach(post => {
    post.addEventListener('click', function() {
        let focusPost = document.createElement("div");
        focusPost.width = "500px";
        focusPost.textContent = "cu";
        focusPost.class = "post";
        focusPost.color = "white";
           
        document.body.appendChild(focusPost);
    })
}) 