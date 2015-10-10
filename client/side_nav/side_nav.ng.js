angular.module('pnews-factories')

    .factory('SideNav', [
        '$rootScope',
        '$mdSidenav',

        function ($rootScope, $mdSidenav) {

            var sideNavItems = [
                {
                    state: 'main.posts',
                    template: 'Home',
                    icon: 'icons/ic_home_black_24px.svg'
                },
                {
                    state: 'main.auth',
                    template: 'Login',
                    icon: 'icons/ic_input_black_24px.svg'
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
