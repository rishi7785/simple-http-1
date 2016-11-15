namespace App {
    export class HomeController {
        static $inject = ['$http', 'PostService'];

        private httpService;
        private postService;

        public postList;

        constructor ($http: angular.IHttpService, postService: App.PostService) {
            this.httpService = $http;
            this.postService = postService;

            console.log ('This is my post service: ', this.postService);

            // Auto load the posts as soon as this Object
            // is created.
            this.postService.getPostList ()
                .success ((response) => {
                    console.info ('This is the response: ', response);
                    this.postList = response;
                })
                .error ((response) => {
                    console.error ('There was an error: ', response);
                });
        }
    }
}
