import { LOGIN } from "./action";
const initialState = { user: null };

export const loginReducer = (store = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN:
            return { ...store, user: payload.user };
        default:
            return store;
    }
}