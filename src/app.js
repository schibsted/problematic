import problems from './problems.json';

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

// Render the given problem in the given element.
//
// problem - A String describing a problem.
// element - An HTML element to render it in.
const render = (problem, element) => {
  element.innerHTML = problem;
}

const problem = dispense(problems);
const element = document.getElementById('problem');

render(problem, element);
