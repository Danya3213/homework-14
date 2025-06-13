import { Component } from "react";
import "./index.scss";
import GifList from "./Gif/GifList/GifList";
import GifSearch from "./Gif/GifSearch/GIfSearch";
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      gifs: [],
    };
  }

  handleOnClick = () => {
    this.setState({ input: "" });
    try {
      fetch(`
        https://api.giphy.com/v1/stickers/search?api_key=EzhIXigQyVQRnTiGRfYNpxAyZanKx2Gg&q=${this.state.input}&limit=30&offset=0`)
        .then((response) => response.json())
        .then((data) => {
          this.setState(
            {
              gifs: data.data,
            },
            () => {
              if (this.state.gifs.length === 0) {
                this.setState({ input: "there is nothing founded" });

                setTimeout(() => {
                  this.setState({ input: "" });
                }, 1500);
              }
            }
          );
        });
    } catch (error) {
      console.log("server error" + error);
    }
  };

  handleOnChange = (e) => {
    this.setState({ input: e.target.value });
  };

  componentDidMount() {
    try {
      fetch(`
        https://api.giphy.com/v1/stickers/packs/3138/stickers?api_key=EzhIXigQyVQRnTiGRfYNpxAyZanKx2Gg&limit=30&offset=0`)
        .then((response) => response.json())
        .then((data) => {
          this.setState({
            gifs: data.data,
          });
        });
    } catch (error) {
      console.log("server error" + error);
    }
  }

  render() {
    return (
      <>
        <h1 className="wrapper__title">Gifs</h1>
        <GifSearch
          value={this.state.input}
          onClick={this.handleOnClick}
          onChange={this.handleOnChange}
        />
        <GifList data={this.state.gifs} />
      </>
    );
  }
}
