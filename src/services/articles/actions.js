
import * as types from "./constants";


export function articles_add_article(payload) {
	return (dispatch, state) => {
		dispatch({
			type: types.ARTICLES_ADD_ARTICLE,
			payload
		})
	}
}

export function articles_increment(payload) {
	return (dispatch, state) => {
		dispatch({
			type: types.ARTICLES_INCREMENT,
			payload: payload,
		})
	}
}

export function articles_decrement(payload) {
	return (dispatch, state) => {
		dispatch({
			type: types.ARTICLES_DECREMENT,
			payload: payload,
		})
	}
}

export function articles_delete(payload) {
	return (dispatch, state) => {
		dispatch({
			type: types.ARTICLES_DELETE,
			payload: payload,
		})
	}
}

export function articles_edit(payload) {
	return (dispatch, state) => {
		dispatch({
			type: types.ARTICLES_EDIT,
			payload: payload,
		})
	}
}

export function articles_confirm_edit(payload) {
	return (dispatch, state) => {
		dispatch({
			type: types.ARTICLES_CONFIRM_EDIT,
			payload: payload,
		});
		dispatch({
			type: types.ARTICLES_EDIT,
			payload: payload,
		});
	}
}

export function articles_add_cart(payload) {
	return (dispatch, state) => {
		dispatch({
			type: types.ARTICLES_ADD_CART,
			payload: payload
		})
	}
}

export function articles_cart_add(payload) {
	return (dispatch, state) => {
		dispatch({
			type: types.ARTICLES_CART_ADD,
			payload: payload
		})
	}
}

export function articles_cart_remove(payload) {
	return (dispatch, state) => {
		dispatch({
			type: types.ARTICLES_CART_REMOVE,
			payload: payload
		})
	}
}

export function articles_cart_delete(payload) {
	return (dispatch, state) => {
		dispatch({
			type: types.ARTICLES_CART_DELETE,
			payload: payload
		})
	}
}

export function cart_reset(payload) {
	return (dispatch, state) => {
		dispatch({
			type: types.CART_RESET,
			payload: payload
		})
	}
}

export function cart_confirm(payload) {
	return (dispatch, state) => {
		dispatch({
			type: types.CART_CONFIRM,
			payload: payload
		})
	}
}