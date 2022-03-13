// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі
// поточного поста
let block = document.getElementById('wrap');
fetch(' https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(posts => {
        for (let post of posts) {
            let div = document.createElement('div');
            div.innerHTML = `<h3>Номер користувача: ${post.userId}</h3>
<h3>Номер поста: ${post.id}</h3>
<h2>${post.title}</h2>
<p>${post.body}</p>`;

            let btn = document.createElement('button');
            btn.innerText = 'comments'
            block.append(div, btn);

            btn.onclick = function () {
                fetch('https://jsonplaceholder.typicode.com/comments')
                    .then(value => value.json())
                    .then(comments => {
                        for (let comment of comments) {
                            if (post.id === comment.postId) {
                                let bl =  document.createElement('div');
                                bl.innerHTML = `<h3>Email: ${comment.email}</h3>
                                <h4>Comment: ${comment.body}<h4>`
                                div.appendChild(bl);
                            }
                        }
                    })
                btn.disabled = true;
            }
        }
    })

