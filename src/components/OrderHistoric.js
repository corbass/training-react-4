import React from 'react';

const OrderHistoric = (props) => {
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
				<h1>OrderHistoric</h1>
			</div>
			{
			props.orders.map((item, index) => {
				return(

					<div style={{
						borderWidth: "1px",
						borderStyle: "solid",
						borderColor: "black",
						overflow:"hidden",
					}}>

						<div>
							<h1>Order number: {item.idcmd}</h1>
						</div>
						
							{
								console.log("item :",item),
								console.log("idcmd :",item.idcmd),
								console.log("item.order :",item.order),
								item.order.map((elt, index) => {
									return(
										<div>
											<img src={elt.article.image} alt="img" align="left" style={{
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
												<div style={{fontSize:"x-large", fontWeight:"bold", textDecoration:"underline", marginBottom:"80px", marginTop:"8px"}}>{elt.article.title}</div>
														 
												<div align="left" style={{fontSize:"larger", fontWeight:"bold", textDecoration:"underline",marginBottom:"12px"}}>Price: {elt.article.price} $</div>
												<div align="left" style={{fontSize:"larger", fontWeight:"bold", textDecoration:"underline",marginBottom:"12px"}}>Quantity: {elt.article.quantity}</div>
												<div align="left" style={{fontSize:"medium",marginBottom:"5px"}}>Reference: #{elt.id}</div>
												<div align="left" ><span style={{textDecoration:"underline"}}>description:</span> {elt.article.description}</div>
												
											</div>
										</div>
									)})
							}

							

						
						
					</div>


				)}
				
			)}


		
		</div>
	)
}

export default OrderHistoric;