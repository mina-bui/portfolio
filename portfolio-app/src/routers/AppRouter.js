import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from '../components/About';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Home from '../components/Home';
import PageNotFound from '../components/PageNotFound';
import SingleProject from '../components/SingleProject';

const AppRouter = () => (

	<Router>
		<div className="wrapper">
			<Header />
			<Switch>
				<Route path={'/'} exact><Home /></Route>
				<Route path={'/about'}><About /></Route>
				<Route path={'/singleproject'}><SingleProject /></Route>
				<Route path={'/*'}><PageNotFound /></Route>
			</Switch>
			<Footer />
		</div>
	</Router>

);

export default AppRouter;
