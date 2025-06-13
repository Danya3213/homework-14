import { Component } from "react";

export default class GifItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li className={"wrapper__list-item"}>
        <img
          className="wrapper__item-img"
          src={this.props.item.images.fixed_height.url}
          alt={this.props.item.title}
        />
        <h4 className="wrapper__item-text">{this.props.item.title}</h4>
      </li>
    );
  }
}
