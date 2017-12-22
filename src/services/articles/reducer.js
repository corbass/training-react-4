import * as types from "./constants";


const initialState = {
	items: [],
	edits: [],
	cart: [],
	orders: [],
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
			cart=[{idcmd:"cmd"+Date.now(),order:cart}];
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

