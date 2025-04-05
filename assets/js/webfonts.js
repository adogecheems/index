document.addEventListener('DOMContentLoaded', function() {
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                if (!document.body.classList.contains('is-preload')) {
                    const fontLink = document.createElement('link');
                    fontLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/lxgw-wenkai-webfont/1.7.0/lxgwwenkai-regular.min.css';
                    fontLink.rel = 'stylesheet';
                    document.head.appendChild(fontLink);

                    fontLink.onload = function () {
                        document.body.style.fontFamily = "'LXGW WenKai', sans-serif";
                    };
                    
                    // Stop observing once font is loaded
                    observer.disconnect();
                }
            }
        });
    });

    // Start observing the body element for class changes
    observer.observe(document.body, {
        attributes: true,
        attributeFilter: ['class']
    });
});