import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import {
	articles_add_article,
	articles_increment,
	articles_decrement,
	articles_delete,
	articles_edit,
	articles_confirm_edit,
	articles_add_cart,
	articles_cart_add,
	articles_cart_remove,
	articles_cart_delete,
	cart_reset,
	cart_confirm,
	
} from "./services/articles/actions";

import Home from './components/Home';
import Board from './components/Board';
import OrderHistoric from './components/OrderHistoric';


class App extends Component {

	verifForm(state) {
		
		this.state.article.quantity == "" ? this.state.article.quantity = 0 : 0; 
		this.state.article.price == "" ? this.state.article.price = 0 : "";
		this.state.article.image == "" ? this.state.article.image = "http://www.custompok.fr/www/upload/produits/image-manquante.png" : "";
		this.state.article.title == "" ? this.state.article.title = this.props.items[this.props.items.length-1].id : "";
		this.state.article.description == "" ? this.state.article.description = "description is empty" : "";
	}

	resetArticle(state) {
		let article = {...this.state.article};
		article.title = "";      
		article.price = "";
		article.description = "";
		article.image = "";
		article.quantity = "";       
		this.setState({article});
	}

	state = {

		article:{ 	 	
			title:"",
			price:"",
			description:"",
			image:"",
			quantity:"",
		},

		windows:0,
		shop:"",
		
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">

					<img  src={logo} className="App-logo" alt="logo" style={{
						height:"70%	"
					}} />
					{console.log("shop :",this.state.shop)}
					<h1 style={{marginTop:"-8px"}}>Brand :{this.state.shop}</h1>
					{
					this.state.windows != 0 ?
						<div style={{marginTop:"-10px"}}>
							<button onClick={() => this.setState({windows:1}) }>Board</button>
							<button onClick={() => this.setState({windows:2}) }>Order historic</button>
						</div>
					:""
					}
				</header>
				

				{

					this.state.windows == 0 ?
							<Home
								shop={this.state.shop}
								windows={this.state.windows}
								setState={this.setState.bind(this)}
							/>

					: this.state.windows == 1 ?
							<Board

								items={this.props.items}
								edits={this.props.articles.edits}
								cart={this.props.articles.cart}

								article={this.state.article}

								setState={this.setState.bind(this)}
								articles_add_article={this.props.articles_add_article}
								articles_edit={this.props.articles_edit}
								articles_confirm_edit={this.props.articles_confirm_edit}
								articles_increment={this.props.articles_increment}
								articles_decrement={this.props.articles_decrement}
								articles_delete={this.props.articles_delete}
								verifForm={this.verifForm.bind(this)}
								resetArticle={this.resetArticle.bind(this)}
								articles_add_cart={this.props.articles_add_cart}
								articles_cart_add={this.props.articles_cart_add}
								articles_cart_remove={this.props.articles_cart_remove}
								articles_cart_delete={this.props.articles_cart_delete}
								cart_reset={this.props.cart_reset}
								cart_confirm={this.props.cart_confirm}
							/>
					: this.state.windows == 2 ? 
							<OrderHistoric

								orders={this.props.orders}
							/>
					: ""
							
					
				}

				
			</div>
		);
	}

}

const mapStateToProps = (state) => ({
	state: state,
	articles: state.articles,
	items: state.articles.items,
	cart: state.articles.cart,
	orders: state.articles.orders,
});


const mapActionsToProps = (dispatch) => ({
	articles_add_article: bindActionCreators(articles_add_article, dispatch),
	articles_increment: bindActionCreators(articles_increment, dispatch),
	articles_decrement: bindActionCreators(articles_decrement, dispatch),
	articles_delete: bindActionCreators(articles_delete, dispatch),
	articles_edit: bindActionCreators(articles_edit, dispatch),
	articles_confirm_edit: bindActionCreators(articles_confirm_edit, dispatch),
	articles_add_cart: bindActionCreators(articles_add_cart, dispatch),
	articles_cart_add: bindActionCreators(articles_cart_add, dispatch),
	articles_cart_remove: bindActionCreators(articles_cart_remove, dispatch),
	articles_cart_delete: bindActionCreators(articles_cart_delete, dispatch),
	cart_reset: bindActionCreators(cart_reset, dispatch),
	cart_confirm: bindActionCreators(cart_confirm, dispatch),
});


export default connect(mapStateToProps, mapActionsToProps)( App );
