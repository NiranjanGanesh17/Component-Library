import { Checkbox, TextField, TextFieldProps } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import React, { FC, useState, useEffect } from "react";
import { NTextFieldStyles } from "./style";

const NMultiselect: FC<{ label?: string; option: string[] }> = (props) => {
  const classes = NTextFieldStyles();
  const [labelLocal] = useState("Label");
  const [reference, setReference] = useState<string[]>([]);
  const [check, setCheck] = useState<string[]>([]);
  const { label = labelLocal, option } = props;
  useEffect(() => {
    setReference([`All ${label}`, ...option]);
  }, []);
  const handleSelect = (e: any) => {
    if (
      (e.target.value === `All ${label}` ||
        e.target.innerText === `All ${label}`) &&
      check.includes(e.target.value || e.target.innerText) == true
    ) {
      setCheck([]);
    } else if (
      (e.target.value === `All ${label}` ||
        e.target.innerText === `All ${label}`) &&
      check.includes(e.target.value || e.target.innerText) == false
    ) {
      setCheck(reference);
    } else if (
      (e.target.value !== `All ${label}` ||
        e.target.innerText !== `All ${label}`) &&
      check.includes(e.target.value || e.target.innerText) == true
    ) {
      if (check.length == reference.length) {
        const temp = reference.filter((item) => {
          return item !== (e.target.value || e.target.innerText);
        });
        const removed = temp.filter((i) => {
          return i !== `All ${label}`;
        });

        setCheck(removed);
      } else {
        const temp = check.filter((item) => {
          return item !== (e.target.value || e.target.innerText);
        });
        setCheck(temp);
      }
    } else if (
      (e.target.value !== `All ${label}` ||
        e.target.innerText !== `All ${label}`) &&
      check.includes(e.target.value || e.target.innerText) == false
    ) {
      setCheck([...check, e.target.value || e.target.innerText]);
      if (
        !check.includes(`All ${label}`) &&
        check.length == reference.length - 2
      ) {
        setCheck([`All ${label}`, ...option]);
      }
    }
    console.log(check);
  };
  return (
    <>
      <div className={classes.wholeWrapper}>
        <div className={classes.label}>{label}</div>
        <div className={classes.wrapper}>
          <Autocomplete
            options={reference}
            disableCloseOnSelect
            multiple
            value={check.length === reference.length ? [`All ${label}`] : check}
            onChange={handleSelect}
            getOptionLabel={(options) => options}
            renderOption={(option) => (
              <div className={classes.menuItemList}>
                <Checkbox
                  key={option}
                  style={{ marginRight: 8 }}
                  color="primary"
                  value={option}
                  checked={check.includes(option)}
                />
                <div>{option}</div>
              </div>
            )}
            renderInput={(params: JSX.IntrinsicAttributes & TextFieldProps) => (
              <TextField {...params} variant="outlined" />
            )}
          />
        </div>
      </div>
    </>
  );
};

export default NMultiselect;
