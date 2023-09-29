import './App.css';
import FormContainer from './components/FormContainer/FormContainer';
import ModalWindow from './components/ModalWindow/ModalWindow';
import { StateProvider } from './rootState';

function App() {
  return (
    <StateProvider>
      <div className="wrapper">
        <FormContainer />
        {false && <ModalWindow />}
      </div>
    </StateProvider>
  );
}

export default App;
