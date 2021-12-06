import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addText, selectText, clearText } from "./textSlice";

export function Text() {
  const text = useSelector(selectText);
  const dispatch = useDispatch();
  const [textValue, setTextValue] = useState("");

  return (
    <div>
      <h1>text</h1>
      <input onChange={(e) => setTextValue(e.target.value)} type="text" />
      <div>
        <p>text: {text}</p>
      </div>
      <div>
        <button onClick={() => dispatch(addText(textValue))}>add</button>
        <button onClick={() => dispatch(clearText())}>clear</button>
      </div>
    </div>
  );
}
