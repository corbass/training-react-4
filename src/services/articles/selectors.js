import * as types from "./constants";


export function filtered_todos(state) {

	switch(state.todos.filter) {

		case types.TODOS_FILTER_BY_ALL:
			return state.todos.items;
			break;

		case types.TODOS_FILTER_BY_TODO:
			return state.todos.items.filter((obj) => !obj.completed);
			break;

		case types.TODOS_FILTER_BY_COMPLETED:
			return state.todos.items.filter((obj) => obj.completed);
			break;

	}

}
