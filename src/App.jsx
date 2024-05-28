import React from "react";

//* EVERY REACT COMPONENT IS GONNA RETURN JSX.
//* WE CAN ONLY RETURN JUST ONE ELEMENT AS A PARENT ELEMENT
//* WE CAN USE FRAGMENT (EMPTY HTML ELEMENT) IF A DEV DON'T WANNA USE DIV
//*ABOVE THE RETURN, WE WRITE JAVASCRIPT
//* WE CAN WRITE INLINE STYLING INSIDE JSX
const App = () => {
  // WE CAN PASS IN A VARIABLE AND IT WILL RENDER IT'S VALUE
  const name = "Abuzar";
  // WE CAN ALSO DO COMPUTATION INSIDE JSX
  const x = 10;
  const y = 20;
  // WE CAN ALSO LOOP OVER THE ARRAY USING MAP METHOD FOR ENDERING EACH ELEMENT

  // WE CAN ALSO APPLY CONDITION USING TERNARY OPERATORS,LOGICAL OPERATORS BUT NOT THE STATEMENTS.
  const loggedIn = true;

  const names = ["Shafqat", "Essa", "Mujtaba", "Gulalai"];
  return (
    <>
      <div className="text-5xl">Hello {name}</div>
      <p style={{ color: "red", fontSize: "20px" }}>
        The sum of {x} and {y} is {x + y}
      </p>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      {/* {loggedIn ? <h1> Hello Member</h1> : <h1>Hello Guest</h1>} */}
      {loggedIn && <h1>Hello Member</h1>}
    </>
  );
};

export default App;
