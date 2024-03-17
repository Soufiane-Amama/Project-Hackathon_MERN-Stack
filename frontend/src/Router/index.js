import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../Components/index';
import Mainpage from '../Components/mainpage';
import Dashboard from '../Components/Dashboard';
import Transictions from '../Components/transictions';
import Awards from '../Components/Awards';
import Settings from '../Components/settings';
const RouterDOM = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/"><HomePage /></Route>
				<Route exact path="/mainpage"><Mainpage /></Route>
				<Route exact path="/dashboard"><Dashboard /></Route>
				<Route exact path="/transictions"><Transictions /></Route>
				<Route exact path="/awards"><Awards /></Route>
				<Route exact path="/settings"><Settings /></Route>
			</Switch>
		</Router>
	);
}
export default RouterDOM;