(function () {
'use strict';

angular.module('lunchChecker', [])

.controller('lunchCheckerController', function ($scope) {
  $scope.lunchMenu = '';
  $scope.warningLabel = {
  	label: '',
  	color: ''
  };

  $scope.checkLunchMenu = function () {
    $scope.warningLabel = getNumberOfItems($scope.lunchMenu);
  };


  function getNumberOfItems(string) {
  	let states = [{
			label: 'Please enter data first',
  		color: 'red'
  	}, {
  		label: 'Enjoy!',
  		color: 'green'
  	}, {
  		label: 'Too much!',
  		color: 'green'
  	}];

  	if (string === null || string.length === 0) {
  		return states[0];
  	}
    let count = getNonEmptyItems(string);
   	return count === 0 ? states[0] : (count <= 3 ? states[1] : states[2]);
  }

  function getNonEmptyItems (string) {
  	let items = string.split(',');
  	var count = 0;
    items.forEach(function (item) {
			if (item.trim().length !== 0) {
    		count++;
    	}
    });
    return count;
  }

});


})();