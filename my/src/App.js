




import Moses from "./personal/Moses"
import './App.css';
                                                                                                                                                   
                                                                  
import { Route, Routes } from "react-router-dom";
import Project from "./personal/Project";
import About from "./personal/About";
import Contact from "./personal/Contact";
                            
function App() {
  return (
    <>
                                  
<Routes>
<Route>
<Route path="/" element={<Moses />} />
<Route path="project" element={<Project />} />
<Route path="about" element={<About />} />
<Route path="contact" element={<Contact />} />
</Route>
  </Routes>
                                                                                                                                                                                    
                                                                                                                              
    </>
  );
}

export default App;
