import { useEffect, useState } from "react";
import "./Email.scss";

const Email = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [emailMessage, setEmailMessage] = useState("");

	const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		console.log(`Sending: ${name}, ${email}, ${message}`);
	};

	// after 5s clear error message
	useEffect(() => {
		if (emailMessage) {
			const t1 = setTimeout(() => {
				setEmailMessage("");
			}, 5000);

			return () => {
				clearTimeout(t1);
			};
		}
	}, [emailMessage]);

	return (
		<section className="email">
			<form onSubmit={() => submitForm}>
				<div className={emailMessage ? "contact-me active" : "contact-me"}>
					{emailMessage ? <p className="message">{emailMessage}</p> : <p className="message">Kontaktní formulář</p>}
				</div>
				<input
					value={name}
					onChange={(e) => setName(e.target.value)}
					minLength={4}
					maxLength={30}
					type="text"
					id="input-name"
					placeholder="Jméno *"
				/>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					minLength={4}
					maxLength={30}
					type="email"
					id="input-email"
					placeholder="Email *"
				/>
				<textarea
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					maxLength={800}
					name="message"
					id=""></textarea>
				<input type="submit" />
			</form>
		</section>
	);
};

export default Email;
