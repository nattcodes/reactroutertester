import React from "react";

//pages
import Home from "./Home";
import About from "./About";
import Faq from "./Faq";
import Contact from "./Contact";
import Careers, { careerLoader } from "./Careers";
import CareerDetails, { careerDetailsParameter } from "./CareerDetails";

//layout
import RootLayout from "./RootLayout";
import Help from "./Help";
import CareerLayout from "./CareerLayout";

//Router
import { 
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider 
} from "react-router-dom";
import CatchCareerError from "./CatchCareerError";





const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout/>} >
      <Route path="/" element={<Home/>}/>
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
