var expect = function(objectUnderTest) {
  this.objectUnderTest = objectUnderTest;

  function toEqual(expectedResult){
    if (objectUnderTest !== expectedResult ) {
        throw Error("Expected " + objectUnderTest + " to be Equal to " + expectedResult + "." );
      }
      return ('Pass: ' + objectUnderTest + " is Equal to " + expectedResult);
    }

  function toHaveContent(expectedResult){
    var testSubject = document.getElementById(objectUnderTest).innerHTML;
    if ( !testSubject.includes(expectedResult) ) {
      throw new Error("Expected " + objectUnderTest + " to have content " + expectedResult + ".");
    }
    return ('Pass: ' + objectUnderTest + " has content " + expectedResult + ".");
  }

  return {toEqual: toEqual}
}
