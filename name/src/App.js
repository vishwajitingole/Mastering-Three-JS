import "./App.css";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";

function App() {
  return (
    <div className="container">
      <Canvas camera={{ fov: 45, near: 0.1, far: 100, position: [2, 2, 6] }}>
        <Scene />
      </Canvas>
    </div>
  );
}

export default App;
