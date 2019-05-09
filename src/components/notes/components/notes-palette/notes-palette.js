import React from "react";
import { RadioGroup } from "react-radio-group";
const NotesPalette = ({ onColorChanged, activeColor }) => {
  const colors = [
    "#B2AA9F",
    "#ABDF79",
    "#E6D3E3",
    "#F8E9A5",
    "#F8A9A9",
    "#54B5E6",
    "#4EC9B0",
    "#A0C3FF",
    "#D54E79"
  ];
  return (
    <RadioGroup>
      {colors.map((el, i) => {
        return (
          <div className="colors__item" key={i} style={{ backgroundColor: el }}>
            <input
              className="radio-custom"
              id={el}
              type="radio"
              name="color"
              value={`${el}`}
              checked={el === activeColor ? true : false}
              onChange={e => {
                onColorChanged(e.target.value);
              }}
            />
            <label className="radio-custom-label" htmlFor={el} />
          </div>
        );
      })}
    </RadioGroup>
  );
};
export default NotesPalette;
