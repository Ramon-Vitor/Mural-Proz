const clickedPost = document.querySelectorAll('.post');

clickedPost.forEach(post => {
    post.addEventListener('click', function(event) {
        const window = document.getElementById('windowContent');
        const createPost = document.getElementById('createPost');
        const btn = document.getElementById('mainButton');
    
        createPost.classList.add('hidden');
        window.classList.remove('hidden');
        btn.classList.add('hidden')
        
        const focusPost = document.createElement("div");
        window.append(focusPost);
      
        focusPost.textContent = "Isso é um postite aberto";
        focusPost.classList.add ('big-post');
        focusPost.classList.add (event.target.classList[1]);
        focusPost.id = 'bigPost'

        const exitbtn = document.createElement("div");

        focusPost.append(exitbtn);
        exitbtn.textContent ="X"
        exitbtn.classList.add ('exit')
        exitbtn.id = 'exit'
          
        window.addEventListener('click', (e) =>{
            if(e.target.id == 'exit' || e.target.id == 'windowContent'){
                const bigPost = document.getElementById('bigPost')
                window.classList.add("hidden")
                btn.classList.remove('hidden')
                bigPost.remove()
            };
        });       
    })
}) 

function openWindow (){
    const createPost = document.getElementById('createPost');
    const window = document.getElementById('windowContent');
    const btn = document.getElementById('mainButton');
    
    createPost.classList.remove('hidden');
    window.classList.remove('hidden');
    btn.classList.add('hidden');

    window.addEventListener('click', (e) =>{
        if(e.target.id == 'exit' || e.target.id == 'windowContent'){
            window.classList.add("hidden")
            btn.classList.remove('hidden')
        };
    });
};