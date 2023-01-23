import { useState } from "react"  // Import the useState hook from the React library

export const useCounter = (initialValue = 10) => {  // Define a custom hook named "useCounter" that takes an initial value argument, with a default value of 10

    const [counter, setCounter] = useState(initialValue);  // Use the useState hook to set the initial value of the counter and store the current value in a variable named "counter" and a function to update the value in a variable named "setCounter"

    const increment = (value = 1) => {  // Define a method named "increment" that takes an optional value argument, which defaults to 1, to specify by how much the counter should be incremented

        setCounter((current) => current + value);  // Use the setCounter function to update the counter by adding the value to the current counter value

    }

    const decrement = (value = 1) => {  // Define a method named "decrement" that takes an optional value argument, which defaults to 1, to specify by how much the counter should be decremented

        setCounter((current) => current - value);  // Use the setCounter function to update the counter by subtracting the value from the current counter value

    }

    const Reset = () => { // Define a method named "Reset" to reset the counter to its initial value
        
        setCounter(initialValue); // Use the setCounter function to set the counter back to its initial value

    }

    return {  // Return an object containing the counter state, and methods for incrementing, decrementing, and resetting the counter

        counter, // The current value of the counter
        increment, // The method for incrementing the counter
        decrement, // The method for decrementing the counter
        Reset, // The method for resetting the counter to its initial value
    }

}