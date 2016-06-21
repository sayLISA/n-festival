/* Namespacing nfest to avoid conflicts with other code like libraries */
var nfest = nfest || {};
'use strict';

/* Page for menu usable on most of the pages */

nfest.menu = (function () {

    var menuLauncher = function () {
        nfest.menu.menuScrollTop();
        nfest.menu.menuFunctions();
    }; 

    var nLogo = document.getElementById('nLogo'),
        toMenu = document.querySelector('.aboutBackButton');

    var menuFunctions = function () {
        nLogo.removeAttribute('href');
    };

    var menuScrollTop = function () {

        // code by: http://jsfiddle.net/62MTU/15/
        function scrollTo(element, to, duration) {                    
            var start = element.scrollTop,
                change = to - start,
                currentTime = 0,
                increment = 40;
                        
            var animateScroll = function(){        
                currentTime += increment;
                var val = Math.easeInOutQuad(currentTime, start, change, duration);
                element.scrollTop = val;
                if(currentTime < duration) {
                    setTimeout(animateScroll, increment);
                }
            };
            animateScroll();
        }

        //t = current time, b = start value, c = change in value, d = duration
        Math.easeInOutQuad = function (t, b, c, d) {
            t /= d/2;
            if (t < 1) return c/2*t*t + b;
            t--;
            return -c/2 * (t*(t-2) - 1) + b;
        };
    
        var size = document.body.offsetHeight,
            aboutSection = document.querySelector('.aboutArticle'); 

        nLogo.addEventListener('click', function(){           
            aboutSection.classList.add('fadeIn');
            size = size/2;            
            scrollTo(document.body, -size, 1250, 'click');
        });

        toMenu.addEventListener('click', function() {
            size = 1250;            
            scrollTo(document.body, size, 1250, 'click');
        }); 

    }

    return {
        menuLauncher: menuLauncher,
        menuFunctions: menuFunctions,
        menuScrollTop: menuScrollTop
    }

})();

nfest.menu.menuLauncher();