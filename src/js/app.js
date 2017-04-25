var menuHeader = (function() {

    var $parent;
    var $open;
    var $close;

    function initial() {
        $open = document.getElementById('show-menu');
        $close = document.getElementById('close-menu');
        $parent = $open.parentElement;

        $open.addEventListener('click', displayMenu);
        $close.addEventListener('click', displayMenu);
    }

    function displayMenu() {
        $parent.classList.toggle('is-active');
    }

    return {
        init: initial
    }

})();

menuHeader.init();