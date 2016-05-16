import { PropTypes } from 'react';

import ListItem from '../listitem';

import baseStyles from './css/base.css';

const List = (props) => {
	return (
		<div className={baseStyles.root}>
			{props.items.map(item => <ListItem key={item.id} {...item} />)}
		</div>
	);
};

List.displayName = "List";
List.propTypes = {
	searchKey: PropTypes.string,
	searchHandler: PropTypes.func.isRequired
};

export default List;
