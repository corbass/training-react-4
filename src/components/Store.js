import React from 'react';
import '../App.css';

const Store = (props) => {
	return (
		<div className="fond" style={{color:"white"}}>
			<div className="fond2" style={{ 
					width: props.windows == 3 ? "62%" : "100%",
					display: props.windows == 3 ? "inline-block" : "",
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
								<div align="left" style={{fontSize:"larger", fontWeight:"bold", textDecoration:"underline",marginBottom:"5px"}}>Quantity: {item.article.quantity}</div>
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
		</div>
	)
}

export default Store;