import React from "react";
import { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    firstName: "",
    lastName: ""
  });

  function handleFullName(e) {
    const {value, name} = e.target;

    if (name === "fName") {
      setFullName(prevValue => {
        return {
          firstName: value,
          lastName: prevValue.lastName
        };
      });
    } else {
      setFullName(prevValue => {
        return {
          firstName: prevValue.firstName,
          lastName: value
        };
      });
    }
  }

  return (
    <div className="container">
      <h1>Hello {fullName.firstName} {fullName.lastName}</h1>
      <form>
        <input onChange={handleFullName} name="fName" placeholder="First Name" value={fullName.firstName}/>
        <input onChange={handleFullName} name="lName" placeholder="Last Name" value={fullName.lastName}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
