import React from "react";

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newscount: 0,
    };
  }
  componentDidMount() {
    this.func(90, 80);
  }

  func = async (no1, no2) => {
    let url = "https://dummyjson.com/posts";
    return await fetch(url)
      .then((res) => res.json())
      .then((result) => {
        return result;
      });
  };

  signOut() {
    this.func(90, 80);
  }

  checkBoxChecked(id, test) {
    return {
      id: 3,
    };
  }

  loadData(id, test) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.setState({
          newscount: 50,
        });
        resolve({ me: 12 });
      }, 2000);
    });
  }
  render() {
    return (
      <div>
        Hello<br></br>
        <button onClick={() => this.signOut()}>Sign Out</button>
        <br></br>
        <input
          type="text"
          id="firstname"
          value="codeimprove"
          name="firstname"
        />
      </div>
    );
  }
}

export default News;
