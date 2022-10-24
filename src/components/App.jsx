import React from "react";
import useState from "react";

function App() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");

  function handleFirstName(e) {
    setFirstName(e.target.value);
  }

  function handleLastName(e) {
    setLastName(e.target.value);
  }

  return (
    <div className="container">
      <h1>Hello {firstName} {lastName}</h1>
      <form>
        <input onChange={handleFirstName} name="fName" placeholder="First Name" />
        <input onChange={handleLastName} name="lName" placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
