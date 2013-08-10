﻿// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/options/options.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.
            refreshLang();
            WinJS.Resources.removeEventListener("contextchanged", refreshLang, false);
            WinJS.Resources.addEventListener("contextchanged", refreshLang, false);
        },

        unload: function () {
            // TODO: Respond to navigations away from this page.
        },

        updateLayout: function (element, viewState, lastViewState) {
            /// <param name="element" domElement="true" />

            // TODO: Respond to changes in viewState.
        }
    });
    function refreshLang() {
        var output = document.getElementById('options');
        WinJS.Resources.processAll(output); // Refetch string resources
    }
})();
