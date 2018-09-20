import { http } from './http';

// Get Posts from DOM load
document.addEventListener('DOMContentLoaded', getPosts);

function getPosts(params) {
    http.get('http://localhost:3000/posts')
    .then(data => console.log(data))
    .catch(err => console.log(err));
    
}