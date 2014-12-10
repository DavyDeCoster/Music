/**
 * Created by Davy on 2/12/2014.
 */
(function(){
    var s = skrollr.init();

    skrollr.menu.init(s, {
        animate: true,

        //The easing function to use.
        easing: 'sqrt',

        duration: function(currentTop, targetTop) {
            //By default, the duration is hardcoded at 500ms.
            return 500;

            //But you could calculate a value based on the current scroll position (`currentTop`) and the target scroll position (`targetTop`).
            //return Math.abs(currentTop - targetTop) * 10;
        }
    });
})();

