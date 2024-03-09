import { Input } from '@nextui-org/react';
import type { UseFormRegisterReturn } from 'react-hook-form';

interface FormInputProps {
  type: string;
  label: string;
  register: UseFormRegisterReturn;
  required: boolean;
}

export default function FormInput({
  type,
  label,
  register,
  required,
}: FormInputProps) {
  return (
    <div>
      <Input
        {...register}
        required={required}
        type={type}
        variant="flat"
        label={label}
        className="py-3"
        required
      />
    </div>
  );
}
