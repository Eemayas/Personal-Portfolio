import { useState, ChangeEvent } from "react";

function useForm<T>(initialState: T) {
  const [form, setForm] = useState(initialState);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  return { form, setForm, handleChange };
}

export default useForm;
