import React from 'react';
import '../App.css';

const OrderHistoric = (props) => {
	var date;
	
	
	return (
		<div className="fond" style={{
				color:"white",
				
			}}>
			<div className="fond2" style={{ 
					width: "62%" ,
					display: "inline-block" ,
					height:"78vh",
					overflowY: "scroll",
				}} 

			>

				<div>
					<h1 style={{fontSize:"x-larger"}}>OrderHistoric</h1>
				</div>
				{
				props.orders.map((item, index) => {
					let totalPrice=0;
					item[0].order.map((elt, index) => {
						
						{totalPrice += elt.article.quantity*elt.article.price}
					})
					return(

						<div style={{
							borderWidth: "1px",
							borderStyle: "solid",
							borderColor: "white",
							overflow:"hidden",
							marginBottom: "10px",
							backgroundColor:"rgba(0,0,0,0.9)",

						}}>

							<div align="center" style={{
								width: "100%",
								fontSize:"larger",
								fontWeight:"bold",
								textDecoration:"underline",
								display: "flex",
								justifyContent: "space-between",
								marginTop:"1%",
								marginBottom:"1%",
							}}>
								<div >Order number: {item[0].idcmd}</div>
								<div >date: {item[0].date}</div>
								<div >price: {totalPrice} $</div>
							</div>
							
								{
									console.log("item :",new Date()),
									console.log("idcmd :",item[0].idcmd),
									console.log("item.order :",item[0].order),
									<div style={{
										borderWidth: "1px",
										borderStyle: "solid",
										borderColor: "white",
										overflow:"hidden",
										display:"-webkit-inline-box",
										overflowX: "scroll",
										width: "100%",
										maxHeight: "200px",
									}}>
									{
										
										item[0].order.map((elt, index) => {
											let totalArticlePrice =0;

											{totalArticlePrice = elt.article.price*elt.article.quantity}
											
											return(
												<div style={{
													borderWidth: "1px",
													borderStyle: "solid",
													borderColor: "white",
													overflow:"hidden",
													maxWidth:"30%",
												}}>
													<img src={elt.article.image} alt="img" align="left" style={{
														overflow:"hidden",
														maxWidth:"48%",
														borderWidth: "1px",
														borderStyle: "solid",
														borderColor: "white",
														backgroundColor: "grey"

													}}/>

													<div style={{
														overflow:"hidden",
														maxWidth:"52%",
														wordWrap: "break-word",
														
													}}>
														<div style={{fontSize:"larger", fontWeight:"bold", textDecoration:"underline", marginBottom:"8px", marginTop:"8px"}}>{elt.article.title}</div>
																 
														<div align="left" style={{fontSize:"large", fontWeight:"bold", textDecoration:"underline",marginBottom:"8px"}}>Price: {elt.article.price} $</div>
														<div align="left" style={{fontSize:"medium", fontWeight:"bold", textDecoration:"underline",marginBottom:"8px"}}>Quantity: {elt.article.quantity} ({totalArticlePrice} $)</div>
														<div align="left" style={{fontSize:"small",marginBottom:"5px"}}>Reference: #{elt.id}</div>
														
													</div>
												</div>
											)})
									}
									</div>

								}
								

								

							
							
						</div>


					)}
					
				)}


			
			</div>
		</div>
	)
}

export default OrderHistoric;