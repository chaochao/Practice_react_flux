var React = require('react');

module.exports = React.createClass({
  handleClick: function(){
  	this.props.whenItemClicked(this.props.item);
  }, //you can directly call whenItemClicked
  render: function(){
  	return <li className={this.props.className}>
  		<a onClick={this.handleClick}>{this.props.item}</a>
  		</li> // this <a> tag is for bootstrap style
  }
});