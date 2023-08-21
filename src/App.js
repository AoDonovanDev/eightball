import { useState } from "react"
import {Eightball} from "./Eightball"


const App = () => {
  const [state, setState] = useState('question')
  const msgs = [
  { msg: "It is certain.", color: "green" },
  { msg: "It is decidedly so.", color: "green" },
  { msg: "Without a doubt.", color: "green" },
  { msg: "Yes - definitely.", color: "green" },
  { msg: "You may rely on it.", color: "green" },
  { msg: "As I see it, yes.", color: "green" },
  { msg: "Most likely.", color: "green" },
  { msg: "Outlook good.", color: "green" },
  { msg: "Yes.", color: "green" },
  { msg: "Signs point to yes.", color: "goldenrod" },
  { msg: "Reply hazy, try again.", color: "goldenrod" },
  { msg: "Ask again later.", color: "goldenrod" },
  { msg: "Better not tell you now.", color: "goldenrod" },
  { msg: "Cannot predict now.", color: "goldenrod" },
  { msg: "Concentrate and ask again.", color: "goldenrod" },
  { msg: "Don't count on it.", color: "red" },
  { msg: "My reply is no.", color: "red" },
  { msg: "My sources say no.", color: "red" },
  { msg: "Outlook not so good.", color: "red" },
  { msg: "Very doubtful.", color: "red" },
]
const choice = msgs[Math.floor(Math.random()*msgs.length)]
  return (
    <div className="App" onClick={() => setState(state === 'question' ? 'answer' : 'question')}>
      <Eightball  
                  msg={state === 'question' ? 'Think of a question' : choice.msg}
                  color = {state === 'question' ? 'black' : choice.color} />
    </div>
  )
}

export default App