import React from "react";
//pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Help from "./Pages/Help";

//layout
import RootLayout from "./Layout/RootLayout";

//Router
import { 
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider 
} from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="help" element={<Help/>}/>
    </Route>
  )
)

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
