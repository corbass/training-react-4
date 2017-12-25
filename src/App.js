import React, { Component } from 'react';
import './App.css';
import * as Image from './Image.js';

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
import Store from './components/Store';
import Cart from './components/Cart';
import Inventory from './components/Inventory';


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
		shop:"Le royaume de la soude",
		totalPrice:0,
		
	}

	render() {
		let totalPrice = 0;
		this.props.articles.cart.map((item, index) => {
			totalPrice += item.article.price*item.article.quantity;


		})

		return (
			<div className="App">
				<header className="App-header" >
					<div style={{height:"169px", display:"flex",justifyContent: "space-between",}}>
						<div style={{height:"169px",}}>
							<img align="left" src={Image.electrisen}  alt="logo" style={{
								height:"110%",
							}} />
						</div>

						<div >
							<img align="center" className="App-logo" src={Image.balle}  alt="logo" style={{
								height:"100%",
								marginTop:"-6%",
								marginBottom:"-3%",
							}} />
							<h1 align="center" style={{marginTop:"-8px"}}>Brand :{this.state.shop}</h1>
						</div>

						<div align="right" style={{height:"169px",}}>
							<img align="right" src={Image.soude}  alt="logo" style={{
								height:"110%",
								
							}} />
						</div>
					</div>

					{
					<div style={{marginTop:"-10px"}}>
						<button onClick={() => this.setState({windows:0}) }>Home</button>
						<button onClick={() => this.setState({windows:1}) }>Board</button>
						<button onClick={() => this.setState({windows:2}) }>Order historic</button>
						<button onClick={() => this.setState({windows:3}) }>Store</button>
						<button onClick={() => this.setState({windows:4}) }>Inventory</button>
						<button onClick={() => this.setState({windows:5}) }>Cart</button>

					</div>
				
					}
				</header>
				

				{

					this.state.windows == 0 ?
							<Home
								Image={Image}
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
								totalPrice={totalPrice}
								windows={this.state.windows}

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
					: this.state.windows == 3 ? 
							<Store
								items={this.props.items}
								articles_add_cart={this.props.articles_add_cart}
								windows={this.state.windows}
							/>
					: this.state.windows == 4 ? 
							<Inventory
								items={this.props.items}
								edits={this.props.articles.edits}
								article={this.state.article}
								verifForm={this.verifForm.bind(this)}
								resetArticle={this.resetArticle.bind(this)}
								articles_confirm_edit={this.props.articles_confirm_edit}
								articles_edit={this.props.articles_edit}
								articles_increment={this.props.articles_increment}
								articles_decrement={this.props.articles_decrement}
								articles_delete={this.props.articles_delete}
								articles_add_article={this.props.articles_add_article}
								setState={this.setState.bind(this)}
								windows={this.state.windows}
							/>
					: this.state.windows == 5 ? 
							<Cart
								cart={this.props.articles.cart}
								articles_cart_add={this.props.articles_cart_add}
								articles_cart_remove={this.props.articles_cart_remove}
								articles_cart_delete={this.props.articles_cart_delete}
								cart_reset={this.props.cart_reset}
								cart_confirm={this.props.cart_confirm}
								totalPrice={totalPrice}
								setState={this.setState.bind(this)}
								windows={this.state.windows}
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
