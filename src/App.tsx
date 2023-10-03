import { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom"
import './App.css';
import FormContainer from './components/FormContainer/FormContainer';
import ModalWindow from './components/ModalWindow/ModalWindow';
import { StateProvider } from './rootState';

function App() {
  const [showModal, setShowModal] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/result') {
      setShowModal(true)
    } else {
      setShowModal(false)
    }
  }, [location])

  return (
    <StateProvider>
      <div className="wrapper">
        <FormContainer />
        {showModal && <ModalWindow />}
      </div>
    </StateProvider>
  );
}

export default App;
