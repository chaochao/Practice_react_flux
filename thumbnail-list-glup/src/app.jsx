var React=require('react');
var ThumbnailList=require('./Thumbnail-list') 
var options={
    thumbnailData:[
      {title:'whatever',
      number:5,
      desc:'nothing',
      header:"no1"
      },
      {title:'111whatever',
      number:51,
      desc:'nnnnnnothing',
      header: 'no2'
      }
    ] 
  }
    
  // React, please render this class
  var element = React.createElement(ThumbnailList,options);

  // React, after you render this class, please place it in my body tag
  React.render(element, document.querySelector('.container'));