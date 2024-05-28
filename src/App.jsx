import React from "react";

//* EVERY REACT COMPONENT IS GONNA RETURN JSX.
//* WE CAN ONLY RETURN JUST ONE ELEMENT AS A PARENT ELEMENT
//* WE CAN USE FRAGMENT (EMPTY HTML ELEMENT) IF A DEV DON'T WANNA USE DIV
//*ABOVE THE RETURN, WE WRITE JAVASCRIPT
const App = () => {
  return (
    <>
      <div className="text-9xl">Hello world</div>
    </>
  );
};

export default App;
