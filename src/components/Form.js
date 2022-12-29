import './Form.css'

function Form(props) {
  return (
    <div className="input">
      <p>{props.name}</p>
      <input type={props.type} placeholder={props.placeholder}></input>
    </div>
  );
}

export default Form;
