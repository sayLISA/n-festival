/* Namespacing nfest to avoid conflicts with other code like libraries */
var nfest = nfest || {};
'use strict';

/* Page for filters usable on the homepage */

nfest.filter = (function () {

    /* Launcher function */
    var filterLauncher = function () {
        nfest.filter.filterDayButtons();
        nfest.filter.filterThemeButtons();
        nfest.filter.filterTheme();
    }

    /* Filter on theme function */
    var filterTheme = function () {
        var innovationButton = document.getElementById('innovationFilter'),
            musicButton = document.getElementById('musicFilter'),
            foodButton = document.getElementById('foodFilter'),
            eventList = document.querySelectorAll('.eventObj');

        /* Show all Innovation elements */
        nfest.helpers.onclick(innovationButton, function () {
            var themeSelected = 'Innovation';

            for (i = 0; i < eventList.length; i++) {
                if (nfest.helpers.hasClass(innovationButton, 'fltrClicked')) {
                    var theme = eventList[i].dataset.theme;

                    if (themeSelected !== theme) {
                        eventList[i].classList.add('filterHide');
                    }
                    if (themeSelected === theme) {
                        eventList[i].classList.remove('filterHide');
                    }
                } else {
                    eventList[i].classList.remove('filterHide');
                }
            };

            /* Divide elements in past, current and coming */
            nfest.timeToEvent.pastEvents();
            nfest.timeToEvent.currentEvents();
            nfest.timeToEvent.comingEvents();
        });

        /* Show all Music elements */
        nfest.helpers.onclick(musicButton, function () {
            var themeSelected = 'Music';

            for (i = 0; i < eventList.length; i++) {

                if (nfest.helpers.hasClass(musicButton, 'fltrClicked')) {
                    var theme = eventList[i].dataset.theme;

                    if (themeSelected !== theme) {
                        eventList[i].classList.add('filterHide');
                    }
                    if (themeSelected === theme) {
                        eventList[i].classList.remove('filterHide');
                    }
                } else {
                    eventList[i].classList.remove('filterHide');
                }

            };

            /* Divide elements in past, current and coming */
            nfest.timeToEvent.pastEvents();
            nfest.timeToEvent.currentEvents();
            nfest.timeToEvent.comingEvents();
        });

        /* Show all Food elements */
        nfest.helpers.onclick(foodButton, function () {
            var themeSelected = 'Food';

            for (i = 0; i < eventList.length; i++) {

                if (nfest.helpers.hasClass(foodButton, 'fltrClicked')) {
                    var theme = eventList[i].dataset.theme;

                    if (themeSelected !== theme) {
                        eventList[i].classList.add('filterHide');
                    }
                    if (themeSelected === theme) {
                        eventList[i].classList.remove('filterHide');
                    }
                } else {
                    eventList[i].classList.remove('filterHide');
                }
            };

            /* Divide elements in past, current and coming */
            nfest.timeToEvent.pastEvents();
            nfest.timeToEvent.currentEvents();
            nfest.timeToEvent.comingEvents();

        });

    }

    /* Filter elements in days */
    var filterDayButtons = function () {
        if (window.location.pathname == '/day1') {
            document.getElementById('dayTwoFilter').classList.remove('filterActive');
        } else if (window.location.pathname == '/day2') {
            document.getElementById('dayOneFilter').classList.remove('filterActive');
        } else {
            document.getElementById('dayTwoFilter').classList.remove('filterActive');
        }
    };

    /* Theme filter */
    var filterThemeButtons = function () {
        var innovationButton = document.getElementById('innovationFilter'),
            musicButton = document.getElementById('musicFilter'),
            foodButton = document.getElementById('foodFilter');

        /* Innovation filter selection */
        innovationButton.onclick = function () {
            innovationButton.classList.toggle('fltrClicked');
            musicButton.classList.remove('fltrClicked');
            foodButton.classList.remove('fltrClicked');

            if (nfest.helpers.hasClass(innovationButton, 'fltrClicked')) {
                innovationButton.classList.remove('filterDisable');
                musicButton.classList.add('filterDisable');
                foodButton.classList.add('filterDisable');
            } else {
                musicButton.classList.remove('filterDisable');
                foodButton.classList.remove('filterDisable');
            }
        }

        /* Music filter selection */
        musicButton.onclick = function () {
            musicButton.classList.toggle('fltrClicked');
            innovationButton.classList.remove('fltrClicked');
            foodButton.classList.remove('fltrClicked');

            if (nfest.helpers.hasClass(musicButton, 'fltrClicked')) {
                musicButton.classList.remove('filterDisable');
                innovationButton.classList.add('filterDisable');
                foodButton.classList.add('filterDisable');
            } else {
                innovationButton.classList.remove('filterDisable');
                foodButton.classList.remove('filterDisable');
            }
        }

        /* Food filter selection */
        foodButton.onclick = function () {
            foodButton.classList.toggle('fltrClicked');
            innovationButton.classList.remove('fltrClicked');
            musicButton.classList.remove('fltrClicked');

            if (nfest.helpers.hasClass(foodButton, 'fltrClicked')) {
                foodButton.classList.remove('filterDisable');
                innovationButton.classList.add('filterDisable');
                musicButton.classList.add('filterDisable');
            } else {
                innovationButton.classList.remove('filterDisable');
                musicButton.classList.remove('filterDisable');
            }
        }
    }

    return {
        filterLauncher: filterLauncher,
        filterTheme: filterTheme,
        filterDayButtons: filterDayButtons,
        filterThemeButtons: filterThemeButtons
    }

})();

/* Launcher */
nfest.filter.filterLauncher();