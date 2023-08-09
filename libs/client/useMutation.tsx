import { useState } from "react";

interface UseMutationState {
  loading: boolean;
  data?: object;
  error?: object;
}

type UseMutationResult = [(data: any) => void, UseMutationState];

export default function useMutation(url: string): UseMutationResult {
  const [state, setState] = useState({
    loading: false,
    data: undefined,
    error: undefined,
  });
  function mutation(data: any) {
    setState((prevState) => ({
      ...prevState,
      loading: true,
      data: undefined,
      error: undefined,
    }));
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json().catch(() => {}))
      .then((resData) => {
        setState((prevState) => ({
          ...prevState,
          loading: false,
          data: resData,
        }));
      })
      .catch((error) => {
        setState((prevState) => ({
          ...prevState,
          loading: false,
          error: error,
        }));
      })
      .finally(() =>
        setState((prevState) => ({ ...prevState, loading: false }))
      );
  }
  return [mutation, state];
}
