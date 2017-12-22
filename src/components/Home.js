import React from 'react';

const Home = (props) => {
	return (
		<div> 
			<input
				style={{
					marginTop: "30px",
					height: 25,
					width: "80%"
				}}
				type='text'
				placeholder={"Shop name"}
				value={props.shop}
				onChange={(e) => {
					let shop = {...props.shop};
					shop = e.target.value;   
					props.setState({shop});

				}}
			/>
			<div>

				<button style={{
					marginTop: "70px",
						height: 55,
						width: "40%"
					}} onClick={() => {props.setState({windows:1}) }}>Open the shop</button>
			</div>
		</div>
	
	)
}

export default Home;