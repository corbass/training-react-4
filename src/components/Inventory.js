import React from 'react';
import '../App.css';

const Inventory = (props) => {
	return (
		<div className="fond" style={{color:"white"}}>
			<div className="fond2" style={{ 
					width: props.windows == 4 ? "62%" : "100%",
					display: props.windows == 4 ? "inline-block" : "",
					height:"78vh",
					overflow:"hidden",
					wordWrap:"break-word",
					overflowY: "scroll",

				}} 

			>
				<div>
					<h1>Inventory</h1>
				</div>

				<div style={{
					borderBottom:"1px solid white"
				}}>
					<input
						style={{
							height: 25,
							width: "80%"
						}}
						type='text'
						placeholder={"Title"}
						value={props.article.title}
						onChange={(e) => {
							let article = {...props.article};
							article.title = e.target.value;                     
							props.setState({article});

						}}
					/>

					<input
						style={{
							height: 25,
							width: "80%"
						}}
						type='number'
						placeholder={"Price"}
						min="0"
						value={props.article.price}
						onChange={(e) => {
							let article = {...props.article};
							article.price = e.target.value;                     
							props.setState({article});

						}}
					/>

					<input
						style={{
							height: 25,
							width: "80%"
						}}
						type='text'
						placeholder={"Description"}
						value={props.article.description}
						onChange={(e) => {
							let article = {...props.article};
							article.description = e.target.value;                     
							props.setState({article});

						}}
					/>

					<input
						style={{
							height: 25,
							width: "80%"
						}}
						type='text'
						placeholder={"URL image"}
						value={props.article.image}
						onChange={(e) => {
							let article = {...props.article};
							article.image = e.target.value;                     
							props.setState({article});

						}}
					/>

					

					<input
						style={{
							height: 25,
							width: "80%"
						}}
						type='number'
						placeholder={"Quantity"}
						min="0"
						value={props.article.quantity}
						onChange={(e) => {
							let article = {...props.article};
							article.quantity = e.target.value;                     
							props.setState({article});

						}}
					/>


					<br/>
					<button
					onClick={() => {
						
						props.articles_add_article({ id: Date.now(), article: props.article });
						props.verifForm();
						props.resetArticle();
					}}

						>Add</button>

				</div>
				

				<div style={{backgroundColor:"rgba(0,0,0,0.9)",}}>
					{
				props.items.map((item, index) => {
					var indexEdit = props.edits.findIndex((obj) => obj.id == item.id);
					
					return(

						indexEdit > -1 ?
									<div style={{
										borderBottom:"1px solid white"
									}}>
										{console.log("test3",props.edits[indexEdit].article)}
										<input
											style={{
												height: 25,
												width: "80%"
											}}
											type='text'
											placeholder={"Title"}
											value={props.edits[indexEdit].article.title}
											onChange={(e) => {
												let article = {...props.article};
												props.edits[indexEdit].article.title = e.target.value;                     
												props.setState({article});

											}}
										/>

										<input
											style={{
												height: 25,
												width: "80%"
											}}
											type='number'
											placeholder={"Price"}
											min="0"
											value={props.edits[indexEdit].article.price}
											onChange={(e) => {
												let article = {...props.article};
												props.edits[indexEdit].article.price = e.target.value;                     
												props.setState({article});

											}}
										/>

										<input
											style={{
												height: 25,
												width: "80%"
											}}
											type='text'
											placeholder={"Description"}
											value={props.edits[indexEdit].article.description}
											onChange={(e) => {
												let article = {...props.article};
												props.edits[indexEdit].article.description = e.target.value;                     
												props.setState({article});

											}}
										/>

										<input
											style={{
												height: 25,
												width: "80%"
											}}
											type='text'
											placeholder={"URL image"}
											value={props.edits[indexEdit].article.image}
											onChange={(e) => {
												let article = {...props.article};
												props.edits[indexEdit].article.image = e.target.value;                     
												props.setState({article});

											}}
										/>

										

										<input
											style={{
												height: 25,
												width: "80%"
											}}
											type='number'
											placeholder={"Quantity"}
											min="0"
											value={props.edits[indexEdit].article.quantity}
											onChange={(e) => {
												let article = {...props.article};
												props.edits[indexEdit].article.quantity = e.target.value;                     
												props.setState({article});

											}}
										/>


										<br/>
										<button
										onClick={() => {props.articles_confirm_edit(item) }}>Confirm</button>

									</div>											


								:

									<div style={{
										borderWidth: "1px",
										borderStyle: "solid",
										borderColor: "white",
										overflow:"hidden"
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
										</div>

										<div style={{marginTop:"10px"}}>
											<button style={{marginRight:"5px"}} onClick={() => {props.articles_edit(item)  }}>Edit</button> 

											<button style={{marginRight:"5px"}} onClick={() => {props.articles_increment(item) }}>Add one</button>

											<button style={{marginRight:"5px"}} onClick={() => {props.articles_decrement(item) }}>Remove one</button> 

											<button style={{marginRight:"5px"}} onClick={() => {props.articles_delete(item) }}>Delete</button> 

										</div>

										
										
									</div>


					)}
					
				)}
				</div>

			</div>
		</div>
	)
}

export default Inventory;