import * as React from "react";
import { Link } from "react-router-dom";

const Checksuc = () => {
  return (
    <div>
      <h1>The order was successful</h1>

      <button class="add">
        <Link to={`/`}>Back to store</Link>
      </button>
    </div>
  );
};

export default Checksuc;
