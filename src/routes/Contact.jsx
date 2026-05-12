import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/Contact.css';

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    const { name, email, subject, message } = data;

    try {
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        { name, email, subject, message },
        process.env.REACT_APP_PUBLIC_KEY
      );
      reset();
      toast.success('Form sent!', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        className: 'submit-feedback success',
      });
    } catch (error) {
      console.error(error);
      toast.error('Failed to send form. Please try again.', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
      });
    }
  };

  return (
    <div className="ContactForm">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="formRow">
                <div className="col-6">
                  <input
                    type="text"
                    {...register('name', {
                      required: 'Please enter your name',
                      maxLength: { value: 30, message: 'Max 30 characters' },
                    })}
                    className="form-control formInput"
                    placeholder="Name"
                  />
                  {errors.name && (
                    <span className="errorMessage">{errors.name.message}</span>
                  )}
                </div>
                <div className="col-6">
                  <input
                    type="email"
                    {...register('email', {
                      required: 'Please enter your email',
                      pattern: {
                        value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        message: 'Invalid email address',
                      },
                    })}
                    className="form-control formInput"
                    placeholder="Email address"
                  />
                  {errors.email && (
                    <span className="errorMessage">{errors.email.message}</span>
                  )}
                </div>
              </div>

              <div className="formRow">
                <div className="col-12">
                  <input
                    type="text"
                    {...register('subject', {
                      required: 'Please enter a subject',
                      maxLength: { value: 75, message: 'Max 75 characters' },
                    })}
                    className="form-control formInput"
                    placeholder="Subject"
                  />
                  {errors.subject && (
                    <span className="errorMessage">{errors.subject.message}</span>
                  )}
                </div>
              </div>

              <div className="formRow">
                <div className="col-12">
                  <textarea
                    rows={5}
                    {...register('message', { required: 'Please enter a message' })}
                    className="form-control formInput"
                    placeholder="Message"
                  />
                  {errors.message && (
                    <span className="errorMessage">{errors.message.message}</span>
                  )}
                </div>
              </div>

              <button className="submit-btn" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
