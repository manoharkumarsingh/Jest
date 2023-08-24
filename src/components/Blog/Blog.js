import React from "react";

function Blog() {
  return (
    <div className="mainCls">
      <ul>
        <li key="angular" className="liCls">
          Angular
        </li>
        <li key="node" className="liCls">
          Angular
        </li>
        <li key="react" className="liCls">
          Angular
        </li>
      </ul>
      <div className="numbers">
        <span>one</span>
        <span>Two</span>
      </div>
      <div>
        <button className="my-button disabled btn-primary">Submit</button>
      </div>
    </div>
  );
}

export default Blog;
