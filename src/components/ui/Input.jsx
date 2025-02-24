import { useState } from "react";
import PropTypes from "prop-types";
import { Field } from "formik";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const FormikInput = ({ label, name, type = "text", ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="mb-4">
      <Field name={name}>
        {({ field, meta }) => (
          <TextField
            {...field}
            {...props}
            fullWidth
            label={label}
            variant="outlined"
            type={type === "password" && !showPassword ? "password" : "text"}
            size="small"
            error={meta.touched && Boolean(meta.error)}
            helperText={meta.touched && meta.error}
            sx={{
              "& .MuiInputBase-root": {
                minHeight: "36px",
                borderRadius: "25px",
              },
            }}
            InputProps={
              type === "password"
                ? {
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleTogglePassword} edge="end">
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }
                : {}
            }
          />
        )}
      </Field>
    </div>
  );
};

FormikInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default FormikInput;
