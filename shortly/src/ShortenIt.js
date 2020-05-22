const React = require("react");

module.exports = class ShortenIt extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("submit");
  }

  handleChange(e) {
    //this.setState({e.target.name})
  }

  render() {
    return (
      <form className="shortenIt" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="shorten"
          placeholder="Shorten a link here..."
          onChange={this.handleChange}
        />
        <button type="submit">Shorten It!</button>
      </form>
    );
  }
};
