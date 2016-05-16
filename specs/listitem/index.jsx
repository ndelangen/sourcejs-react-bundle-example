import { PropTypes } from 'react';

import Button from '../button';

import baseStyles from './css/base.css';

const ListItem = (props) => {
	const { id, name } = props;
	return (
		<div className={baseStyles.root}>
			<strong className={baseStyles.id}>{id}</strong>
			<span className={baseStyles.body}>{name}</span>
			<Button className={baseStyles.button}>Select</Button>
		</div>
	);
};

ListItem.displayName = "ListItem";
ListItem.propTypes = {
	id: PropTypes.any.isRequired,
	name: PropTypes.string
};

export default ListItem;
