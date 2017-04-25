var menuHeader = (function() {

    var $parent;
    var $open;
    var $close;
    var $body;

    function initial() {
        $open = document.getElementById('show-menu');
        $close = document.getElementById('close-menu');
        $body = document.getElementsByTagName('body')[0];
        $parent = $open.parentElement;

        $open.addEventListener('click', displayMenu);
        $close.addEventListener('click', displayMenu);
    }

    function displayMenu() {
        $body.classList.toggle('fixed');
        $parent.classList.toggle('is-active');
    }

    return {
        init: initial
    }

})();

menuHeader.init();