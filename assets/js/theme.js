const THEME_CONFIG = {
    dark: {
        articleBgColor: 'rgba(27, 31, 34, 0.8)',
        mainColor: '#1b1f22',
        fontColor: '#ffffff',
        inactiveWhite: 'rgba(255, 255, 255, 0.075)',
        activeWhite: 'rgba(255, 255, 255, 0.175)',
        bgMask: 'linear-gradient(rgba(19, 21, 25, 0.5), rgba(19, 21, 25, 0.5))',
        imgMask: 'rgba(19, 21, 25, 0.5)',
    },
    light: {
        articleBgColor: 'rgba(255, 255, 255, 0.6)',
        mainColor: '#ffffff',
        fontColor: '#434b4d',
        inactiveWhite: 'rgba(255, 152, 169, 0.125)',
        activeWhite: 'rgba(255, 152, 169, 0.225)',
        bgMask: 'linear-gradient(to top, rgba(	255, 152, 169, 0.8), 19%, rgba(255, 255, 255, 0.8))',
        imgMask: 'transparent',
    }
};

function generateToggleIcon(color) {
    return `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' x='0px' y='0px' viewBox='0 0 100 100' enable-background='new 0 0 100 100' xml:space='preserve'%3E%3Cg%3E%3Cg%3E%3Ccircle fill='none' stroke='${encodeURIComponent(color)}' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' cx='34.78' cy='38.597' r='10.994'/%3E%3Cline fill='none' stroke='${encodeURIComponent(color)}' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' x1='34.78' y1='15.408' x2='34.78' y2='20.046'/%3E%3Cline fill='none' stroke='${encodeURIComponent(color)}' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' x1='18.383' y1='22.2' x2='21.66' y2='25.48'/%3E%3Cline fill='none' stroke='${encodeURIComponent(color)}' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' x1='11.591' y1='38.597' x2='16.229' y2='38.597'/%3E%3Cline fill='none' stroke='${encodeURIComponent(color)}' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' x1='18.383' y1='54.994' x2='21.663' y2='51.715'/%3E%3Cline fill='none' stroke='${encodeURIComponent(color)}' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' x1='34.78' y1='61.787' x2='34.78' y2='57.147'/%3E%3Cline fill='none' stroke='${encodeURIComponent(color)}' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' x1='51.177' y1='54.994' x2='47.896' y2='51.715'/%3E%3Cline fill='none' stroke='${encodeURIComponent(color)}' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' x1='57.969' y1='38.598' x2='53.331' y2='38.598'/%3E%3Cline fill='none' stroke='${encodeURIComponent(color)}' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' x1='51.177' y1='22.2' x2='47.896' y2='25.48'/%3E%3C/g%3E%3Cpath fill='none' stroke='${encodeURIComponent(color)}' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' d=' M76.274,83.335c-6.798,1.599-13.602-0.716-18.055-5.474c3.045,0.909,6.361,1.063,9.678,0.286 c10.116-2.379,16.389-12.51,14.01-22.625c-0.78-3.317-2.396-6.215-4.567-8.537c6.244,1.867,11.348,6.924,12.947,13.725 C92.664,70.827,86.392,80.956,76.274,83.335z'/%3E%3C/g%3E%3C/svg%3E")`;
}

function generateCloseIcon(color) {
    return `url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='${encodeURIComponent(color)}' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='18' y1='6' x2='6' y2='18'%3E%3C/line%3E%3Cline x1='6' y1='6' x2='18' y2='18'%3E%3C/line%3E%3C/svg%3E")`;
}

function generateSelectIcon(color) {
    return `url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='${encodeURIComponent(color)}' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`;
}

function camelToKebab(str) {
    return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

function setTheme(theme) {
    const html = document.documentElement;
    const config = THEME_CONFIG[theme];
    Object.entries(config).forEach(([key, value]) => {
        html.style.setProperty(`--${camelToKebab(key)}`, value);
    });
    const icons = {
        toggle: generateToggleIcon(config.fontColor),
        close: generateCloseIcon(config.fontColor),
        select: generateSelectIcon(config.fontColor)
    };
    Object.entries(icons).forEach(([key, value]) => {
        html.style.setProperty(`--${key}-icon`, value);
    });
    localStorage.setItem('theme', theme);
}

const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
mediaQuery.addEventListener('change', ({ matches }) => {
    setTheme(matches ? 'dark' : 'light');
});

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('toggle').addEventListener('click', () => {
        setTheme(localStorage.getItem('theme') === 'light' ? 'dark' : 'light');
    });
});

setTheme(localStorage.getItem('theme') || (mediaQuery.matches ? 'dark' : 'light'));