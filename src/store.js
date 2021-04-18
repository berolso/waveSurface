import thunk from "redux-thunk";

import { createStore, applyMiddleware } from "redux";

export const store = createStore(applyMiddleware(thunk));
