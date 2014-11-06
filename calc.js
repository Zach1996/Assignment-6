var fibonacci = function(n) {
	var result;
	var x = 0;
	var y = 1;
	
	for (var i = 0; i <= n; i++) {
		result = x;
		x = y;
		y = result + x;
	}
	
	return result;
};

var triangular = function(n) {
	var result = 0;
	for (var i = 0; i < n; i++) {
		result = (n*(n + 1))/2;
	}
	return result;
};

var transform = function(f, list) {
	for (var i in list) {
		list[i] = f(list[i]);
	}
	return list;
};

var readNumbers = function () {
	var inputBox = document.getElementById('num');
	var inputStr = inputBox.value;
	var inputArr = inputStr.split(" ");
	var nums = transform(parseInt, inputArr);
		return nums[0];
};
	
var run = function() {
		var number = readNumbers();
		
		var fiber = fibonacci(number);
		var trig = triangular(number);
		
		var output = document.getElementById('result');
		output.innerHTML = 'The ' + number + 'th triangular number is ' + trig + '. The ' + number + 'th fibonacci number is ' + fiber + '.';
}

var start = document.getElementById('runner');
start.onclick = run;		