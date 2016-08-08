routing.$inject = ['$stateProvider'];
export default function routing($stateProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            views: {
                'main-content': {
                    //template: require('./home.html'),
                    //controller: 'homeCtroller',
                    //controllerAs: 'home'
                    template: '<input-component></inpu-component>'
            }
        }
    });
}
