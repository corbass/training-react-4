import React from 'react';
import '../App.css';

const Cart = (props) => {
	return (
		<div className="fond" style={{
				color:"white",

			}}>
			<div className="fond2" style={{ 
					width: props.windows == 5 ? "62%" : "100%",
					display: props.windows == 5 ? "inline-block" : "",
					height:"78vh",
					overflow:"hidden",
					wordWrap:"break-word",
					overflowY: "scroll",
				}} 

			>
				<div>
					<h1>Cart</h1>
				</div>
				<div align="left" style={{
					fontSize:"x-large",
					fontWeight:"bold",
					textDecoration:"underline",
				}}>
					Total Price: {props.totalPrice} $
					
				</div>
				{
				props.cart.map((item, index) => {
					let totalArticlePrice =0;
					{totalArticlePrice = item.article.price*item.article.quantity}
					return(

						<div style={{
							borderWidth: "1px",
							borderStyle: "solid",
							borderColor: "white",
							overflow:"hidden",
							backgroundColor:"rgba(0,0,0,0.9)",
						}}>
							<img src={item.article.image} alt="img" align="left" style={{
								overflow:"hidden",
								maxHeight:"100px",
								maxWidth:"40%",
								borderWidth: "1px",
								borderStyle: "solid",
								borderColor: "white",
								backgroundColor: "grey"

							}}/>

							<div style={{
								overflow:"hidden",
								
							}}>
								
								<div style={{fontSize:"x-large", fontWeight:"bold", textDecoration:"underline", marginBottom:"4px", marginTop:"4px"}}>{item.article.title}</div>
													 
								<div align="left" style={{fontSize:"larger", fontWeight:"bold", textDecoration:"underline",marginBottom:"5px"}}>Price: {item.article.price} $</div>
								<div align="left" style={{fontSize:"larger", fontWeight:"bold", textDecoration:"underline",marginBottom:"5px"}}>Quantity: {item.article.quantity} ({totalArticlePrice} $)</div>
								<div align="left" style={{fontSize:"medium",marginBottom:"5px"}}>Reference: #{item.id}</div>
								<div align="left" ><span style={{textDecoration:"underline"}}>description:</span> {item.article.description}</div>
								 
								
								<div>
								
									<button onClick={() => {props.articles_cart_add(item) }}>+</button>
									<button onClick={() => {props.articles_cart_remove(item) }}>-</button>
									<button onClick={() => {props.articles_cart_delete(item) }}>Delete</button>
								
								</div>
								
								
							</div>

							
							
						</div>


					)}
				)}


				
					
				

				<div>
					<div align="left" style={{
						fontSize:"x-large",
						fontWeight:"bold",
						textDecoration:"underline",
					}}>
						Total Price: {props.totalPrice} $
						
					</div>
					{
						props.cart.length > 0 ? <div> 
							<button onClick={() => props.cart_reset()}>Reset cart</button> 
							<button onClick={() => {props.cart_confirm() }}>Confirm order</button>
						</div>:""
					
					}
				
				</div>

				

			</div>
		</div>
	)
}

export default Cart;

