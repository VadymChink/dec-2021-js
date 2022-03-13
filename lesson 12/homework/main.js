// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти.
// Застилізувати,за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
let wrapper = document.getElementById('wrap')
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(value => value.json())
//     .then(posts => {
//         for (let post of posts) {
//             let blockPost = document.createElement('div');
//             blockPost.classList.add('post');
//             wrapper.appendChild(blockPost);
//
//             let blockUserId = document.createElement('div');
//             blockUserId.innerText = `Користувач: ${post.userId}`;
//
//             let blockId = document.createElement('div');
//             blockId.innerText = `Номер поста: ${post.id}`;
//
//             let blockTitle = document.createElement('div');
//             blockTitle.innerText = `Заголовок: ${post.title}`;
//
//             let blockBody= document.createElement('div');
//             blockBody.innerText =`Пост: ${post.body}`;
//
//             blockPost.append(blockUserId,blockId,blockTitle,blockBody)
//         }
//     })

//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
let wr = document.createElement('div');
document.body.appendChild(wr)
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(value => value.json())
    .then(comments => {
        for (let comment of comments) {
            let block = document.createElement('div');
            wr.appendChild(block);

            let postId =document.createElement('div');
            postId.innerText = `Пост: ${comment.postId}`;

            let id =document.createElement('div');
            id.innerText = `Номер коментаря: ${comment.id}`;

            let name =document.createElement('div');
            name.innerText = `Назва: ${comment.name}`;

            let email =document.createElement('div');
            email.innerText = `Email: ${comment.email}`;

            let body =document.createElement('div');
            body.innerText =`Комент: ${comment.body}`;

            block.append(postId,id,name,email,body);
        }
    })