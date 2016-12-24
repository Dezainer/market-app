import React from 'react';
import {render} from 'react-dom';
import {Router, Route, Link, IndexRoute, hashHistory, browserHistory} from 'react-router';

import Header from 'header';
import Promocoes from 'promocoes';
import Produtos from 'produtos';
import Produto from 'produto';

render(	
	<Router history={hashHistory}>
		<Route path="/" component={Header}>
			<IndexRoute component={Promocoes}/>
			<Route path="promocoes" component={Promocoes}/>
			<Route path="produtos" component={Produtos}>
				<Route path="/produto/:catId/:prodId" component={Produto}/>
			</Route>
		</Route>
	</Router>,
	document.getElementById('main')
);