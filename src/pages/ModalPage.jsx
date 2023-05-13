import React, { useState } from "react";
import Button from "../UI/Button";
import Modal from "../UI/Modal";

function ModalPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <Button primary onClick={() => setIsModalOpen(true)}>
        Open Modal
      </Button>
      {isModalOpen && <Modal />}
    </div>
  );
}

export default ModalPage;
