namespace App {
    export class PostService {
        static $inject = ['$http'];

        private httpService;

        constructor ($http: angular.IHttpService) {
            this.httpService = $http;
        }

        public getPostList () {
            this.httpService ({
                url: '/posts',
                method: 'GET'
            })
            .success ((response) => {
                console.log ('This is the response: ', response);
            })
            .error ((response) => {
            });
        }
    }
}
