import Canvas from "./components/Canvas";
import SettingBar from "./components/SettingBar";
import ToolBar from "./components/ToolBar";

const App = () => {
  return (
    <div className="app">
      <ToolBar />
      <SettingBar />
      <Canvas />
    </div>
  );
};

export default App;
