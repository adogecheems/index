document.addEventListener('DOMContentLoaded', function() {
    const fontLink = document.createElement('link');
    fontLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/lxgw-wenkai-webfont/1.7.0/lxgwwenkai-regular.min.css';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);

    fontLink.onload = function () {
        document.body.style.fontFamily = "'LXGW WenKai', sans-serif";
    };
});
