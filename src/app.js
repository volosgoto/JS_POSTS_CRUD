import { http } from './http';
import { ui } from './ui';

// Get Posts from DOM load
document.addEventListener('DOMContentLoaded', getPosts);

function getPosts(params) {
    http.get('http://localhost:3000/posts')
    // .then(data => console.log(data))
    .then(data => ui.showPosts(data))
    // .catch(err => console.log(err));
    .catch(err => console.log(err));
    
}