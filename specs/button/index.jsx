import { Component, PropTypes } from 'react';

import baseStyles from './css/base.css';
import colorStyles from './css/color.css';
import sizeStyles from './css/size.css';

/**
 * The only true button.
 */
class Button extends Component {
	static propTypes = {
		/**
		 * Button label.
		 */
		children: PropTypes.string.isRequired,
		color: PropTypes.oneOf(Object.keys(colorStyles)),
		size: PropTypes.oneOf(Object.keys(sizeStyles))
	}
	static defaultProps = {
		color: 'color1',
		size: 'size1'
	}

	onClick() {
		alert('click');
	}

	render() {
		const { props } = this;
		const classes = [baseStyles.root].concat([colorStyles[props.color], sizeStyles[props.size], props.className]).join(' ')

		return (
			<button className={classes}  onClick={this.onClick}>{props.children}</button>
		);
	}
};

export default Button;
