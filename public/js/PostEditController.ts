namespace App {
    export class PostEditController {
        static $inject = ['$http', '$state', 'PostService'];

        private httpService;
        private stateService;
        private postService;
        private updateId;

        public post;

        constructor (
            $http: angular.IHttpService,
            $state: angular.ui.IState,
            postService: App.PostService
        ) {
            this.httpService = $http;
            this.stateService = $state;
            this.postService = postService;

            // Grab a reference to the id of the object
            // passed in through the state service parameters.
            this.updateId = this.stateService.params.id;

            // Pre-populate the fields with the data from the post object.
            this.postService.getPost (this.updateId)
                .success ((response) => {
                    this.post = response [0];
                })
                .error ((response) => {

                })
        }

        public save () {

            this.postService.update (this.updateId, this.post)
                .success ((response) => {
                    console.log ('Data saved.');
                    this.stateService.go ('posts');
                })
                .error ((response) => {

                })


            // let updateId = this.stateService.params.id;
            //
            // // Save the updated data to the server database.
            // this.httpService ({
            //     url: '/posts/' + updateId,
            //     method: 'PUT',
            //     data: {
            //         title: this.post.title,
            //         description: this.post.description,
            //         author: this.post.author
            //     }
            // })
            // .success (() => {
            //     console.log ('Post saved.');
            //     this.stateService.go ('posts');
            // })
            // .error (() => {
            // })
        }
    }
}
