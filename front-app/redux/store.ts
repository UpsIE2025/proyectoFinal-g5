import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from '@/redux/userSlice';
import customizerReducer from '@/redux/customizerSlice';
import accessTokenReducer from '@/redux/tokenSlice'

const rootReducer = combineReducers({
  user: userReducer,
  customizer: customizerReducer,
  token: accessTokenReducer
});

export default configureStore({
  reducer: {
    user: userReducer,
    customizer: customizerReducer,
    token: accessTokenReducer
  },
});

export type AppState = ReturnType<typeof rootReducer>;
