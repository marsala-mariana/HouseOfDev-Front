import { useState } from "react";

const useInput = () => {
  const [value, setValue] = useState("");
  const onChange = function (event) {
    setValue(event.target.value);
  };
  return { value, onChange };
};

export default useInput;
