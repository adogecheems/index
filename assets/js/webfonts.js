const linkElement = document.createElement('link');
linkElement.rel = 'stylesheet';
linkElement.href = 'https://cdnjs.cloudflare.com/ajax/libs/lxgw-wenkai-webfont/1.7.0/lxgwwenkai-regular.min.css';

document.head.appendChild(linkElement);

linkElement.onload = () => document.body.style.fontFamily = "'LXGW WenKai', sans-serif";