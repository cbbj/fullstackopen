import { useState } from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticsLine = (props) => (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
)

const Statistics = (props) => {
  const votes = props.good + props.neutral + props.bad
  console.log(votes)
  if (votes === 0){
    return(
      <div> No Feedback Given </div>
    )
  }
  const average = (props.good + props.neutral * 0 + props.bad * (-1))/votes
  const positive = props.good / votes
  console.log(average)
  return(

    <table>
    <StatisticsLine text = "good" value ={props.good} />
    <StatisticsLine text = "neutral" value ={props.neutral} />
    <StatisticsLine text = "bad" value ={props.bad} />
    <StatisticsLine text = "average" value ={average} />
    <StatisticsLine text = "positive" value ={positive} />
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    const updatedClicks = good + 1
    console.log(good)
    setGood(updatedClicks)
    console.log(good)
  }

  const handleNeutralClick = () => {
    const updatedClicks = neutral + 1
    setNeutral(updatedClicks)
    console.log(updatedClicks)
  }

  const handleBadClick = () => {
    const updatedClicks = bad + 1
    setBad(updatedClicks)
    console.log(updatedClicks)
  }


  return (
    <div>
    <h1> give feedback </h1>
    <Button handleClick = {handleGoodClick} text="good" />
    <Button handleClick = {handleNeutralClick} text="neutral" />
    <Button handleClick = {handleBadClick} text="bad" />
    <h1> statistics </h1>
    <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
