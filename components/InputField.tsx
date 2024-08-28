
import React, { ChangeEvent } from "react";
import FileBase from "react-file-base64";
import Image from "next/image";

interface InputFieldProps {
  label: string;
  type: string;
  name: string;
  value: string | string[];
  placeholder: string;
  required?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  setForm?: (form: { [key: string]: any }) => void;
  form?: { [key: string]: any };
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  name,
  value,
  placeholder,
  required = false,
  onChange,
  setForm,
  form,
}) => {
  if (type === "file") {
    return (
      <label className="flex flex-col">
        <span className="font-medium mb-4">{label}</span>
        <div className="cursor-pointer dark:bg-tertiary bg-tertiarylight py-4 px-6 rounded-lg outline-none border-none font-medium hover:bg-blue-600 transition duration-300">
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setForm && setForm({ ...form, [name]: base64 })
            }
          />
        </div>
        {form && form[name] && (
          <div className="mt-4">
            <span className="font-medium mb-4">Selected Image:</span>
            <Image
              width={240}
              height={240}
              src={form[name]}
              alt="Selected"
              loading="lazy"
              className="max-w-full mt-2 rounded-[40px] border-4 border-red-500"
            />
          </div>
        )}
      </label>
    );
  } else if (type === "textarea") {
    return (
      <label className="flex flex-col">
        <span className="font-medium mb-4">{label}</span>
        <textarea
          name={name}
          rows={7}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          aria-label={placeholder}
          className="dark:bg-tertiary bg-tertiarylight py-4 px-6 rounded-lg outline-none border-none font-medium"
          required={required}
        />
      </label>
    );
  }

  return (
    <label className="flex flex-col">
      <span className="font-medium mb-4">{label}</span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-label={placeholder}
        className="block w-full border border-gray-200 dark:bg-tertiary bg-tertiarylight py-4 px-6 rounded-lg border-none font-medium text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-500 dark:text-gray-100 outline-none"
        required={required}
      />
    </label>
  );
};

export default InputField;
