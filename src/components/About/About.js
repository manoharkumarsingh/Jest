import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Code improve",
      id: 111,
    };
  }
  render() {
    return (
      <div>
        About
        <div className="hlcls">Hello</div>
      </div>
    );
  }
}

export default About;
