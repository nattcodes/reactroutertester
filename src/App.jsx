import React from "react";

//pages
import Home from "Pages/Home";
import About from "Pages/About";
import Faq from "Pages/Faq";
import Contact from "Pages/Contact";
import Careers, { careerLoader } from "Pages/Careers";
import CareerDetails, { careerDetailsParameter } from "Pages/CareerDetails";
import CatchCareerError from "Pages/CatchCareerError";

//layout
import RootLayout from "Layout/RootLayout";
import Help from "Layout/Help";
import CareerLayout from "Layout/CareerLayout";

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

      <Route path="careers" element={<CareerLayout/>} errorElement={<CatchCareerError/>}>
        <Route 
          index
          element={<Careers/>}
          loader={careerLoader}
        />
        <Route 
          path=":id"
          element={<CareerDetails/>}
          loader={careerDetailsParameter}
        />
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
