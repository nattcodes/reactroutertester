import React from "react";

//pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Faq from "./Pages/Faq";
import Contact from "./Pages/Contact";

//layout
import RootLayout from "./Layout/RootLayout";
import Help from "./Layout/Help";

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
      <Route path="help" element={<Help/>}>
        <Route path="faq" element={<Faq/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Route>
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
