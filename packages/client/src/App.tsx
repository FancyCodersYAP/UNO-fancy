import { useEffect } from 'react'
import './App.css'
import {ErrorBoundary} from "react-error-boundary";
// @ts-ignore
import BuggyCounter from "./components/BuggyCounter.jsx";
// @ts-ignore
import ErrorFallback from "./components/ErrorFalback.tsx";



function App() {
  useEffect(() => {
    const fetchServerData = async () => {
      const url = `http://localhost:${__SERVER_PORT__}`
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
    }

    fetchServerData()
  }, [])
  return  ( <div>
    <p>
      <b>
        This is an example of error boundaries in React 16.
        <br /><br />
        Click on the numbers to increase the counters.
        <br />
        The counter is programmed to throw when it reaches 5. This simulates a JavaScript error in a component.
      </b>
    </p>
    <hr />
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <p>These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them.</p>
      <BuggyCounter />
      <BuggyCounter />
    </ErrorBoundary>
    <hr />
    <p>These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.</p>
    <ErrorBoundary FallbackComponent={ErrorFallback}><BuggyCounter /></ErrorBoundary>
    <ErrorBoundary FallbackComponent={ErrorFallback}><BuggyCounter /></ErrorBoundary>
  </div>)

}

export default App
