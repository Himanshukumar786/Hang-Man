import { Route, Routes } from "react-router-dom";
import StartGame from "./pages/StartGame/StartGame";
import PlayGame from "./pages/PlayGame/PlayGame";

function App() {
  return (
    // <div>
    //   <h1 className="font-semibold text-3xl">Welcome to Hang-Man</h1>
    //   <TextInputFormContainer onSubmit={(value) => console.log("value from the hidden form is", value)}/>
    // </div>

    <Routes>
      <Route path="/play" element={<PlayGame/>}></Route>
      <Route path="/start" element={<StartGame/>}></Route>
      <Route path="*" element={<div>Not Found</div>}></Route>
    </Routes>
  );
}

export default App;
