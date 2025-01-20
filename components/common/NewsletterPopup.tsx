"use client";

import s from "./NewsletterPopup.module.scss";
import cn from "classnames";
import NewsletterForm from "@components/forms/NewsletterForm";
import { useEffect, useRef, useState } from "react";

export type Props = {
	className?: string;
	show: boolean;
	onClose: () => void;
};

export default function NewsletterPopup({ show: _show, onClose }: Props) {
	const [show, setShow] = useState(_show);
	const autoShowRef = useRef<NodeJS.Timeout>();

	const handleClose = () => {
		localStorage.setItem("newsletter_closed", "1");
		setShow(false);
		onClose?.();
	};

	useEffect(() => {
		if (
			localStorage?.getItem("newsletter_subscribed") ||
			localStorage?.getItem("newsletter_closed")
		)
			return setShow(false);

		autoShowRef.current = setTimeout(() => setShow(true), 10000);
		return () => clearTimeout(autoShowRef.current);
	}, []);

	useEffect(() => {
		if (_show) clearTimeout(autoShowRef.current);
		setShow(_show);
	}, [_show]);

	return (
		<div
			role='dialog'
			className={cn(s.newsletterPopup, show && s.show)}
			aria-labelledby='newsletterpopup-heading'
		>
			<div className={s.popup}>
				<h2 id='newsletterpopup-heading'>Join our community. Sign up for our newsletter.</h2>
				<NewsletterForm
					key={show ? "true" : "false"}
					className={s.form}
				/>
				<button
					className={s.close}
					type='button'
					onClick={handleClose}
				>
					Close
				</button>
			</div>
		</div>
	);
}
