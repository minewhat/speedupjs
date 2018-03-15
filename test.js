var assert = require('assert');

describe('Sppedup', function() {
	it('It should execute array in order', function() {
		exexuter(0);
		setTimeout(function() {
	  		assert.equal(JSON.stringify(arr), JSON.stringify(newArr));
		},1000)
	});
});

var arr = [1,2,3,4], newArr=[];
function exexuter(index) {
    if(index < arr.length){
        execute(arr[index], function(){
            exexuter(index+1)
        })
    }
}

function execute(data, callback){
	setTimeout(function(){
		newArr.push(data)
		callback()
	},100)
}