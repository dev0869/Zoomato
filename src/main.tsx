import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
<<<<<<< HEAD
import { BrowserRouter as Router } from "react-router-dom";
=======
>>>>>>> 45587335abecff43c48954c9a9391dfe69578b35
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: 4,
      staleTime: 5 * 1000,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
<<<<<<< HEAD
    <Router>
      <ToastContainer />
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <App />
      </QueryClientProvider>
    </Router>
=======
    <ToastContainer />
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <App />
    </QueryClientProvider>
>>>>>>> 45587335abecff43c48954c9a9391dfe69578b35
  </>
);
