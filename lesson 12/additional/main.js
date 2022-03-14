// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости
//     поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі
//     поточного поста

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        for (let user of users) {
            let block = document.createElement('div');
            document.body.appendChild(block);
            block.innerHTML = `<h2>Id User: ${user.id}</h2><h3>${user.name}</h3> <h2>${user.username}</h2>`;
            let btn = document.createElement('button');
            btn.innerText = 'click';
            block.appendChild(btn);
            btn.onclick = function () {
                fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(value => value.json())
                    .then(posts => {
                        for (let post of posts) {
                            let div = document.createElement('div');
                            if (post.userId === user.id) {
                                block.appendChild(div);
                                div.innerHTML = `<h2>ID Post: ${post.id}</h2>
<h2>Title: ${post.title}</h2>
<h3>Post: ${post.body}</h3>`;
                            }
                            let btnComment = document.createElement('button');
                            btnComment.innerText = 'comments';
                            div.appendChild(btnComment);
                            btnComment.onclick = function () {
                                fetch('https://jsonplaceholder.typicode.com/comments')
                                    .then(value => value.json())
                                    .then(comments =>{
                                        for (let comment of comments) {
                                            if (comment.postId === post.id){
                                                let divComment = document.createElement('div');
                                                divComment.innerHTML = `<h2>ID Comment: ${comment.id}</h2>
<h3>${comment.body}</h3>`
                                                div.appendChild(divComment)
                                            }
                                        }
                                    })
                                btnComment.disabled = true;
                            }
                        }
                    })
                btn.disabled = true;

            }
        }
    })