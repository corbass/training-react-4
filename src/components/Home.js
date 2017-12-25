import React from 'react';
import '../App.css';

const Home = (props) => {
	return (
		<div className="fond" > 

			<div className="fond2" style={{
				width:"62%",
				display: "inline-block",
			}}>
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
		</div>
	
	)
}

export default Home;