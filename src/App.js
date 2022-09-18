import React, { useState } from "react";
import data from "./data";

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setText(data.slice(0, count));
  };

  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="count">paragraphs:</label>
        <input
          onChange={(e) => setCount(e.target.value)}
          id="count"
          type="number"
          min="1"
          max={data.length}
        />
        <button className="btn">generate</button>
      </form>
      {text.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </section>
  );
};

export default App;
