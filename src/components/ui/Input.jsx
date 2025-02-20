import PropTypes from "prop-types";
import { Field, ErrorMessage } from "formik";

const FormikInput = ({ label, name, type = "text", ...props }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-gray-700">
        {label}
      </label>
      <Field
        id={name}
        name={name}
        type={type}
        className="w-full px-4 py-2 border rounded-lg"
        {...props}
      />
      <ErrorMessage name={name} component="div" className="text-red-500 text-sm" />
    </div>
  );
};

FormikInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired, 
  type: PropTypes.string,
};

export default FormikInput;

