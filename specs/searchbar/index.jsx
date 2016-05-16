import { PropTypes } from 'react';

import baseStyles from './css/base.css';

const SearchBar = (props) => {
	return (
		<div className={baseStyles.root}>
			<input
				className={baseStyles.input}
				type="search"
				onChange={(event) => {props.searchHandler(event.target.value)}}
				value={props.searchKey}/>
		</div>
	);
};

SearchBar.displayName = "SearchBar";
SearchBar.propTypes = {
	searchKey: PropTypes.string,
	searchHandler: PropTypes.func.isRequired
};
SearchBar.defaultProps = {
	searchKey: 'Search...',
	searchHandler: console.log.bind(console)
};

export default SearchBar;
