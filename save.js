// Play initial animations on page load.
$window.on('load', function () {
    window.setTimeout(function () {
        $body.removeClass('is-preload');
    }, 100);
});