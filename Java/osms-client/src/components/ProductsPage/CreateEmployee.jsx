import React, { useState } from "react";
import Modal from "react-modal";
import Input from "../Input";
import { PrimaryButton } from "../buttons";
import { FaCross, FaTimes } from "react-icons/fa";

const AddPageModal = ({ isOpen, onClose, onSubmit }) => {
  /**
   * 
   *       "first_name": "string",
        "last_name": "string",
        "national_id": "string",
        "telephone": "string",
        "email": "string",
        "department": "string",
        "position": "string",
        "laptop_manufacturer": "string",
        "model": "string",
        "serial_number": "string",
   */

  const [formValues, setformValues] = useState({
    first_name: "",
    last_name: "",
    national_id: "",
    telephone: "",
    email: "",
    department: "",
    position: "",
    laptop_manufacturer: "",
    model: "",
    serial_number: "",
  });

  const form = [
    {
      type: "text",
      placeholder: "First name",
      id: "first_name",
      required: true,
    },
    {
      type: "text",
      placeholder: "Last name",
      id: "last_name",
      required: true,
    },
    {
      type: "text",
      placeholder: "National ID",
      id: "national_id",
      required: true,
    },
    {
      type: "text",
      placeholder: "Telephone",
      id: "telephone",
      required: true,
    },
    {
      type: "email",
      placeholder: "Email",
      id: "email",
      required: true,
    },
    {
      type: "text",
      placeholder: "Department",
      id: "department",
      required: true,
    },
    {
      type: "text",
      placeholder: "Position",
      id: "position",
      required: true,
    },
    {
      type: "text",
      placeholder: "Laptop manufacturer",
      id: "laptop_manufacturer",
      required: true,
    },
    {
      type: "text",
      placeholder: "Model",

      id: "model",
      required: true,
    },
    {
      type: "text",
      placeholder: "Serial number",
      id: "serial_number",
      required: true,
    },
  ];

  const handleLogin = async () => {
    try {
      const resp = await post("/user/login", formValues);
      storeItem("token", resp.data.token);
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handleInput = (e) => {
    setformValues({ ...formValues, [e.target.id]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formValues);
  };

  const styles = {
    form: "relative text-center w-full md:w-[35%] min-w-[30%] py-4 rounded-xl flex flex-col items-center justify-center gap-20 px-10 bg-[color:var(--componentBg)]",
    formTitle: "text-3xl font-bold text-[color:var(--primaryColor)] mb-2",
    signupOrLogin: "opacity-50",
    formGroups: "flex flex-col items-center justify-center gap-7 w-full",
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Add Page"
      className="modal absolute top-0 left-0 w-full flex items-center justify-center h-full"
      overlayClassName="overlay"
    >
      <form onSubmit={handleSubmit} className={styles.form}>
        <button onClick={onClose} className="absolute right-5 top-5 text-3xl">
          <FaTimes />
        </button>
        <div>
          <p className={styles.formTitle}>Register Employee</p>
        </div>
        <div className={styles.formGroups}>
          {form.map((item) => (
            <Input
              key={item.id}
              type={item.type}
              placeholder={item.placeholder}
              id={item.id}
              icon={item.icon}
              onInput={handleInput}
              required={item.required}
            />
          ))}
          <PrimaryButton>Register</PrimaryButton>
        </div>
      </form>
    </Modal>
  );
};

export default AddPageModal;
