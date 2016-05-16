import { PropTypes } from 'react';

import Header from '../header';
import SearchBar from '../searchbar';
import List from '../list';

import baseStyles from './css/base.css';

const HomePage = (props) => {
	return (
		<div className={baseStyles.root}>
			<Header text="Homepage" back="false"/>
			<SearchBar searchKey={props.searchKey} searchHandler={props.searchHandler}/>
			<div className={baseStyles.content}>
				<List items={props.items}/>
			</div>
		</div>
	);
};

HomePage.displayName = "HomePage";
HomePage.propTypes = {
	searchKey: PropTypes.string,
	searchHandler: PropTypes.func.isRequired
};

export default HomePage;
