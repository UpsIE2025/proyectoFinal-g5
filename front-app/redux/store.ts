import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from '@/redux/userSlice';
import customizerReducer from '@/redux/customizerSlice';

const rootReducer = combineReducers({
  user: userReducer,
  customizer: customizerReducer,
});

export default configureStore({
  reducer: {
    user: userReducer,
    customizer: customizerReducer,
  },
});

export type AppState = ReturnType<typeof rootReducer>;
