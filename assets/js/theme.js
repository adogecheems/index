function switchDarkMode(){
	document.querySelector('html').style.setProperty('--article-color', 'rgba(27, 31, 34, 0.8)');
	document.querySelector('html').style.setProperty('--bg-color', '#1b1f22');
	document.querySelector('html').style.setProperty('--font-color', '#ffffff');
	document.querySelector('html').style.setProperty('--button-hover', 'rgba(255, 255, 255, 0.075)');
	document.querySelector('html').style.setProperty('--button-active', 'rgba(255, 255, 255, 0.175)');
	document.querySelector('html').style.setProperty('--bg', 'linear-gradient(to top, rgba(19, 21, 25, 0.5), rgba(19, 21, 25, 0.5))');
	document.querySelector('html').style.setProperty('--img-mask', 'rgba(19, 21, 25, 0.5)');
	document.querySelector('html').style.setProperty('--switch', `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' x='0px' y='0px' viewBox='0 0 100 100' enable-background='new 0 0 100 100' xml:space='preserve'%3E%3Cg%3E%3Cg%3E%3Ccircle fill='none' stroke='%23ffffff' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' cx='34.78' cy='38.597' r='10.994'/%3E%3Cline fill='none' stroke='%23ffffff' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' x1='34.78' y1='15.408' x2='34.78' y2='20.046'/%3E%3Cline fill='none' stroke='%23ffffff' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' x1='18.383' y1='22.2' x2='21.66' y2='25.48'/%3E%3Cline fill='none' stroke='%23ffffff' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' x1='11.591' y1='38.597' x2='16.229' y2='38.597'/%3E%3Cline fill='none' stroke='%23ffffff' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' x1='18.383' y1='54.994' x2='21.663' y2='51.715'/%3E%3Cline fill='none' stroke='%23ffffff' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' x1='34.78' y1='61.787' x2='34.78' y2='57.147'/%3E%3Cline fill='none' stroke='%23ffffff' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' x1='51.177' y1='54.994' x2='47.896' y2='51.715'/%3E%3Cline fill='none' stroke='%23ffffff' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' x1='57.969' y1='38.598' x2='53.331' y2='38.598'/%3E%3Cline fill='none' stroke='%23ffffff' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' x1='51.177' y1='22.2' x2='47.896' y2='25.48'/%3E%3C/g%3E%3Cpath fill='none' stroke='%23ffffff' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' d=' M76.274,83.335c-6.798,1.599-13.602-0.716-18.055-5.474c3.045,0.909,6.361,1.063,9.678,0.286 c10.116-2.379,16.389-12.51,14.01-22.625c-0.78-3.317-2.396-6.215-4.567-8.537c6.244,1.867,11.348,6.924,12.947,13.725 C92.664,70.827,86.392,80.956,76.274,83.335z'/%3E%3C/g%3E%3C/svg%3E")`);
	document.querySelector('html').style.setProperty('--close', `url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='20px' height='20px' viewBox='0 0 20 20' zoomAndPan='disable'%3E%3Cstyle%3Eline %7B stroke: %23ffffff%3B stroke-width: 1%3B %7D%3C/style%3E%3Cline x1='2' y1='2' x2='18' y2='18' /%3E%3Cline x1='18' y1='2' x2='2' y2='18' /%3E%3C/svg%3E")`);
	localStorage.setItem('lightMode', false);
}

function switchLightMode(){
	document.querySelector('html').style.setProperty('--article-color', 'rgba(255, 255, 255, 0.6)');
	document.querySelector('html').style.setProperty('--bg-color', '#ffffff');
	document.querySelector('html').style.setProperty('--font-color', '#434b4d');
	document.querySelector('html').style.setProperty('--button-hover', 'rgba(255, 158, 189, 0.075)');
	document.querySelector('html').style.setProperty('--button-active', 'rgba(255, 158, 189, 0.175)');
	document.querySelector('html').style.setProperty('--bg', 'linear-gradient(to top, rgba(255, 158, 189, 0.6), 19%, rgba(255, 255, 255, 0.95))');
	document.querySelector('html').style.setProperty('--img-mask', 'transparent');
	document.querySelector('html').style.setProperty('--switch', `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' x='0px' y='0px' viewBox='0 0 100 100' enable-background='new 0 0 100 100' xml:space='preserve'%3E%3Cg%3E%3Cg%3E%3Ccircle fill='none' stroke='%231b1f22' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' cx='34.78' cy='38.597' r='10.994'/%3E%3Cline fill='none' stroke='%231b1f22' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' x1='34.78' y1='15.408' x2='34.78' y2='20.046'/%3E%3Cline fill='none' stroke='%231b1f22' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' x1='18.383' y1='22.2' x2='21.66' y2='25.48'/%3E%3Cline fill='none' stroke='%231b1f22' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' x1='11.591' y1='38.597' x2='16.229' y2='38.597'/%3E%3Cline fill='none' stroke='%231b1f22' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' x1='18.383' y1='54.994' x2='21.663' y2='51.715'/%3E%3Cline fill='none' stroke='%231b1f22' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' x1='34.78' y1='61.787' x2='34.78' y2='57.147'/%3E%3Cline fill='none' stroke='%231b1f22' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' x1='51.177' y1='54.994' x2='47.896' y2='51.715'/%3E%3Cline fill='none' stroke='%231b1f22' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' x1='57.969' y1='38.598' x2='53.331' y2='38.598'/%3E%3Cline fill='none' stroke='%231b1f22' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' x1='51.177' y1='22.2' x2='47.896' y2='25.48'/%3E%3C/g%3E%3Cpath fill='none' stroke='%231b1f22' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' d=' M76.274,83.335c-6.798,1.599-13.602-0.716-18.055-5.474c3.045,0.909,6.361,1.063,9.678,0.286 c10.116-2.379,16.389-12.51,14.01-22.625c-0.78-3.317-2.396-6.215-4.567-8.537c6.244,1.867,11.348,6.924,12.947,13.725 C92.664,70.827,86.392,80.956,76.274,83.335z'/%3E%3C/g%3E%3C/svg%3E")`);
	document.querySelector('html').style.setProperty('--close', `url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='20px' height='20px' viewBox='0 0 20 20' zoomAndPan='disable'%3E%3Cstyle%3Eline %7B stroke: %231b1f22%3B stroke-width: 1%3B %7D%3C/style%3E%3Cline x1='2' y1='2' x2='18' y2='18' /%3E%3Cline x1='18' y1='2' x2='2' y2='18' /%3E%3C/svg%3E")`);
	localStorage.setItem('lightMode', true);
}

if (localStorage.getItem('lightMode') === null){
	localStorage.setItem('lightMode', 'true');
}

if(localStorage.getItem('lightMode') === 'true'){
	switchLightMode();
}else{
	switchDarkMode();
}
 
document.getElementById("switch").addEventListener("click", function(){
	if(localStorage.getItem('lightMode') === 'true'){
		switchDarkMode();
	}else{
		switchLightMode();
	}
});