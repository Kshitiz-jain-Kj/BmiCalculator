import React from 'react'
import { useState } from 'react'

const App = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState("");

  const calculateBMI = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
   
      const bmiValue = w/ (h * h).toFixed(2);
      setBmi(bmiValue);
      if (bmiValue < 18.5) {
        setMessage("You are underweight");
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setMessage("You have a normal weight");
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setMessage("You are overweight");
      } else {
        setMessage("You are obese");
      }
      
    
  };
  return (
    <div className=" text-white h-screen w-screen flex justify-center items-center bg-zinc-700 ">
     <div>
      <h1 className='text-4xl font-semi-bold'>BMI CALCULATOR</h1>
      <div>
        <label htmlFor="weight">Weight (kg)</label>

        <input type="number"  className='bg-gray-800 text-white rounded-md ml-3 mt-4 ' onChange={(e)=>setWeight(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="weight">Height (m)</label>

        <input type="number"  className='bg-gray-800 text-white rounded-md ml-5 mt-4'onChange={(e)=>setHeight(e.target.value)}/>
      </div>
      <div className="flex justify-center items-center">
        <button className='bg-blue-500 mt-6 px-4 py-2 rounded-md ml-5 justify-center items-center hover:bg-blue-700' onClick={calculateBMI}>
          Calculate BMI
        </button>
      </div>
      <div className='mt-6 text-center'>
        <h2> {bmi?message :"calculation pending "}</h2>
      </div>

      
     
    

      </div>
    </div>
  )
}

export default App
