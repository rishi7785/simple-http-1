namespace App {
    export class PostController {
        static $inject = ['$http'];

        private httpService;

        public postList;
        public currentPost;
        public newPost;

        public title;
        public description;
        public author;

        constructor ($http: angular.IHttpService) {
            this.httpService = $http;
            this.postList = [];
            this.newPost = {};

            this.getPostList ();
        }

        public getPostList () {
            console.log ('here');
            this.httpService ({
                url: '/posts',
                method: 'GET'
            })
            .success ((response) => {
                console.log ('Test data: ', response);
                this.postList = response;
            })
            .error ((response) => {
            });
        }

        public getPost (id) {
            console.log ('here');
            this.httpService ({
                url: '/posts',
                method: 'GET',
                params: {
                    id: id
                }
            })
            .success ((response) => {
                console.log ('Test data: ', response);
                // this.postList = response;
                this.currentPost = response [0];
            })
            .error ((response) => {
            });
        }

        public save () {
            console.log ('Data to save: ', this.title);

            this.httpService ({
                url: '/posts',
                method: 'POST',
                data: {
                    title: this.title,
                    description: this.description,
                    author: this.author
                }
            })
            .success ((response) => {
                console.log ('Test data: ', response);
            })
            .error ((response) => {
            });
        }
    }
}
