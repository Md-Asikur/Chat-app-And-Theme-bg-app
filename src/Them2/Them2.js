const ColorItem = ({ color, setColor }) => (
  <div onClick={setColor} className="color-item" style={{ "--text-color": color }}></div>
);
export default ColorItem;
