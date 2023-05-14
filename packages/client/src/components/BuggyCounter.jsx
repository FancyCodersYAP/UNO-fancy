import * as React from "react";
import {useState} from "react";
import {withErrorBoundary} from "react-error-boundary";
import ErrorFallback from "./ErrorFalback.tsx";


const BuggyCounter = () => {
    const [counter, setState] = useState(0)


    const handleClick = () => {
        setState((counter + 1));
    }


    if (counter === 5) {
        // Simulate a JS error
        throw new Error('💥 I crashed! 💥');
    }
    return <h1 onClick={handleClick}>{counter}</h1>;

}

export default withErrorBoundary(BuggyCounter, {
    FallbackComponent: ErrorFallback
})
