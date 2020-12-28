import { useState } from "react";

interface useInputProps {
  initialValue: string;
}

interface useInputReturnProps {
  value: string;
  changeValue: (value: string) => void;
  resetValue: (resetString?: string) => void;
}

const useInput = ({ initialValue }: useInputProps): useInputReturnProps => {
  const [state, setState] = useState(initialValue);
  return {
    value: state,
    changeValue: (value: string) => setState(value),
    resetValue: (resetString?: string) =>
      setState(resetString ? resetString : ""),
  };
};

export default useInput;
