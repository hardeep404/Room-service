import React, { useState } from "react";
import axios from "axios";
import "../CSS/AddBtnSection.css";
import { Link } from "react-router-dom";

const AddCTAButton = () => {
  const [showForm, setShowForm] = useState(false);
  const [ctaList, setCtaList] = useState([]);
  const [buttonText, setButtonText] = useState("");
  const [url, setUrl] = useState("");
  const [bgColor, setBgColor] = useState("#222");
  const [textColor, setTextColor] = useState("#fff");

  const handleAddCTA = async () => {
    const newCTA = {
      text: buttonText,
      url,
      bgColor,
      textColor,
    };

    setCtaList([...ctaList, newCTA]);
    setButtonText("");
    setUrl("");
    setBgColor("#222");
    setTextColor("#fff");
    setShowForm(false);

    try {
      const BtnData = {
        component: "AddCTAButton",
        field: "button",
        value: newCTA,
      };

      const response = await axios.post(
        "http://localhost:5000/update-section",
        BtnData
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="cta-container">
      <button className="add-btn" onClick={() => setShowForm(true)}>
        + Add Button
      </button>

      {showForm && (
        <div className="cta-form-overlay">
          <div className="cta-form">
            <h3>Add CTA Button</h3>
            <label>
              Button Text:
              <input
                type="text"
                value={buttonText}
                onChange={(e) => setButtonText(e.target.value)}
              />
            </label>
            <label>
              URL or Action:
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </label>
            <label>
              Background Color:
              <input
                type="color"
                value={bgColor}
                onChange={(e) => setBgColor(e.target.value)}
              />
            </label>
            <label>
              Text Color:
              <input
                type="color"
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
              />
            </label>
            <div className="cta-form-actions">
              <button className="save-btn" onClick={handleAddCTA}>
                Save
              </button>
              <button className="cancel-btn" onClick={() => setShowForm(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="cta-list">
        {ctaList.map((cta, index) => (
          <a
            key={index}
            to={`/${cta.url}`}
            className="cta-button"
            style={{
              "--bg-color": cta.bgColor,
              "--text-color": cta.textColor,
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            {cta.text}
          </a>
        ))}
      </div>
    </div>
  );
};

export default AddCTAButton;
