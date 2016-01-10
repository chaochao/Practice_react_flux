// show botton and list 
// need to have state
var React = require('react');
var Button = require('./button');
var ListItem = require('./list-items');
module.exports =React.createClass({
  handleClick: function() {
    this.setState({open: !this.state.open}); //this will force render the component!! setState
    //never do this!!!
    // this.state.open = false 
  },
  getInitialState: function(){ //this is a key function if you change the name the state will be wrong
    return { open: false }
  },
  handleItemClick: function(item){
    console.log(item);
    this.setState({
      open: false,
      itemTitle: item
    });

  },
  render: function() {
    var list = this.props.items.map(function(item){
      return  <ListItem 
              item={item}
              whenItemClicked={this.handleItemClick}
              className={this.state.itemTitle == item ? "active" : ""} />
    }.bind(this)); //this is refering to dropdown obj that's why we can use handleItemClick
    return <div className="dropdown">
    <Button 
      whenClicked={this.handleClick}
      className="btn-default"
      title={this.state.itemTitle || this.props.title}
      subTitleClassName="caret" />
    <ul className={"dropdown-menu " +(this.state.open ? "show": "") }>
    {list}
    </ul>
    </div>    
  }
})