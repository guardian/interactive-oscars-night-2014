define([
    'ractive',
    'text!templates/appTemplate.html',
    'modules/pageInfo'
], function(
    Ractive,
    appTemplate,
    pageInfo
) {
   'use strict';

    function init(el, context, config, mediator) {
        // DEBUG: What we get given on boot
        //console.log(el, context, config, mediator);

        pageInfo.init();


        // var main = new Ractive({
        //     el: el,
        //     template: appTemplate

        // });



    }

    return {
        init: init
    };
});
