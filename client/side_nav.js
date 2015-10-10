angular.module('pnews-factories')

    .factory('SideNav', [
        '$rootScope',
        '$mdSidenav',

        function ($rootScope, $mdSidenav) {

            var sideNavItems = [
                {
                    state: 'main.home',
                    template: 'Home',
                    icon: 'home'
                }
            ];

            return {
                sideNavItems: sideNavItems,
                mdSideNav: function () {
                    return $mdSidenav('nav-left');
                },
                isOpen: function () {
                    return this.mdSideNav().isOpen();
                },
                toggle: function () {
                    return this.mdSideNav().toggle();
                },
                open: function () {
                    return this.mdSideNav().open();
                },
                close: function () {
                    return this.mdSideNav().close();
                }
            };

        }
    ]);
