import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import textReducer from "../features/text/textSlice";
import loginReducer from "../features/auth/loginSlice";
import themeReducer from "../features/changeThemes/themeSlice";
import machinesReducer from "../features/machines/machinesSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    text: textReducer,
    login: loginReducer,
    theme: themeReducer,
    machines: machinesReducer,
  },
});
