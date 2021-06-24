import React, { useState } from "react";
import censorString from "../../utils/censorString";
import useFocus from "../../hooks/useFocus";

const TextInput = () => {
  const [textAreaValue, setTextAreaValue] = useState("");
  const [keywordsValue, setKeywordsValue] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [inputRef, setInputFocus] = useFocus();

  const handleSubmit = event => {
    event.preventDefault();
    setTextAreaValue(censorString(textAreaValue, keywordsValue))
    setIsSubmitted(true);
  }

  const handleReset = () => {
    setTextAreaValue("");
    setIsSubmitted(false);
    setInputFocus();
  }

  return (
    <>
      <div className="wrapper uk-margin-top uk-margin-left">
        <form className="uk-form-horizontal uk-margin-large" onSubmit={handleSubmit}>
          <div className="uk-margin">
            <fieldset className="uk-fieldset">
              <label>Text input:</label>
              <textarea
                className="uk-textarea uk-margin-bottom"
                placeholder="Enter the string to be censored"
                onChange={e => setTextAreaValue(e.target.value)}
                autoFocus={true}
                ref={inputRef}
              />
              <label>Keywords and phrases</label>
              <textarea
                className="uk-textarea"
                placeholder="Enter keywords and/or phrases wrapped in quotes (single or double) to be censored"
                onChange={e => setKeywordsValue(e.target.value)}
              />
            </fieldset>
          </div>
          <div className="uk-margin">
            <button
              className="uk-button uk-button-primary"
              type="submit"
            >
              Submit
            </button>
            <button
              className="uk-button uk-button-secondary uk-margin-left"
              type="reset"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
      {isSubmitted && textAreaValue &&
        <div className="uk-text-large">
          <p>Output: <span className="uk-text-bold">{textAreaValue}</span></p>
        </div>
      }
    </>
  );
}
export default TextInput;
