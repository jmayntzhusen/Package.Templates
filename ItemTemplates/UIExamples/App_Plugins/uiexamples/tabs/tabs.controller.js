﻿(function () {
    'use strict';

    function tabsController($scope, $timeout, eventsService) {

        var vm = this;

        vm.loading = true;
        vm.tabs = [];
        vm.changeTab = changeTab;

        function changeTab(selectedTab) {
            vm.tabs.forEach(function (tab) {
                tab.active = false;
            });
            selectedTab.active = true;
        };

        eventsService.on("app.tabChange", function (event, args) {
            console.log('Tab switch called', event, args);
            $timeout(function () {
                if (args.alias === 'tabs') {
                    console.log('Tab app active');
                    vm.tabs = [
                        {
                            "alias": "tabOne",
                            "label": "HTML",
                            "active": true
                        },
                        {
                            "alias": "tabTwo",
                            "label": "JavaScript"
                        }
                    ];
                    vm.loading = false;
                }
            });
        });
    };

    angular.module('umbraco').controller('tabsController', tabsController);
})();