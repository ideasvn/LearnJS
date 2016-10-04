angular.module('IdeasVN.Upload',
    ['ng-route']
)
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'app/upload/upload.html',
            controller: 'UploadCtrl'
        });
    }]);