import { RouterProvider } from "react-router-dom";
import InstructionModal from "./Components/InstructionModal/InstructionModal";
import router from "./Routes/Routes/Routes";


function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <InstructionModal/>
    </div>
  );
}

export default App;
