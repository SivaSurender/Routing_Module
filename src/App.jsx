import React from "react";
import Link from "./UI/Link";
import Route from "./Route";
import AccordionPage from "./pages/AccordioPage";
import DropDownPage from "./pages/DropDownPage";
import ButtonPage from "./pages/ButtonPage";

function App() {
  return (
    <div>
      <Link to="/accordion">Goto Accordion</Link>
      <Link to="/dropdown">Goto Dropdown</Link>
      <Link to="/button">Goto Button</Link>
      <Route path="/accordion">
        <AccordionPage />
      </Route>
      <Route path="/dropdown">
        <DropDownPage />
      </Route>
      <Route path="/button">
        <ButtonPage />
      </Route>
    </div>
  );
}

export default App;
