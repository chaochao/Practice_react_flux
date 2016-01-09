var React = require('react');
var Dropdown = require('./dropdown');

var options = {
  title: 'foo' ,
  items: [
    'test1',
    'test2',
    'test3',
    'test4'
  ]
};


var element = React.createElement(Dropdown, options);
React.render(element, document.querySelector('.container'));