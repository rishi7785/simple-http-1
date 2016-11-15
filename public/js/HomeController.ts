namespace App {
    export class HomeController {
        static $inject = ['$http'];

        private httpService;

        public postList;

        constructor ($http: angular.IHttpService) {
            this.httpService = $http;

            // Auto load the posts as soon as this Object
            // is created.
            this.getPostList ();
        }

        public getPostList () {
            this.httpService ({
                url: '/posts',
                method: 'GET'
            })
            .success ((response) => {
                console.log ('This is the response: ', response);
                this.postList = response;
            })
            .error ((response) => {
            })
        }
    }
}
