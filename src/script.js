const clickedPost = document.querySelectorAll('.post');

clickedPost.forEach(post => {
    post.addEventListener('click', function() {
        const window = document.getElementById('windowContent');
        const createPost = document.getElementById('createPost');
        const btn = document.getElementById('mainButton');

        createPost.classList.add('hidden');
        window.classList.add('open');
        btn.classList.add('hidden')
        
        const focusPost = document.createElement("div");
        window.append(focusPost);
      
        focusPost.textContent = "Isso é um postite aberto";
        focusPost.classList.add ('big-post');
        focusPost.id = 'bigPost'
          
        window.addEventListener('click', (e) =>{
            if(e.target.id == 'exit' || e.target.id == 'windowContent'){
                const bigPost = document.getElementById('bigPost')
                window.classList.remove('open')
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
    window.classList.add('open');
    btn.classList.add('hidden');

    window.addEventListener('click', (e) =>{
        if(e.target.id == 'exit' || e.target.id == 'windowContent'){
            window.classList.remove('open')
            btn.classList.remove('hidden')
        };
    });
};