
import './App.css'
import Calenderr from './components/Calenderr'
import EventForm from './components/EventForm'
import Events from './components/Events'

function App() {

  return (
    <div className='w-11/12 min-h-screen mx-auto flex'>
      <Calenderr />
      <Events />
      <EventForm />
    </div>
  )
}

export default App
