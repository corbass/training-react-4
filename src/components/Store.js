import React from 'react';

const Store = (props) => {
	return (
		<div style={{ 
				backgroundColor: "red",
				width:"100%",
				height:"78vh",
				overflow:"hidden",
				wordWrap:"break-word",
				overflowY: "scroll",
			}} 

		>


			
			<div>
				<h1>Store</h1>
			</div>
			{
			props.items.map((item, index) => {
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
							{ 
							
								item.article.quantity > 0 ? <button onClick={() => {props.articles_add_cart(item) }}>Add to cart</button> : ""
							}
						</div>

						
						
					</div>


				)}
				
			)}


		
		</div>
	)
}

export default Store;