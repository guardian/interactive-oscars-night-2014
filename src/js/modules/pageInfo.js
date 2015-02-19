define([], function() {
   'use strict';

    function init() {
        //wrangles the top of the article

        //adds styles the header
        var headerBg = document.getElementsByClassName('content__head');
        if(headerBg.length == 0){
            headerBG = document.getElementsByClassName('article__header');
        }
        for(var i = 0; i < headerBg.length; i ++){
            var el = headerBg[i];
            el.className += ' guOscarsHeader';
        }

        var oscarBG = document.getElementsByClassName('content__main-column');

        for(var i = 0; i < oscarBG.length; i ++){
            if(i == 0){
                var newNode = document.createElement('div'); 
                newNode.className = 'guOscarStatue'; 

                var el = oscarBG[i];
                el.appendChild(newNode);
            }
        }




        //adds styles content
        var contentBg = document.getElementsByClassName('content');
        if(contentBg.length == 0){
            contentBg = document.getElementsByClassName('article__body');
        }
        for(var i = 0; i < contentBg.length; i ++){
            var el = contentBg[i];
            el.className += ' guOscarsContent';
        }

    }

    return {
        init: init
    };
});
