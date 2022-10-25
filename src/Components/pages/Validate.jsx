import { memo, React, useState } from "react";

const Validate = (input) => {
  // console.log(input);
  const errors = {};

  if (!input.email) {
    errors.email = "Email requerido";
  } else if (!/^\S+@\S+\.\S+$/.test(input.email)) {
    errors.email = "Email invalido";
  }

  return { errors };
};

export default Validate;
