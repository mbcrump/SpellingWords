/**
 * Created by Michael on 9/2/2014.
 */
(function(angular) {


    function MainController($scope, $http) {
        $scope.message = "Ridley's Spelling Words";

        var onError = function(reason){
            $scope.error = "Browser doesn't support Web Speech API - update to Chrome";
        };

        $scope.search = function(wordtospell){
            var u = new SpeechSynthesisUtterance(wordtospell);
            speechSynthesis.speak(u)
                .then(onError);

        };


    }

    angular.module("app", []).controller("MainController", ["$scope", "$http", MainController]);

})(angular);