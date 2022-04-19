import "./App.css";
import TodosList from "./pages/Todo/TodosList";
import TodoDetail from "./pages/Todo/TodoDetail";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import appPaths from "./constants/appPaths";

const routes = [
  {
    path: appPaths.todo.list,
    component: TodosList,
  },
  {
    path: appPaths.todo.detai,
    component: TodoDetail,
  },
  {
    path: appPaths.homepage,
    component: Homepage,
  }
];

function App() {
  //! Render
  return (
        <Router>
          <Routes>
            {routes.map(route => {
              return <Route key={route.path} path={route.path} element={<route.component />} />
            })}
          </Routes>
        </Router>
  );
}

export default App;
