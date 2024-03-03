import { authReducer } from "./authStore";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage";
import {
    persistStore,
    persistReducer,
    FLUSH, 
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from "redux-persist"


const rootReducer = combineReducers({
    authSlice:authReducer
});

const perisistConfig = {
    key:"root",
    version:1,
    storage,
    whitelist: ["authSlice"]
};

const persistedReducers = persistReducer(perisistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducers,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions :[FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
    
})

const persistor = persistStore(store)
export {store, persistor}

