import React from "react";
import { useState } from "react";

function App() {
  const [fullName =
    {
      firstName: "",
      lastName: ""
    },
    setFullName] = useState("");

  function handleFullName(e) {
    const [value, name] = e.target;

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
        <input onChange={handleFullName} name="fName" placeholder="First Name" />
        <input onChange={handleFullName} name="lName" placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
