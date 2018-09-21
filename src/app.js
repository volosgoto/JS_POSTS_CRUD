import { http } from './http';
import { ui } from './ui';

// Listen Get posts on DOM load
document.addEventListener('DOMContentLoaded', getPosts);

// Listen Add post
document.querySelector('.post-submit')
    .addEventListener('click', submitPost);


function getPosts() {
  http.get('http://localhost:3000/posts')
    .then(data => ui.showPosts(data))
    .catch(err => console.log(err));
}


function submitPost() {
  const title = document.querySelector('#title').value;
  const body = document.querySelector('#body').value;

}

