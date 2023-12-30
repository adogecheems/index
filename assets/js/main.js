/*
	Dimension by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#wrapper'),
		$header = $('#header'),
		$footer = $('#footer'),
		$main = $('#main'),
		$main_articles = $main.children('article');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Fix: Flexbox min-height bug on IE.
		if (browser.name == 'ie') {

			var flexboxFixTimeoutId;

			$window.on('resize.flexbox-fix', function() {

				clearTimeout(flexboxFixTimeoutId);

				flexboxFixTimeoutId = setTimeout(function() {

					if ($wrapper.prop('scrollHeight') > $window.height())
						$wrapper.css('height', 'auto');
					else
						$wrapper.css('height', '100vh');

				}, 250);

			}).triggerHandler('resize.flexbox-fix');

		}

	// Nav.
		var $nav = $header.children('nav'),
			$nav_li = $nav.find('li');

		// Add "middle" alignment classes if we're dealing with an even number of items.
			if ($nav_li.length % 2 == 0) {

				$nav.addClass('use-middle');
				$nav_li.eq( ($nav_li.length / 2) ).addClass('is-middle');

			}

	// Main.
		var	delay = 325,
			locked = false;

		// Methods.
			$main._show = function(id, initial) {

				var $article = $main_articles.filter('#' + id);

				// No such article? Bail.
					if ($article.length == 0)
						return;

				// Handle lock.

					// Already locked? Speed through "show" steps w/o delays.
						if (locked || (typeof initial != 'undefined' && initial === true)) {

							// Mark as switching.
								$body.addClass('is-switching');

							// Mark as visible.
								$body.addClass('is-article-visible');

							// Deactivate all articles (just in case one's already active).
								$main_articles.removeClass('active');

							// Hide header, footer.
								$header.hide();
								$footer.hide();

							// Show main, article.
								$main.show();
								$article.show();

							// Activate article.
								$article.addClass('active');

							// Unlock.
								locked = false;

							// Unmark as switching.
								setTimeout(function() {
									$body.removeClass('is-switching');
								}, (initial ? 1000 : 0));

							return;

						}

					// Lock.
						locked = true;

				// Article already visible? Just swap articles.
					if ($body.hasClass('is-article-visible')) {

						// Deactivate current article.
							var $currentArticle = $main_articles.filter('.active');

							$currentArticle.removeClass('active');

						// Show article.
							setTimeout(function() {

								// Hide current article.
									$currentArticle.hide();

								// Show article.
									$article.show();

								// Activate article.
									setTimeout(function() {

										$article.addClass('active');

										// Window stuff.
											$window
												.scrollTop(0)
												.triggerHandler('resize.flexbox-fix');

										// Unlock.
											setTimeout(function() {
												locked = false;
											}, delay);

									}, 25);

							}, delay);

					}

				// Otherwise, handle as normal.
					else {

						// Mark as visible.
							$body
								.addClass('is-article-visible');

						// Show article.
							setTimeout(function() {

								// Hide header, footer.
									$header.hide();
									$footer.hide();

								// Show main, article.
									$main.show();
									$article.show();

								// Activate article.
									setTimeout(function() {

										$article.addClass('active');

										// Window stuff.
											$window
												.scrollTop(0)
												.triggerHandler('resize.flexbox-fix');

										// Unlock.
											setTimeout(function() {
												locked = false;
											}, delay);

									}, 25);

							}, delay);

					}

			};

			$main._hide = function(addState) {

				var $article = $main_articles.filter('.active');

				// Article not visible? Bail.
					if (!$body.hasClass('is-article-visible'))
						return;

				// Add state?
					if (typeof addState != 'undefined'
					&&	addState === true)
						history.pushState(null, null, '#');

				// Handle lock.

					// Already locked? Speed through "hide" steps w/o delays.
						if (locked) {

							// Mark as switching.
								$body.addClass('is-switching');

							// Deactivate article.
								$article.removeClass('active');

							// Hide article, main.
								$article.hide();
								$main.hide();

							// Show footer, header.
								$footer.show();
								$header.show();

							// Unmark as visible.
								$body.removeClass('is-article-visible');

							// Unlock.
								locked = false;

							// Unmark as switching.
								$body.removeClass('is-switching');

							// Window stuff.
								$window
									.scrollTop(0)
									.triggerHandler('resize.flexbox-fix');

							return;

						}

					// Lock.
						locked = true;

				// Deactivate article.
					$article.removeClass('active');

				// Hide article.
					setTimeout(function() {

						// Hide article, main.
							$article.hide();
							$main.hide();

						// Show footer, header.
							$footer.show();
							$header.show();

						// Unmark as visible.
							setTimeout(function() {

								$body.removeClass('is-article-visible');

								// Window stuff.
									$window
										.scrollTop(0)
										.triggerHandler('resize.flexbox-fix');

								// Unlock.
									setTimeout(function() {
										locked = false;
									}, delay);

							}, 25);

					}, delay);


			};

		// Articles.
			$main_articles.each(function() {

				var $this = $(this);

				// Close.
					$('<div class="close">Close</div>')
						.appendTo($this)
						.on('click', function() {
							location.hash = '';
						});

				// Prevent clicks from inside article from bubbling.
					$this.on('click', function(event) {
						event.stopPropagation();
					});

			});

		// Events.
			$body.on('click', function(event) {

				// Article visible? Hide.
					if ($body.hasClass('is-article-visible'))
						$main._hide(true);

			});

			$window.on('keyup', function(event) {

				switch (event.keyCode) {

					case 27:

						// Article visible? Hide.
							if ($body.hasClass('is-article-visible'))
								$main._hide(true);

						break;

					default:
						break;

				}

			});

			$window.on('hashchange', function(event) {

				// Empty hash?
					if (location.hash == ''
					||	location.hash == '#') {

						// Prevent default.
							event.preventDefault();
							event.stopPropagation();

						// Hide.
							$main._hide();

					}

				// Otherwise, check for a matching article.
					else if ($main_articles.filter(location.hash).length > 0) {

						// Prevent default.
							event.preventDefault();
							event.stopPropagation();

						// Show article.
							$main._show(location.hash.substr(1));

					}

			});

		// Scroll restoration.
		// This prevents the page from scrolling back to the top on a hashchange.
			if ('scrollRestoration' in history)
				history.scrollRestoration = 'manual';
			else {

				var	oldScrollPos = 0,
					scrollPos = 0,
					$htmlbody = $('html,body');

				$window
					.on('scroll', function() {

						oldScrollPos = scrollPos;
						scrollPos = $htmlbody.scrollTop();

					})
					.on('hashchange', function() {
						$window.scrollTop(oldScrollPos);
					});

			}

		// Initialize.

			// Hide main, articles.
				$main.hide();
				$main_articles.hide();

			// Initial article.
				if (location.hash != ''
				&&	location.hash != '#')
					$window.on('load', function() {
						$main._show(location.hash.substr(1), true);
					});

})(jQuery);

var light_mode = true;
document.getElementById("switch").addEventListener("click", function() {
	if (light_mode){
		document.querySelector('html').style.setProperty('--article-color', 'rgba(27, 31, 34, 0.8)');
		document.querySelector('html').style.setProperty('--bg-color', '#1b1f22');
		document.querySelector('html').style.setProperty('--font-color', '#ffffff');
		document.querySelector('html').style.setProperty('--button-hover', 'rgba(255, 255, 255, 0.075)');
		document.querySelector('html').style.setProperty('--button-active', 'rgba(255, 255, 255, 0.175)');
		document.querySelector('html').style.setProperty('--bg', 'linear-gradient(to top, rgba(19, 21, 25, 0.5), rgba(19, 21, 25, 0.5))');
		document.querySelector('html').style.setProperty('--img-mask', 'rgba(19, 21, 25, 0.5)');
		document.querySelector('html').style.setProperty('--switch', `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' x='0px' y='0px' viewBox='0 0 100 100' enable-background='new 0 0 100 100' xml:space='preserve'%3E%3Cg%3E%3Cg%3E%3Ccircle fill='none' stroke='%23ffffff' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' cx='34.78' cy='38.597' r='10.994'/%3E%3Cline fill='none' stroke='%23ffffff' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' x1='34.78' y1='15.408' x2='34.78' y2='20.046'/%3E%3Cline fill='none' stroke='%23ffffff' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' x1='18.383' y1='22.2' x2='21.66' y2='25.48'/%3E%3Cline fill='none' stroke='%23ffffff' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' x1='11.591' y1='38.597' x2='16.229' y2='38.597'/%3E%3Cline fill='none' stroke='%23ffffff' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' x1='18.383' y1='54.994' x2='21.663' y2='51.715'/%3E%3Cline fill='none' stroke='%23ffffff' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' x1='34.78' y1='61.787' x2='34.78' y2='57.147'/%3E%3Cline fill='none' stroke='%23ffffff' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' x1='51.177' y1='54.994' x2='47.896' y2='51.715'/%3E%3Cline fill='none' stroke='%23ffffff' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' x1='57.969' y1='38.598' x2='53.331' y2='38.598'/%3E%3Cline fill='none' stroke='%23ffffff' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' x1='51.177' y1='22.2' x2='47.896' y2='25.48'/%3E%3C/g%3E%3Cpath fill='none' stroke='%23ffffff' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' d=' M76.274,83.335c-6.798,1.599-13.602-0.716-18.055-5.474c3.045,0.909,6.361,1.063,9.678,0.286 c10.116-2.379,16.389-12.51,14.01-22.625c-0.78-3.317-2.396-6.215-4.567-8.537c6.244,1.867,11.348,6.924,12.947,13.725 C92.664,70.827,86.392,80.956,76.274,83.335z'/%3E%3C/g%3E%3C/svg%3E");`);
		document.querySelector('html').style.setProperty('--close', `url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='20px' height='20px' viewBox='0 0 20 20' zoomAndPan='disable'%3E%3Cstyle%3Eline %7B stroke: %23ffffff%3B stroke-width: 1%3B %7D%3C/style%3E%3Cline x1='2' y1='2' x2='18' y2='18' /%3E%3Cline x1='18' y1='2' x2='2' y2='18' /%3E%3C/svg%3E");`);
		light_mode = false;
	}else{
		document.querySelector('html').style.setProperty('--article-color', 'rgba(255, 255, 255, 0.6)');
		document.querySelector('html').style.setProperty('--bg-color', '#ffffff');
		document.querySelector('html').style.setProperty('--font-color', '#434b4d');
		document.querySelector('html').style.setProperty('--button-hover', 'rgba(255, 158, 189, 0.075)');
		document.querySelector('html').style.setProperty('--button-active', 'rgba(255, 158, 189, 0.175)');
		document.querySelector('html').style.setProperty('--bg', 'linear-gradient(to top, rgba(255, 158, 189, 0.7), 19%, rgba(255, 255, 255, 0.9))');
		document.querySelector('html').style.setProperty('--img-mask', 'transparent');
		document.querySelector('html').style.setProperty('--switch', `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' x='0px' y='0px' viewBox='0 0 100 100' enable-background='new 0 0 100 100' xml:space='preserve'%3E%3Cg%3E%3Cg%3E%3Ccircle fill='none' stroke='%231b1f22' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' cx='34.78' cy='38.597' r='10.994'/%3E%3Cline fill='none' stroke='%231b1f22' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' x1='34.78' y1='15.408' x2='34.78' y2='20.046'/%3E%3Cline fill='none' stroke='%231b1f22' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' x1='18.383' y1='22.2' x2='21.66' y2='25.48'/%3E%3Cline fill='none' stroke='%231b1f22' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' x1='11.591' y1='38.597' x2='16.229' y2='38.597'/%3E%3Cline fill='none' stroke='%231b1f22' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' x1='18.383' y1='54.994' x2='21.663' y2='51.715'/%3E%3Cline fill='none' stroke='%231b1f22' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' x1='34.78' y1='61.787' x2='34.78' y2='57.147'/%3E%3Cline fill='none' stroke='%231b1f22' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' x1='51.177' y1='54.994' x2='47.896' y2='51.715'/%3E%3Cline fill='none' stroke='%231b1f22' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' x1='57.969' y1='38.598' x2='53.331' y2='38.598'/%3E%3Cline fill='none' stroke='%231b1f22' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' x1='51.177' y1='22.2' x2='47.896' y2='25.48'/%3E%3C/g%3E%3Cpath fill='none' stroke='%231b1f22' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' d=' M76.274,83.335c-6.798,1.599-13.602-0.716-18.055-5.474c3.045,0.909,6.361,1.063,9.678,0.286 c10.116-2.379,16.389-12.51,14.01-22.625c-0.78-3.317-2.396-6.215-4.567-8.537c6.244,1.867,11.348,6.924,12.947,13.725 C92.664,70.827,86.392,80.956,76.274,83.335z'/%3E%3C/g%3E%3C/svg%3E");`);
		document.querySelector('html').style.setProperty('--close', `url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='20px' height='20px' viewBox='0 0 20 20' zoomAndPan='disable'%3E%3Cstyle%3Eline %7B stroke: %231b1f22%3B stroke-width: 1%3B %7D%3C/style%3E%3Cline x1='2' y1='2' x2='18' y2='18' /%3E%3Cline x1='18' y1='2' x2='2' y2='18' /%3E%3C/svg%3E");`);

		light_mode = true;
	}
});
