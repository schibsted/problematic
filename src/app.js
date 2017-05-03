import problems from './problems.json';
import jQuery from 'jquery';

// Dispenses a random problem from a given set of problems.
//
// problems - Just an Array of Strings, yo.
//
// Returns a String describing a problem.
const dispense = (problems) => {
  return problems[
    Math.floor(Math.random() * (problems.length))
  ];
}

const problem = dispense(problems);

const problemElement = jQuery('#problem');
const hintElement = jQuery('#hint');

problemElement.html(problem.shift());

if (problem.length >= 1) {
  hintElement.css('visibility', 'visible');
}

hintElement.on('click', () => {
  problemElement.html(problem.shift());

  if (problem.length <= 1) {
    hintElement.css('visibility', 'hidden');
  }
});
