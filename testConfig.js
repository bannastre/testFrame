$(document).ready(function(){

  var objectUnderTest;

  var expect = function(objectUnderTest) {
    return objectUnderTest;
  }

  expect.prototype.toEq = function(expectedResult){
    objectUnderTest === expectedResult;
  }

  expect(one).toEq('1')

  var runTests = function(){
    console.log('Tests running...');

    // TODO: loop through Tests
    if (expect() === true) {
      console.log('Pass');
    } else {
      console.log('Fail');
    }

    console.log('Tests complete.');
  }

  runTests();

});
