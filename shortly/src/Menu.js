const React = require("react");

module.exports = class Menu extends React.Component {
  render() {
    return (
      <nav>
        <h1 className="logo">
          <a href="/">
            <img src="images/logo.svg" alt="logo" />
            Shortly
          </a>
        </h1>
        <ul>
          <li>
            <a href="/features">Features</a>
          </li>
          <li>
            <a href="/pricing">Pricing</a>
          </li>
          <li>
            <a href="/resources">Resources</a>
          </li>
        </ul>
        <div className="toRight">
          <a href="/login">Login</a>
          <a href="/signup" className="signup">
            Sign Up
          </a>
        </div>
      </nav>
    );
  }
};
