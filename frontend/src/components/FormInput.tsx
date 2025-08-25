import { FieldError } from "react-hook-form";

interface FormInputProps {
  label: string;
  id: string;
  type?: string;
  register: any;
  error?: FieldError;
}

export default function FormInput({
  label,
  id,
  type = "text",
  register,
  error
}: FormInputProps) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-gray-200">
        {label}
      </label>
      <input
        id={id}
        type={type}
        {...register(id)}
        className="mt-1 block w-full rounded-lg border border-gray-700 bg-gray-900 text-white px-3 py-2 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
      />
      {error && (
        <p className="text-red-500 text-sm mt-1">{error.message}</p>
      )}
    </div>
  );
}
