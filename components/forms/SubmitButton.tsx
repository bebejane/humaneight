import s from './SubmitButton.module.scss';
import cn from 'classnames';
import { useFormStatus } from 'react-dom';

export type SubmitButtonProps = {
	label: string;
	className?: string;
	loading: string;
	pending: boolean;
};

export default function SubmitButton({ label, pending, loading, className }: SubmitButtonProps) {
	return (
		<button className={cn(s.button, className)} disabled={pending} type='submit'>
			{pending ? loading : label}
		</button>
	);
}
