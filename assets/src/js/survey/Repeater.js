const Repeater = (props) => {
  return (
    <div className={props.classes}>
      <label htmlFor={props.htmlForData}>{props.textLabel}</label>
      <input type={props.type} id={props.inputId}></input>
    </div>
  );
};

export default Repeater;
