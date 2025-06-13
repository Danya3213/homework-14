import { Component } from "react";
import GifItem from "./Item/Item";

export default class GifList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifData: this.props.gifList,
    };
  }
  render() {
    return (
      <article className="wrapper__article">
        <h2 className="wrapper__title--middle">Gifs list</h2>
        <ul className="wrapper__list">
          {this.props.data && this.props.data.length > 0
            ? this.props.data.map((item) => {
                return (
                  <GifItem item={item} key={item.id} />
                );
              })
            : ""}
        </ul>
      </article>
    );
  }
}
