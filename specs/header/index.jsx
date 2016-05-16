import { PropTypes } from 'react';

import baseStyles from './css/base.css';

const Header = (props) => {
	return (
		<header className={baseStyles.root}>
			<a href="#" className={[baseStyles.backicon].concat([baseStyles[props.back ? 'is-shown' : 'is-hidden']]).join(' ')}>⇜</a>
			<h1 className={baseStyles.title}>{props.text}</h1>
		</header>
	);
};

Header.displayName = "Header";
Header.propTypes = {
	back: PropTypes.string,
	text: PropTypes.string
};

export default Header;
