import React from 'react';

import Store from './Store';
import Cart from './Cart';
import Inventory from './Inventory';


const Board = (props) => {
	return (
		<div>
					


			<div style={{ 
					display: "flex"
				}} 

			>

			
					<Store
						items={props.items}
						articles_add_cart={props.articles_add_cart}
						windows={props.windows}
					/>

		

			

					<Cart
						cart={props.cart}
						articles_cart_add={props.articles_cart_add}
						articles_cart_remove={props.articles_cart_remove}
						articles_cart_delete={props.articles_cart_delete}
						cart_reset={props.cart_reset}
						cart_confirm={props.cart_confirm}
						totalPrice={props.totalPrice}
						setState={props.setState}
						windows={props.windows}
					/>

		

				

					<Inventory
						items={props.items}
						edits={props.edits}
						article={props.article}
						verifForm={props.verifForm}
						resetArticle={props.resetArticle}
						articles_confirm_edit={props.articles_confirm_edit}
						articles_edit={props.articles_edit}
						articles_increment={props.articles_increment}
						articles_decrement={props.articles_decrement}
						articles_delete={props.articles_delete}
						articles_add_article={props.articles_add_article}
						setState={props.setState}
						windows={props.windows}
					/>

			
						

			</div>

		</div>
	)
}

export default Board;