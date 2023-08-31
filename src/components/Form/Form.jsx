import "./Form.css";

function Form() {
  return (
    <form className="form-body">
      <label>Do you want to subscribe to our newsletter?</label>
      <br />
      <label>yes:</label>
      <input type="checkbox" id="checkYes" className="checkbox-yes" />
      <label>no:</label>
      <input type="checkbox" id="checkNo" className="checkbox-no" />
      <br />
      <label>Enter your firstname:</label>
      <input
        type="text"
        id="userInputFn"
        placeholder="firstname"
        className="first-name-input"
      />
      <br />
      <label>Enter your lastname:</label>
      <input
        type="text"
        id="userInputLn"
        placeholder="lastname"
        className="last-name-input"
      />
      <br />
      <label>Enter your email:</label>
      <input
        type="email"
        id="userInputE"
        placeholder="email"
        className="email-input"
      />
      <br />
      <button type="submit" className="form-button-send">
        Send
      </button>
    </form>
  );
}
export default Form;
