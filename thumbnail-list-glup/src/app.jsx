var React = require('react');
var ThumbnailList = require('./thumbnail-list');

var options = {
  thumbnailData:  [{
    title: 'Show Courses',
    number: 120,
    header: 'Learn React',
    description: 'test',
    imageUrl: 'https://raw.githubusercontent.com/wiki/facebook/react/react-logo-1000-transparent.png'
  },{
    title: 'Show Courses',
    number: 25,
    header: 'Learn Gulp',
    description: 'test2',
    imageUrl: 'http://brunch.io/images/others/gulp.png'
  }]
};


var element = React.createElement(ThumbnailList, options);
React.render(element, document.querySelector('.container'));