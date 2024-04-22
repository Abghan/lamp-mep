'use client';
import React, { useState } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [data2, setData2] = useState(null);
  const [isLoading2, setIsLoading2] = useState(false);
  const [error2, setError2] = useState(null);

  const fetchData = async (url) => {
    try {
      setIsLoading(true);
      const response = await fetch(url, { cache: 'no-store' });
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await response.json();
      setData(jsonData);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  const fetchData2 = async (url) => {
    try {
      setIsLoading2(true);
      const response = await fetch(url, { cache: 'no-store' });
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await response.json();
      setData2(jsonData);
      setIsLoading2(false);
    } catch (error) {
      setError2(error);
      setIsLoading2(false);
    }
  };

  const handleButtonClick = async () => {
    await fetchData('api/workshop/');
    await fetchData2('api/dev/');
  };

  return (
    <div className="App">
      <div className="container mx-auto">
        <div className="flex items-center justify-center m-4">
          <h1 className="font-bold text-4xl tracking-wide mt-1 font-sans">MEP LAMP</h1>
        </div>

        <div className="flex items-center justify-center m-4">
          <button className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded" onClick={() => handleButtonClick()} disabled={isLoading}>
            Sync Data
          </button>
        </div>

        <div className="flex lg:flex-row flex-col justify-center m-4">
          {error && <div>Error: {error.message}</div>}
          {data && (
            <div className="flex flex-col lg:w-1/4 md:w-1/2  items-center justify-center p-4 m-4 border-4 rounded ">
              <div className="my-2">
                <h2 className="font-bold text-3xl tracking-wide mt-1 font-sans">Workshop</h2>
              </div>
              <div className="my-2">
                <button
                  className={` ${data.relay1 ? `bg-green-500 hover:bg-green-700` : `bg-red-500 hover:bg-red-700`}
              bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded`}
                  onClick={() => fetchData('api/workshop/1')}
                  disabled={isLoading}
                >
                  Relay 1
                </button>
              </div>
              <div className="my-2">
                <button
                  className={` ${data.relay2 ? `bg-green-500 hover:bg-green-700` : `bg-red-500 hover:bg-red-700`}
              bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded`}
                  onClick={() => fetchData('api/workshop/2')}
                  disabled={isLoading}
                >
                  Relay 2
                </button>
              </div>
              <div className="my-2">
                <button
                  className={` ${data.relay3 ? `bg-green-500 hover:bg-green-700` : `bg-red-500 hover:bg-red-700`}
              bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded`}
                  onClick={() => fetchData('api/workshop/3')}
                  disabled={isLoading}
                >
                  Relay 3
                </button>
              </div>
              <div className="my-2">
                <button
                  className={` ${data.relay4 ? `bg-green-500 hover:bg-green-700` : `bg-red-500 hover:bg-red-700`}
              bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded`}
                  onClick={() => fetchData('api/workshop/4')}
                  disabled={isLoading}
                >
                  Relay 4
                </button>
              </div>
              <div className="my-2">
                <button
                  className={`bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded`}
                  onClick={() => fetchData('api/workshop/0')}
                  disabled={isLoading}
                >
                  TURN OFF ALL
                </button>
              </div>
            </div>
          )}

          {error2 && <div>Error: {error2.message}</div>}
          {data2 && (
            <div className="flex flex-col lg:w-1/4 md:w-1/2 items-center justify-center p-4 m-4 border-4 rounded ">
              <div className="my-2">
                <h2 className="font-bold text-3xl tracking-wide mt-1 font-sans">Dev Cave</h2>
              </div>
              <div className="my-2">
                <button
                  className={` ${data2.relay1 ? `bg-green-500 hover:bg-green-700` : `bg-red-500 hover:bg-red-700`}
              bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded`}
                  onClick={() => fetchData2('api/dev/1')}
                  disabled={isLoading2}
                >
                  Relay 1
                </button>
              </div>
              <div className="my-2">
                <button
                  className={` ${data2.relay2 ? `bg-green-500 hover:bg-green-700` : `bg-red-500 hover:bg-red-700`}
              bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded`}
                  onClick={() => fetchData2('api/dev/2')}
                  disabled={isLoading2}
                >
                  Relay 2
                </button>
              </div>
              <div className="my-2">
                <button className={`bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded`} onClick={() => fetchData('api/dev/0')} disabled={isLoading2}>
                  TURN OFF ALL
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyComponent;
