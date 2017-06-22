"use strict";

var project = new Project();

expect(project.one).toEqual(project.another);

expect('whereAmI').toHaveContent('You are ');

console.log('All tests passed');
