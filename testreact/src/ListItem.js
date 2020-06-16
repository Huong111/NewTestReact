import React, { Component } from "react";
import "./ListItem.css";

class Count extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      
      <div className="countClick">
        {this.state.count}
        <button onClick={this.handleClick}> Vote</button>
      </div>
    );
  }
}




function ListItems(props) {
  const items = props.items;
  const listItems = items.map((item) => {
    return (
      <div className="list " key="item.key">
        <p>
          {item.text}
          <Count />
        </p>
      </div>
    );
  });
  return <div>{listItems}</div>;
}

export default ListItems;
