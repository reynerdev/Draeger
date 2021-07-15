import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';

const InputField = ({ htmlFor, labelName, type }) => {
  return (
    <FormControl variant="outlined">
      <InputLabel htmlFor={htmlFor}>{labelName}</InputLabel>
      <OutlinedInput id="outlined" label={labelName} type={type} />
    </FormControl>
  );
};

export default InputField;
