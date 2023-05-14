import React from "react";
import ReactDOM from "react-dom";

function Modal({ setIsModalOpen }) {
  return ReactDOM.createPortal(
    <div>
      <div
        onClick={() => setIsModalOpen(false)}
        className="absolute inset-0 bg-gray-300 opacity-80"
      ></div>
      <div className="absolute inset-40 p-10 bg-white">Modal up</div>
    </div>,
    document.querySelector(".modal__container")
  );
}

export default Modal;
