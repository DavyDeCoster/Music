angular.module('myModule',['ngAudio'])
    .controller('audioDemo',function($scope,ngAudio){
        $scope.audio = ngAudio.load('mySound.wav');
    })