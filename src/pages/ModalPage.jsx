import React, { useState } from "react";
import Button from "../UI/Button";
import Modal from "../UI/Modal";

function ModalPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="relative">
      <Button primary onClick={() => setIsModalOpen(true)}>
        Open Modal
      </Button>
      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
    </div>
  );
}

export default ModalPage;
