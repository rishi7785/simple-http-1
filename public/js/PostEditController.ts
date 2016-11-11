namespace App {
    export class PostEditController {
        static $inject = ['$http', '$state'];

        private httpService;
        private stateService;

        constructor (
            $http: angular.IHttpService,
            $state: angular.ui.IState
        ) {
            this.httpService = $http;
            this.stateService = $state;
        }
    }
}
