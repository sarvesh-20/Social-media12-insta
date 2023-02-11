import React from "react";
import ExplorerPG from "./components/instagramui/ExplorerPG";
import Profile1 from "./components/instagramui/Profile1";
// import Landing from './components/Landingpg/Landing'

const App = () => {
  return (
    // <div className='text-slate-800 text-xl bg-slate-200'><Landing/></div>
    <div>
      <div className="text-white bg-[rgb(18,18,18)]">
        <Profile1 />
      </div>
      <div className="text-white bg-[rgb(18,18,18)] ">
        <ExplorerPG/>
      </div>
    </div>
  );
};

export default App;
