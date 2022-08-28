import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import { Provider } from 'react-redux';
// import store from 'reduxPrac/config/configStore';
// import store from 'redux-todolist/redux/config/configStore';
// import store from 'redux-toolkit-todolist/redux/configStore';
// import store from 'redux-thunk-todolist/redux/configStore';
// import store from 'sparta-todolist/redux/configStore';
// import GlobalStyle from 'redux-todolist/styles/GlobalStyle';
import GlobalStyle from "sparta-todolist/styles/GlobalStyle";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <GlobalStyle />
    <BrowserRouter>
      {/* <Provider store={store}> */}
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={true} />
        <App />
      </QueryClientProvider>
      {/* </Provider> */}
    </BrowserRouter>
  </>
);
