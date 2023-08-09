import { useState } from "react";
import { set } from "react-hook-form";

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
      .then((response) => response.json().catch(() => {}))
      .then((responseData) => {
        setState((prevState) => ({
          ...prevState,
          loading: false,
          data: responseData,
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
