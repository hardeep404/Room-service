import React, { useState } from "react";
import axios from "axios";
import "../CSS/TextFun.css";

const EditableSection = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState("Text for edit:my name is Hardeep");
  const [color, setColor] = useState("#000000");
  const [fontSize, setFontSize] = useState("30px");

  const handleSave = async () => {
    const textData = {
      component: "EditableSection",
      field: "text",
      value: text,
      style: {
        color,
        fontSize,
      },
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/update-section",
        textData
      );
      console.log(response)
    } catch (error) {
      console.log(error);
    }
    setIsEditing(false);
  };

  return (
    <div className="editable-section">
      {isEditing ? (
        <div className="edit-area">
          <textarea
            value={text}
            className="text-area"
            onChange={(e) => setText(e.target.value)}
            style={{ color, fontSize }}
          />
          <div className="style-controls">
            <label>
              Font Color:
              <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
            </label>
            <label>
              Font Size:
              <input
                type="number"
                className="font-size"
                value={parseInt(fontSize)}
                onChange={(e) => setFontSize(`${e.target.value}px`)}
              />{" "}
              
            </label>
          </div>
          <button className="save-btn" onClick={handleSave}>
            Save
          </button>
        </div>
      ) : (
        <div>
          <p className="editable-text" style={{ color, fontSize }}>
            {text}
          </p>
          <button className="edit-btn" onClick={() => setIsEditing(true)}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default EditableSection;
