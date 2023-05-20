import React from "react";
import Link from "./UI/Link";
import Route from "./Route";
import AccordionPage from "./pages/AccordioPage";
import DropDownPage from "./pages/DropDownPage";
import ButtonPage from "./pages/ButtonPage";
import SideBar from "./UI/SideBar";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";

function App() {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      {/* <Link to="/accordion">Goto Accordion</Link>
      <Link to="/dropdown">Goto Dropdown</Link>
      <Link to="/button">Goto Button</Link> */}
      <SideBar />
      <div className="col-span-5">
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/">
          <DropDownPage />
        </Route>
        <Route path="/button">
          <ButtonPage />
        </Route>
        <Route path="/modal">
          <ModalPage />
        </Route>
        <Route path="/table">
          <TablePage />
        </Route>
      </div>
    </div>
  );
}

export default App;
