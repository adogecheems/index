document.addEventListener('DOMContentLoaded', function () {
    const observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                if (!document.body.classList.contains('is-preload')) {
                    const fontLink = document.createElement('link');
                    fontLink.href = 'https://npm.elemecdn.com/lxgw-wenkai-webfont@1/lxgwwenkai-regular.css';
                    fontLink.rel = 'stylesheet';
                    document.head.appendChild(fontLink);

                    fontLink.onload = function () {
                        document.body.style.fontFamily = "'LXGW WenKai', sans-serif";
                    };

                    observer.disconnect();
                }
            }
        });
    });

    observer.observe(document.body, {
        attributes: true,
        attributeFilter: ['class']
    });
});