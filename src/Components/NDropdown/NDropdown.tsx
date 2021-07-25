import React, { FC, useState } from "react";
import { Autocomplete } from "@material-ui/lab";
import { TextField, TextFieldProps } from "@material-ui/core";
import { NTextFieldStyles } from "./style";

const NDropdown: FC<{ label?: string; option: string[] }> = (props) => {
  const classes = NTextFieldStyles();
  const [labelLocal] = useState("Label");
  const { label = labelLocal, option } = props;
  return (
    <>
      <div className={classes.wholeWrapper}>
        <div className={classes.label}>{label}</div>
        <div className={classes.wrapper}>
          <Autocomplete
            options={option}
            renderInput={(params: JSX.IntrinsicAttributes & TextFieldProps) => (
              <TextField {...params} variant="outlined" />
            )}
          />
        </div>
      </div>
    </>
  );
};

export default NDropdown;
