import { useState } from "react";

export function useFetch() {
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<any>(undefined);

  return {
    loading,
    setLoading,
    errors,
    setErrors,
  };
}
