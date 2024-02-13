import  { useState } from 'react';

const Index = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  const calcBmi = (e) => {
    e.preventDefault();
    if (weight === '' || height === '') {
      alert('Please enter a valid weight and height');
    } else {
      const bmiValue = (weight / (height * height)) * 703;
      setBmi(bmiValue.toFixed(1));
      if (bmiValue < 18.5) {
        setMessage('You are underweight 🙁');
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        setMessage('You are a healthy weight ☺');
      } else {
        setMessage('You are overweight');
      }
    }
  };

  const reload = () => {
    window.location.reload();
  };

  return (
    <div className=" ">
      <div className="">
        <h2 className=" text-center text-3xl font-semibold text-red-400 my-10">BMI Calculator</h2>
        <form onSubmit={calcBmi} className="text-center ">
          <div className="my-4 ">
            <label className="text-2xl text-amber-900 ">Weight (ibs)</label>
            <input
              type="number"
              placeholder="Enter weight value"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="border-[2px] border-red-600 rounded-md ml-6 "
            />
          </div>
          <div className="my-4">
            <label  className="text-2xl text-amber-900 ">Height (in)</label>
            <input
              type="number"
              placeholder="Enter height value"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="border-[2px] border-red-600 rounded-md ml-9"
            />
          </div>
          <div className="flex justify-center items-center gap-4" >
            <button className="py-2 px-6 bg-red-500 text-red-100 rounded-md hover:text-red-500 hover:bg-red-100  transition-colors duration-200" type="submit">
              Submit
            </button>
            <button className="py-2 px-6 text-red-500 bg-red-100 rounded-md hover:text-red-100 hover:bg-red-500 transition-colors duration-200 " onClick={reload} type="button">
              Reload
            </button>
          </div>
          <div className="my-6">
            <h3 className="text-blue-500 font-medium text-2xl" >Your BMI is: {bmi}</h3>
            <p className="text-green-500 font-medium text-2xl">{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Index;
