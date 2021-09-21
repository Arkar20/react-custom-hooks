import { useEffect } from "react";

export default function useLocalLogger(value) {
  useEffect(() => {
    console.log(value);
  }, [value]);
}
