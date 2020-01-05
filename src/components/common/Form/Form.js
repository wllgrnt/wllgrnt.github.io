import React from 'react'
import { withFormik } from 'formik';
import * as Yup from 'yup';
import classnames from 'classnames';
import './Form.css';

// import { Wrapper } from './style'

const formikEnhancer = withFormik({
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(2, "Your name is longer than that")
      .required('First name is required.'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required!'),
    security: Yup.string()
      .lowercase()
      .matches(/(^grant$|^gladkova$)/, {excludeEmptyString: true, message: "That's not right!"})
      .required('Security Q is required')
  }),

  mapPropsToValues: ({ user }) => ({
    ...user,
  }),
  handleSubmit: (payload, { setSubmitting }) => {
    alert(payload.email);
    setSubmitting(false);
  },
  displayName: 'Form',
});

const InputFeedback = ({ error }) =>
  error ? <div className="input-feedback">{error}</div> : null;

const Label = ({ error, className, children, ...props }) => {
  return (
    <label className="label" {...props}>
      {children}
    </label>
  );
};

const TextInput = ({ type, id, label, error, value, onChange, className, ...props }) => {
  const classes = classnames(
    'input-group',
    {
      'error': !!error,
    },
    className
  );
  return (
    <div className={classes} style={{textAlign: "left"}}>
      <Label htmlFor={id} error={error}>
        {label}
      </Label>
      <input
        id={id}
        className="text-input"
        type={type}
        value={value}
        onChange={onChange}
        {...props}
      />
      <InputFeedback error={error} />
    </div>
  );
};
const MyForm = props => {
  const {
    values,
    touched,
    errors,
    dirty,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
    isSubmitting,
  } = props;
  return (
    <form onSubmit={handleSubmit} style={{marginTop: "40px"}}>
      <TextInput
        id="name"
        type="text"
        label="Name"
        placeholder="Jan Hus"
        error={touched.name && errors.name}
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <TextInput
        id="email"
        type="email"
        label="Email"
        placeholder="Enter your email"
        error={touched.email && errors.email}
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <TextInput
        id="security"
        type="text"
        label="Security Q: What is either Will or Christina's last name?"
        placeholder="Who are we?"
        error={touched.security && errors.security}
        value={values.security}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <button
        type="button"
        className="outline"
        onClick={handleReset}
        disabled={!dirty || isSubmitting}
      >
        Reset
      </button>
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </form>
  );
};

const Form = formikEnhancer(MyForm);


export default Form