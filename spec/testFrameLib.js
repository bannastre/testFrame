var expect = function(objectUnderTest) {
  this.objectUnderTest = objectUnderTest;

  function toEqual(expectedResult){
    if (objectUnderTest !== expectedResult ) {
        throw Error("Expected " + objectUnderTest + " to be Equal to " + expectedResult + "." );
      }
      return (objectUnderTest + " is Equal to " + expectedResult);
    }

  return {toEqual: toEqual}
}
