
import './App.css'
import Todolist from './components/Todolist'
import {Provider} from 'react-redux'
import {myTodoStore} from './redux'
function App() {
 

  return (
    <Provider store={myTodoStore}>
     <Todolist />
    </Provider>
  )
}

export default App
