import ButtonBase, { ButtonBaseProps } from "@mui/material/ButtonBase";
import React, { FC } from "react";

type Variant = "primary" | "secondary";

interface ButtonProps extends ButtonBaseProps {
  variant?: Variant;
}

const Button: FC<ButtonProps> = ({ variant = "primary", sx, ...props }) => {
  return (
    <ButtonBase
      sx={{
        backgroundColor: variant === "primary" ? "#0F0F0F" : "white",
        color: variant === "primary" ? "white" : "#0F0F0F",
        fontWeight: 600,
        py: "11px",
        px: "31px",
        fontSize: "16px",
        lineHeight: "24px",
        textTransform: "uppercase",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#0F0F0F",
        ...sx,
      }}
      {...props}
    />
  );
};

export default Button;
