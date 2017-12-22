import React from 'react';

const Exemple = (props) => {
	return (
		<div style={{ 
				backgroundColor: "blue",
				width:"100%",
				height:"78vh",
				overflow:"hidden",
				wordWrap:"break-word",
				overflowY: "scroll",
			}} 

		>
			<div>
				<h1>Cart</h1>
			</div>
			{
			props.cart.map((item, index) => {
				return(

					<div style={{
						borderWidth: "1px",
						borderStyle: "solid",
						borderColor: "black",
						overflow:"hidden",
					}}>
						<img src={item.article.image} alt="img" align="left" style={{
							overflow:"hidden",
							maxWidth:"40%",
							borderWidth: "1px",
							borderStyle: "solid",
							borderColor: "black",
							backgroundColor: "grey"

						}}/>

						<div style={{
							overflow:"hidden",
							
						}}>
							<div style={{fontSize:"x-large", fontWeight:"bold", textDecoration:"underline", marginBottom:"80px", marginTop:"8px"}}>{item.article.title}</div>
									 
							<div align="left" style={{fontSize:"larger", fontWeight:"bold", textDecoration:"underline",marginBottom:"12px"}}>Price: {item.article.price} $</div>
							<div align="left" style={{fontSize:"larger", fontWeight:"bold", textDecoration:"underline",marginBottom:"12px"}}>Quantity: {item.article.quantity}</div>
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

				{
					props.cart.length > 0 ? <div> 
						<button onClick={() => props.cart_reset()}>Reset cart</button> 
						<button onClick={() => {props.cart_confirm() }}>Confirm order</button>
					</div>:""
				
				}
			
			</div>

			

		</div>
	)
}

export default Exemple;

