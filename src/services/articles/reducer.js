import * as types from "./constants";



const initialState = {
	items: [
		{
			id:"1514149765907",
			article:{
				title:"Balle de ping-pong \"Le royaume de la soude\"",
				price:3.5,
				description:"6 balles de ping-pong \"Le royaume de la soude\"",
				image:"https://img15.hostingpics.net/pics/7359496balle.png",
				quantity:100,
			},
		},

		{
			id:"1514150057516",
			article:{
				title:"Autocollant \"Souder pour réussir\"",
				price:5.5,
				description:"Autocollant du célébre crédo du royaume de la soude : \"Souder pour réussir\" ",
				image:"https://img15.hostingpics.net/pics/450936soude.png",
				quantity:50,
			},
		},

		{
			id:"1514155220817",
			article:{
				title:"Verre \"Le royaume de la soude\"",
				price:2.5,
				description:"Lot de 100 verre de 20cl \"Le royaume de la soude\" ",
				image:"https://img15.hostingpics.net/pics/735389gobelet.jpg",
				quantity:50,
			},
		},

		{
			id:"1514156101825",
			article:{
				title:"Essuie tout \"Le royaume de la soude\"",
				price:1.5,
				description:"Lot de 4 essuie tout \"Le royaume de la soude\" pour les puristes ",
				image:"https://img15.hostingpics.net/pics/806136essuieTout.jpg",
				quantity:30,
			},
		},

		{
			id:"1514157447673",
			article:{
				title:"Table de soude \"Le royaume de la soude\"",
				price:79.99,
				description:"Table \"Le royaume de la soude\" pour 10 personnes, diametre : 80cm ",
				image:"https://img15.hostingpics.net/pics/465682tableSoude.jpg",
				quantity:30,
			},
		},

	],
	edits: [],
	cart: [],
	orders: [
		[
			{
				date:"Mon Dec 25 2017 00:18:09 GMT+0100 (Paris, Madrid)",
				idcmd: "cmd1514157489049",
				order:[
					{
						id:"1514157447673",
						article:{
							title:"Table de soude \"Le royaume de la soude\"",
							price:79.99,
							description:"Table \"Le royaume de la soude\" pour 10 personnes, diametre : 80cm ",
							image:"https://img15.hostingpics.net/pics/465682tableSoude.jpg",
							quantity:1,
						},
					},
					{
						id:"1514156101825",
						article:{
							title:"Essuie tout \"Le royaume de la soude\"",
							price:1.5,
							description:"Lot de 4 essuie tout \"Le royaume de la soude\" pour les puristes ",
							image:"https://img15.hostingpics.net/pics/806136essuieTout.jpg",
							quantity:3,
						},
					},
					{
						id:"1514155220817",
						article:{
							title:"Verre \"Le royaume de la soude\"",
							price:2.5,
							description:"Lot de 100 verre de 20cl \"Le royaume de la soude\" ",
							image:"https://img15.hostingpics.net/pics/735389gobelet.jpg",
							quantity:5,
						},
					},
					{
						id:"1514149765907",
						article:{
							title:"Balle de ping-pong \"Le royaume de la soude\"",
							price:3.5,
							description:"6 balles de ping-pong \"Le royaume de la soude\"",
							image:"https://img15.hostingpics.net/pics/7359496balle.png",
							quantity:2,
						},
					},
					{
						id:"1514150057516",
						article:{
							title:"Autocollant \"Souder pour réussir\"",
							price:5.5,
							description:"Autocollant du célébre crédo du royaume de la soude : \"Souder pour réussir\" ",
							image:"https://img15.hostingpics.net/pics/450936soude.png",
							quantity:2,
						},
					},
				],
			},
		],
		[
			{
				date:"Mon Dec 25 2017 00:42:59 GMT+0100 (Paris, Madrid)",
				idcmd: "cmd1514158979896",
				order:[
					
					
					{
						id:"1514155220817",
						article:{
							title:"Verre \"Le royaume de la soude\"",
							price:2.5,
							description:"Lot de 100 verre de 20cl \"Le royaume de la soude\" ",
							image:"https://img15.hostingpics.net/pics/735389gobelet.jpg",
							quantity:5,
						},
					},
					{
						id:"1514149765907",
						article:{
							title:"Balle de ping-pong \"Le royaume de la soude\"",
							price:3.5,
							description:"6 balles de ping-pong \"Le royaume de la soude\"",
							image:"https://img15.hostingpics.net/pics/7359496balle.png",
							quantity:2,
						},
					},
				
				],
			},
		],

		[
			{
				date:"Mon Dec 25 2017 00:44:36 GMT+0100 (Paris, Madrid)",
				idcmd: "cmd1514159076728",
				order:[
					
					
					{
						id:"1514157447673",
						article:{
							title:"Table de soude \"Le royaume de la soude\"",
							price:79.99,
							description:"Table \"Le royaume de la soude\" pour 10 personnes, diametre : 80cm ",
							image:"https://img15.hostingpics.net/pics/465682tableSoude.jpg",
							quantity:1,
						},
					},
					
				
				],
			},
		],
	],
	indexOrder: 0,
};


export default function reducer(state = initialState, action)
{

	switch (action.type) {

		case types.ARTICLES_ADD_ARTICLE:
			var {items} = state;
			
			items.push(
				{
					id: action.payload.id,
					article: action.payload.article,
					
				}
			);
			return {
				...state,
				items: items
			}
			break;

		case types.ARTICLES_INCREMENT:
			var{items} = state;
			var indexItems = items.findIndex((obj) => obj.id == action.payload.id);
			items[indexItems].article.quantity = parseInt(items[indexItems].article.quantity) + 1 ;
			return {
				...state,
				items
			}
			break;


		case types.ARTICLES_DECREMENT:
			var{items} = state;
			var indexItems = items.findIndex((obj) => obj.id == action.payload.id);
			items[indexItems].article.quantity > 0 ? items[indexItems].article.quantity -= 1 : 0;
			
			return {
				...state,
				items
			}
			break;

		case types.ARTICLES_DELETE:
			var{items} = state;
			var indexItems = items.findIndex((obj) => obj.id == action.payload.id);
			items.splice(indexItems, 1);
			return {
				...state,
				items
			}
			break;

		case types.ARTICLES_EDIT:
			var{edits} = state;
			var indexEdit = edits.findIndex((obj) => obj.id == action.payload.id);
			if (indexEdit > -1) {
				edits.splice(indexEdit, 1);
			} else {
				edits.push(action.payload)
			}

			return {
				...state,
				edits
			}
			break;

		case types.ARTICLES_CONFIRM_EDIT:
			var{edits, items} = state;
			var indexEdit = edits.findIndex((obj) => obj.id == action.payload.id);
			var indexItems = items.findIndex((obj) => obj.id == action.payload.id);

			items[indexItems] = edits[indexEdit];

			return {
				...state,
				edits
			}
			break;

		case types.ARTICLES_ADD_CART:
			var {items} = state;
			var {cart} = state;
			var index = items.findIndex((obj) => obj.id == action.payload.id);

			items[index].article.quantity -= 1 ;


			var indexCart = cart.findIndex((obj) => obj.id == action.payload.id);
			console.log("test4",indexCart);

			if (indexCart > -1) {
				cart[indexCart].article.quantity = parseInt(cart[indexCart].article.quantity) + 1 ;
			} else {
				cart.push(
					{
						id: action.payload.id,
						article: {
							...action.payload.article,
							quantity: 1
						},

						
					}
				);

			}
				

			return {
				...state,
				cart
			}
			break;


		case types.ARTICLES_CART_ADD:
			var{cart, items} = state;
			var indexCart = cart.findIndex((obj) => obj.id == action.payload.id);
			var indexItems = items.findIndex((obj) => obj.id == action.payload.id);

			if(items[indexItems].article.quantity > 0) {
				items[indexItems].article.quantity -= 1;
				cart[indexCart].article.quantity +=1
				};
			
			
			return {
				...state,
				cart,
				items
			}
			break;

		case types.ARTICLES_CART_REMOVE:
			var{cart, items} = state;
			var indexCart = cart.findIndex((obj) => obj.id == action.payload.id);
			var indexItems = items.findIndex((obj) => obj.id == action.payload.id);

			if(cart[indexCart].article.quantity > 0) {
				items[indexItems].article.quantity += 1;
				cart[indexCart].article.quantity -=1
				};

			if(cart[indexCart].article.quantity == 0){
				cart.splice(indexCart, 1);
			};
			
			
			return {
				...state,
				cart,
				items
			}
			break;

		case types.ARTICLES_CART_DELETE:
			var{cart, items} = state;
			var indexCart = cart.findIndex((obj) => obj.id == action.payload.id);
			var indexItems = items.findIndex((obj) => obj.id == action.payload.id);

	
			items[indexItems].article.quantity += cart[indexCart].article.quantity;
		
			cart.splice(indexCart, 1);
			
			return {
				...state,
				cart,
				items
			}
			break;
			
		case types.CART_RESET:
			var{cart, items} = state;

			cart.map((item, index) => {
				var indexItems = items.findIndex((obj) => obj.id == item.id);
				items[indexItems].article.quantity += item.article.quantity;
			})
			
			cart=[];
			return {
				...state,
				cart,
				items
			}
			break;

		case types.CART_CONFIRM:

			var{cart, orders} = state;
			//cart.splice(0, 0, "cmd"+Date.now());
			cart=[{date:Date(),idcmd:"cmd"+Date.now(),order:cart}];
			console.log("cart :",cart);


			orders.push(
				cart
			);
			
			cart=[];
			console.log("history :",orders);
			return {
				...state,
				cart,
				orders,
			}
			break;


		default:
			return state;
			break;

	}
};

