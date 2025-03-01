import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormHelperText, InputAdornment, MenuItem, Select, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useField } from 'formik';
import { useState } from 'react';

const InputField = (props: any) => {
  const [field, meta] = useField(props);

  return (
    <TextField
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            <FontAwesomeIcon icon={props.icon} />
          </InputAdornment>
        ),
      }}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
      {...field}
      {...props}
    />
  );
};

const SelectField = (props: any) => {
  const [field, meta] = useField(props);

  return (
    <>
      <Select
        error={meta.touched && Boolean(meta.error)}
        {...field}
        {...props}
      >
        <MenuItem key={0} value={0}>
          -- Selecciona --
        </MenuItem>
        {props.options.map((option: any) => (
          <MenuItem key={option.id} value={option.id}>
            {option.title || option.fullName}
          </MenuItem>
        ))}
      </Select>
      {meta.error && <FormHelperText>{meta.error}</FormHelperText>}
    </>
  );
};

const PasswordField = (props: any) => {
  const [field, meta] = useField(props);
  const [show, setShow] = useState(false);

  return (
    <TextField
      InputProps={{
        endAdornment: (
          <InputAdornment position="start" onClick={() => setShow(!show)} sx={{ cursor: 'pointer' }}>
            <FontAwesomeIcon icon={show ? faEyeSlash : faEye} />
          </InputAdornment>
        ),
      }}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
      {...field}
      {...props}
      type={show ? 'text' : 'password'}
    />
  );
};

const renderField = (type: string) => {
  switch (type) {
    case 'password':
      return PasswordField;
    case 'select':
      return SelectField;
    default:
      return InputField;
  }
};

const CustomField = styled((props: any) => renderField(props.type)(props))(({ theme }) => ({
  '& .MuiOutlinedInput-input::-webkit-input-placeholder': {
    color: theme.palette.text.secondary,
    opacity: '0.8',
  },
  '& .MuiOutlinedInput-input.Mui-disabled::-webkit-input-placeholder': {
    color: theme.palette.text.secondary,
    opacity: '1',
  },
  '& .Mui-disabled .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.grey[200],
  },
}));

export default CustomField;
