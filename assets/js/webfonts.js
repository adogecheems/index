// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    // Create a MutationObserver to watch for class changes on body
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                // Check if is-preload class is removed
                if (!document.body.classList.contains('is-preload')) {
                    // Load the font
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