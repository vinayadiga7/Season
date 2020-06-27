import React from "react";
import ReactDOM from "react-dom";
import classes from "./index.module.css";
import SeasonDisplay from "./seasonDisplay";
import Spinner from "./spinner";

class App extends React.Component {
  constructor(props) {
    // this will initialise this.props of the component with some necessary
    // properties otherwise this.props will be undefined
    super(props);
    this.state = {
      latitude: null,
      errorMessage: null,
    };
    console.log("From Constructor");
  }

  renderContent() {
    if (this.state.latitude && !this.state.errorMessage) {
      return (
        <div className={classes.row}>
          <div className={classes.col_1_of_2}>
            <SeasonDisplay latitude={this.state.latitude} />
          </div>
        </div>
      );
    }

    if (!this.state.latitude && this.state.errorMessage) {
      return (
        <div className={classes.row}>
          <div className={classes.col_1_of_2}>
            <SeasonDisplay error={this.state.errorMessage} />
          </div>
        </div>
      );
    }

    return (
      <div className={classes.row}>
        <div className={classes.col_1_of_2}>
          <Spinner text="Please allow browser to use your location" />
        </div>
      </div>
    );
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
        });
      },
      (error) => {
        this.setState({
          errorMessage: error.message,
        });
      }
    );
    console.log("From ComponentDidMount");
  }

  render() {
    //conditional rendering
    console.log(this.state);
    return <div className={classes.borderRed}>{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
