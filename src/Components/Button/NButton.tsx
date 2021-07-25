import React, { FC, useState } from "react";
import Button from "@material-ui/core/Button";
import { NButtonStyles } from "./style";
import clsx from "clsx";

const NButton: FC<{
  size: "small" | "medium" | "large";
  color: "primary" | "secondary";
  customStyle?: string;
  buttonText?: string;
}> = (props) => {
  const classes = NButtonStyles();
  const [btnTextLocal] = useState("Text");
  const { size, color, customStyle, buttonText = btnTextLocal } = props;
  return (
    <>
      {color == "primary" ? (
        <Button
          className={clsx(classes.primaryMedium, customStyle, {
            [classes.primarySmall]: size == "small",
            [classes.primaryLarge]: size == "large",
            [classes.primaryMedium]: size == "medium",
          })}
          variant="contained"
          color="primary"
        >
          {buttonText}
        </Button>
      ) : (
        <Button
          className={clsx(classes.secondaryMedium, customStyle, {
            [classes.secondarySmall]: size == "small",
            [classes.secondaryLarge]: size == "large",
            [classes.secondaryMedium]: size == "medium",
          })}
          variant="contained"
          color="secondary"
        >
          {buttonText}
        </Button>
      )}
    </>
  );
};

export default NButton;
