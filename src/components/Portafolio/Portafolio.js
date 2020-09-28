import React from 'react';
import { Reveal } from 'react-genie';

import classes from './Portafolio.module.css';
import Project from './Project/Project';

import domicilios from '../../assets/img/domicilios.png';
import migrato from '../../assets/img/migrato.png';
import loadup from '../../assets/img/loadup.png';

const Portafolio = () => {
	return (
		<div className={classes.Portafolio}>
			<h1>Portafolio</h1>
			<ul className={classes.List}>
				<li>
					<Reveal>
						<Project
							img={domicilios}
							link='https://domiciliosaudiovisuales.com'
						/>
					</Reveal>
				</li>

				{/* <li>
          <Reveal>
            <Project img={migrato} link="https://migrato.co" />
          </Reveal>
        </li> */}
				<li>
					<Reveal>
						<Project img={loadup} link='https://loadup.today' />
					</Reveal>
				</li>
			</ul>
		</div>
	);
};

export default Portafolio;
