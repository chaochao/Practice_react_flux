var React = require('react');
// this is for others can use this class
module.exports = React.createClass({
  render: function() {
    return <button className={"btn "+this.props.className} type="button">
      {this.props.title} 
      <span className={this.props.subTitleClassName}>{this.props.subTitle}</span>
    </button>
  }
});
