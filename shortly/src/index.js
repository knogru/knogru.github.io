const React = require("react");
const ReactDOM = require("react-dom");

const Menu = require("./Menu");
const MainSection = require("./MainSection");
const Statistics = require("./Statistics");

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Menu />
        <MainSection />
        <Statistics />
      </React.Fragment>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
