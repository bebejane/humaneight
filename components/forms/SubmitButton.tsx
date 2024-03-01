import s from "./SubmitButton.module.scss";
import cn from "classnames";
import { useFormStatus } from "react-dom";

export type SubmitButtonProps = {
  label: string,
  loading: string,
  className?: string,
};

export default function SubmitButton({ label, loading, className }: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button className={cn(s.button, className)} disabled={pending} type="submit" >
      {pending ? loading : label}
    </button>
  );
};
