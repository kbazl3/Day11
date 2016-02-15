app.controller('mainCtrl', function($scope){

	$scope.friends = ["kyle", "hey", "jonny"];

	
	$scope.addFriend = function() {
		$scope.friends.push($scope.modelName);
	}

});