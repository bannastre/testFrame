$(document).ready(function(){

  var test;

  var expect = function(test) {
    // TODO: Have test functions populate from Config file
    return true
  }

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
