import React from 'react';
import { useFormik } from 'formik';
import './ContactForm.css';
import './../Button/Button'
import Button from './../Button/Button';

const ContactForm = props => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      name: '',
      subject: '',
      email: '',
      msg: ''
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form className="formki-form-container" onSubmit={formik.handleSubmit}>

        <input
            className="form-input-style"
            id="email"
            name="email"
            type="email"
            placeholder="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            />

        <input
            className="form-input-style"
            id="name"
            name="name"
            type="text"
            placeholder="nome"
            onChange={formik.handleChange}
            value={formik.values.email}
        />

        <input
            className="form-input-style"
            id="subject"
            name="subject"
            type="text"
            placeholder="assunto"
            onChange={formik.handleChange}
            value={formik.values.email}
        />

        

        <input
                className="form-input-text-field-style"
                id="message"
                name="message"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.email}
            />
        <Button text="enviar" color="full-blue" size="md"/>
      
    </form>
  );
};

export default ContactForm;