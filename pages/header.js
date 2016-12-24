import React from 'react';
import {Link} from 'react-router';

export default class Header extends React.Component{

	render(){
		return(
			<div>
				<header>
					<div className="top-bar">
						<span>&#9776;&#9776;</span>
						<h1>Market</h1>
						<img src="../footage/basket.png"></img>
					</div>
					<ul>
						<li><Link to="/promocoes" activeClassName="active">PROMOÇÕES</Link></li>
						<li><Link to="/produtos" activeClassName="active">PRODUTOS</Link></li>
					</ul>
				</header>
				<div>
					{this.props.children}
				</div>
			</div>
		);
	}
}