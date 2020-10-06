import React from 'react';
import { AnimatedTitle, Reveal, Animation } from 'react-genie';
import linkedin from '../../assets/svg/linkedin.svg';

import classes from './Contacto.module.css';

const Contacto = () => {
	return (
		<div className={classes.Contacto}>
			<h1>
				<AnimatedTitle>
					¿Qué esperas para entrar en la era digital?
				</AnimatedTitle>
			</h1>
			<div className='mb-5'>
				<a href='https://www.linkedin.com/company/aftermathventures'>
					<img className='mb-3' src={linkedin} alt='' />
				</a>

				<h3>
					Aftermath Ventures {new Date().getFullYear()} © Todos los derechos
					reservados.
				</h3>
			</div>
		</div>
	);
};

export default Contacto;
