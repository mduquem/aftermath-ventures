import React, { useState } from 'react';
import { Reveal, Animation } from 'react-genie';
import axios from 'axios';

import classes from './Landing.module.css';
import emailSvg from '../../assets/svg/email.svg';

const Landing = () => {
	const TODAY = String(new Date());
	const [email, setEmail] = useState('');
	const [submitResult, setSubmitResult] = useState('not sent');

	const submitForm = async () => {
		try {
			const response = await axios.post(
				`https://api.airtable.com/v0/appwUsJBXmOq5N6c3/emails?api_key=${process.env.API_KEY}`,
				{ fields: { email, createdAt: TODAY } }
			);

			setSubmitResult('success');

			console.log('RESPOESNA', response);
		} catch (error) {
			console.log('ERRORRR', error);
			setSubmitResult('error');
		}
	};
	let formContent = (
		<div className={classes.FormGroup}>
			<div className="input-group ">
				<div className="input-group-prepend">
					<img
						className={['input-group-text', classes.InputGroupText].join(' ')}
						src={emailSvg}
						alt="email icon"
					/>
				</div>
				<input
					type="email"
					placeholder="Ingresa tu correo "
					onChange={(event) => setEmail(event.target.value)}
					className={['form-control', classes.FormControl].join(' ')}
				/>
			</div>
			<Reveal animation={Animation.BounceInLeft}>
				<button onClick={submitForm}>Nosotros te escribimos</button>
			</Reveal>
		</div>
	);

	if (submitResult === 'success') {
		formContent = (
			<div>
				<h3>Te escribiremos pronto</h3>
			</div>
		);
	}

	if (submitResult === 'error') {
		formContent = (
			<div>
				<h3>
					Ocurrió un error. Intenta comunicarte a
					desarrollo@aftermathventures.com
				</h3>
			</div>
		);
	}

	return (
		<div className={classes.Landing}>
			<div className={classes.Lead}>
				<h1>
					Desarrolla tu futuro hoy<span>.</span>
				</h1>
				<h2>
					<Reveal>
						No importa si <em>sólo</em> tienes una idea, un prototipo o un
						negocio establecido, <strong>Aftermath Ventures</strong> te ayuda en
						cada etapa de tu emprendimiento.
					</Reveal>
				</h2>

				{formContent}
			</div>
			{/* AQUI TOCA PONER OTRO LLAMADO A LA ACCION DISTINTO Toca incluir opt in form y contact form */}
		</div>
	);
};

export default Landing;
