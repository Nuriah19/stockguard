import Router from "./componets/Router";
import State from "./context/State";

function App() {
  return (
    <State>
      <Router />
    </State>
  );
}

export default App;
