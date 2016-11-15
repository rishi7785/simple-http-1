namespace App {
    export class PostController {
        static $inject = ['$http', '$state', 'PostService'];

        private httpService;
        private stateService;
        private postService;

        public postList;
        public currentPost;
        public newPost;

        public title;
        public description;
        public author;

        constructor (
            $http: angular.IHttpService,
            $state: angular.ui.IState,
            postService: App.PostService
        ) {
            this.httpService = $http;
            this.stateService = $state;
            this.postService = postService;

            console.log ('- test: ', this.stateService);

            this.postList = [];
            this.newPost = {};

            // Load the posts for the post controller.
            this.getPostList ();
        }

        public getPostList () {
            console.log ('here');
            this.postService.getPostList ()
                .success ((response) => {
                    this.postList = response;
                })
                .error (() => {
                    console.error ('There was an error with the call to "getPostList".');
                })
        }

        public getPost (id) {
            console.log ('here');

            this.postService.getPost (id)
                .success ((response) => {
                    console.log ('Test data: ', response);
                    // this.postList = response;
                    // this.currentPost = response [0];
                })
                .error ((response) => {
                });
        }

        public save () {
            console.log ('Data to save: ', this.title);

            // New call
            let post = {
                title: this.title,
                description: this.description,
                author: this.author
            }

            this.postService.save (post)
                .success ((response) => {
                    console.log ('Test data: ', response);
                })
                .error ((response) => {
                });
        }

        public deletePost (id) {
            console.log ('Deleting Post: ' + id);

            this.httpService ({
                url: '/posts/' + id,
                method: 'DELETE'
            })
            .success ((response) => {
                console.log ('Object deleted.');
                console.log ('Test data: ', response);

                this.stateService.go ('home');
            })
            .error ((response) => {
            });
        }

        public editPost (postId) {
            console.log ('post id: ' + postId);

            this.stateService.go ('posts-edit',
                {
                    id: postId
                }
            );
        }
    }
}
