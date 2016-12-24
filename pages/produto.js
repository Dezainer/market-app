import React from 'react';
import {Link} from 'react-router';

import dbProd from 'dbProd';

export default class Produto extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			prod:{}
		};
	}

	findProduct(catId, prodId){
		return dbProd[catId].items[prodId];
	}

	componentDidMount(){
		this.setState({prod: this.findProduct(this.props.params.catId, this.props.params.prodId)});
	}

	render(){
		return(
			<div className="modal">
				<div className="container">
					<div className="header">
						<h4>{this.state.prod.name}</h4>
						<Link to="/produtos"><span>x</span></Link>
					</div>
					<div className="content">
						
					</div>
				</div>
			</div>
		);
	}
}