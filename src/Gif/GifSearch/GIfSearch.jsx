import { Component } from "react";

export default class GifSearch extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article className="wrapper__article">
        <h2 className="wrapper__title--middle">Search gif</h2>
        <label className={`wrapper__label${this.props.active ? " _error" : ""}`}>
          <input
            className="wrapper__input"
            placeholder="Enter keyword"
            value={this.props.value}
            onChange={this.props.onChange}
            onKeyUp={(e) => (e.key === "Enter" ? this.props.onClick() : "")}
            type="text"
          />
          <button onClick={this.props.onClick} className="wrapper__button">
            Search
          </button>
        </label>
      </article>
    );
  }
}
