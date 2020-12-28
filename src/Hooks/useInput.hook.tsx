import { useState } from "react";

interface useInputReturnProps {
  value: string;
  changeValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  resetField: (resetString?: string) => void;
}

const useInput = (initialValue: string): useInputReturnProps => {
  const [state, setState] = useState<string>(initialValue);
  return {
    value: state,
    changeValue: (event) => setState(event.target.value),
    resetField: (resetString?: string) =>
      setState(resetString ? resetString : ""),
  };
};

export default useInput;
