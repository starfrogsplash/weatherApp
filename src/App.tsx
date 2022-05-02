import './App.scss';
import { Widget } from './components/Widget';
import { useState } from 'react';
import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;

interface data {
  name: string
  main: Record<string, number>
  sys:Record<string, string | number> 
  weather:Record<string, string | number>[]
  wind: Record<string, number>
}

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState <data>();
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(inputValue)}&appid=${apiKey}&units=metric`);
      setData(res.data);
      setError('')
    } catch (error: any) {
      if(axios.isAxiosError(error) && error?.response?.status === 404){
        setError(error.response.data.message)
      } else {
        setError('something went wrong')
      }
    }
  };

  return (
    <div className="App">
      <form className="flex w-full" onSubmit={e => handleSubmit(e)}>
        <div className="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-slate-200 rounded-lg shadow dark:bg-gray-800">
          <div className="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white">
            Enter City name for weather
          </div>
          <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
            <div className="col-span-2">
              <input
                className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                aria-label="cityInput"
                value={inputValue}
                onChange={e => handleChange(e)}
                required
              ></input>
            </div>
            <div className="col-span-2 text-right">
              <button
                type="submit"
                className={`py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg `}
              >
                Submit
              </button>

              {error && 
               <div role="alert">
               <div className="border text-center border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                 <p>{error}</p>
               </div>
             </div>
            }
             
              <div className="mb-2 mt-3 text-3xl font-light text-center text-gray-800 dark:text-white">
                 { data &&`${data.name} - ${data.sys.country}`}
              </div>
              <div className="text-4xl font-light text-center text-gray-800 dark:text-white">
              </div>
              <Widget data={data}/>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export { App };
