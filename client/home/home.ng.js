angular.module('pnews-controllers')

    .controller('homeController', [
        '$scope',
        '$meteor',

        function ($scope, $meteor) {
            // TODO:
            $scope.series = [
                {
                    author: {
                        name: 'Yasser',
                        photo: 'img/avatar.png'
                    },
                    title: 'Series 0',
                    posts: [
                        {
                            createdAt: new Date(),
                            content: 'Post 0',
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
                            ]
                        }
                    ]
                },
                {
                    author: {
                        name: 'Yasser',
                        photo: 'img/avatar.png'
                    },
                    title: 'Series 1',
                    posts: [
                        {
                            createdAt: new Date(),
                            content: 'Post 0',
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
                            ]
                        }
                    ]
                }
            ];
            $scope.posts = [
                {
                    author: {
                        name: 'Yasser',
                        photo: 'img/avatar.png'
                    },
                    title: 'Series 0',
                    createdAt: new Date(),
                    content: 'Post 0',
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
                    ]
                },
                {
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
                    }
                }
            ]
        }
    ])

;