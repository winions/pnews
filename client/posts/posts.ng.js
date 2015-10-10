angular.module('pnews-controllers')

    .controller('viewPostController', [
        '$scope',
        '$stateParams',

        function ($scope, $stateParams) {
            var postId = $stateParams.id;
            // TODO: use this postId
            $scope.series = {
                _id: 'sdsad',
                title: 'Series 00',
                author: {
                    name: 'Yasser',
                    photo: 'img/avatar.png'
                },
                posts: [
                    {
                        _id: 'sdsd',
                        author: {
                            name: 'Yasser',
                            photo: 'img/avatar.png'
                        },
                        title: 'Series 1',
                        createdAt: new Date(),
                        content: 'Post 1',
                        hashTags: ['oo', 'pp'],
                        vote: [
                            {
                                voter: 'sddadm;lkjm',
                                voteType: 'up'
                            },
                            {
                                voter: 'sddadm;lkjmsdsds',
                                voteType: 'down'
                            }
                        ],
                        votes: {
                            up: 15,
                            down: 1
                        },
                        currentUserVote: 'up'
                    },
                    {
                        _id: 'sdsd',
                        author: {
                            name: 'Yasser',
                            photo: 'img/avatar.png'
                        },
                        title: 'Series 1',
                        createdAt: new Date(),
                        content: 'Post 1',
                        hashTags: ['oo', 'pp'],
                        vote: [
                            {
                                voter: 'sddadm;lkjm',
                                voteType: 'up'
                            },
                            {
                                voter: 'sddadm;lkjmsdsds',
                                voteType: 'down'
                            }
                        ],
                        votes: {
                            up: 15,
                            down: 1
                        },
                        currentUserVote: 'up'
                    },
                ]
            };

            $scope.setVote = function (vote) {
                // vote is up or down
            }
        }

    ])

;