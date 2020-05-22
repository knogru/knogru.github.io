const React = require("react");

module.exports = class MainSection extends React.Component {
  render() {
    return (
      <section className="mainSection">
        <div>
          <h1>More than just shorter links</h1>
          <p>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button>Get Started</button>
        </div>
        <div>
          <img
            src="images/illustration-working.svg"
            alt="Illustration of a person working on a computer."
            className="pushRight"
          />
        </div>
      </section>
    );
  }
};
