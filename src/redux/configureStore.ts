import { applyMiddleware, combineReducers, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import storage from '@react-native-async-storage/async-storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userReducer } from './user';

const middlewares: any[] = [thunk];

const logger = createLogger();
middlewares.push(logger);

const rootReducer = combineReducers({
  user: userReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const reducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middlewares)),
  );
  let persistor = persistStore(store);
  return { store, persistor };
};
