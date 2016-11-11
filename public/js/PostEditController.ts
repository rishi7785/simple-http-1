namespace App {
    export class PostEditController {
        static $inject = ['$http', '$state', '$stateParams'];

        private httpService;
        private stateService;

        constructor (
            $http: angular.IHttpService,
            $state: angular.ui.IState
        ) {
            this.httpService = $http;
            this.stateService = $state;

            console.log ('here now: ', $state.params);
        }

        public getPostData () {
            this.httpService ({
                url: '/posts',
                method: 'GET'
            })
            .success ((response) => {
                console.log ('Test data: ', response);
            })
            .error ((response) => {
            });
        }
    }
}
