import React, { useState } from "react";
import "./TextInput.css";

const TextInput = () => {
  const [textAreaValue, setTextAreaValue] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setIsSubmitted(true);
    setTextAreaValue(transformText(textAreaValue))
    console.log(`submitting the following text ${textAreaValue}`);
  }

  const handleReset = () => {
    setTextAreaValue("");
  }

  const transformText = originalText => {
    const myRegex = /['"]((?:\\.|[^'\\])*)["']/g;
    return originalText.replace(myRegex, "XXXXX");
  }

  return (
    <>
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <label>Text input:</label>
          <textarea onChange={e => setTextAreaValue(e.target.value)} />
          <button type="submit">Save</button>
          <button type="reset" onClick={handleReset}>Reset</button>
        </form>
      </div>
      {isSubmitted && textAreaValue && <p>Output: <strong>{textAreaValue}</strong></p>}
    </>
  );
}
export default TextInput;
