const React = require("react");

const ShortenIt = require("./ShortenIt");

module.exports = class Statistics extends React.Component {
  render() {
    return (
      <section className="statisticsSection">
        <div>
          <ShortenIt />
          <div className="centered">
            <h3>Advanced Statistics</h3>
            <p>
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </p>
          </div>

          <div className="cards">
            <div className="card">
              <span className="cardIcon">
                <img
                  src="images/icon-brand-recognition.svg"
                  alt="brand recognition"
                />
              </span>
              <h5>Brand Recognition</h5>
              <p>
                Boost your brand recognition with each click. Generic links
                don’t mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </div>

            <div className="card">
              <span className="cardIcon">
                <img
                  src="images/icon-detailed-records.svg"
                  alt="brand recognition"
                />
              </span>
              <h5>Detailed Records</h5>
              <p>
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </div>

            <div className="card">
              <span className="cardIcon">
                <img
                  src="images/icon-fully-customizable.svg"
                  alt="brand recognition"
                />
              </span>
              <h5>Fully Customizable</h5>
              <p>
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
};
