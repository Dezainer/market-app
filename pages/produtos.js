import React from 'react';
import {Link} from 'react-router';

import dbProd from 'dbProd';

export default class Produtos extends React.Component{
	render(){
		return(
			<div className="produtos">
				<ul>
					{
						dbProd.map(prod => (
							prod.items.map(item => (
								<li key={item.id}>
									<div className="wrapper">
										<Link to={`/produto/${prod.id}/${item.id}`}>
											<img src={prod.img}/>
											<div className="inf">
												<h2>{item.name}</h2><br/>
												<h3>R$ {item.price}</h3>
											</div>
										</Link>
									</div>
									<hr/>
								</li>
							))
						))
					}
				</ul>
				{this.props.children}
			</div>
		);
	}
}