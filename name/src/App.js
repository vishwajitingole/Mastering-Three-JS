import "./App.css";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";

function App() {
  return (
    <div className="container">
      <Canvas>
        <Scene />
      </Canvas>
    </div>
  );
}

export default App;
