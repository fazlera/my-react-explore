
import './App.css'
import Counter from './Count'
import Team from './Team'
import User from './User'
import Friends from './Friends';

function App() {
  function btnFirst(){
     alert('first button clicked')
  }
  const btnSecond = () => {
    alert('clicked button second')
  }
  const forthButton = (num) => {
    alert(num + 5)
  }
  return (
    <>
      <Counter></Counter>
      <User></User>
      <Friends></Friends>
      <Team></Team>
      <h1>Vite + React</h1>
      <button onClick={btnFirst}>first button clicked</button>
      <button onClick={btnSecond }>first button clicked</button>
      <button onClick={() => {alert('third button clicked')}}>Third Button</button>
      <button onClick={() => {forthButton(16)}}>Forth Button Clicked</button>
    </>
  )
}

export default App
