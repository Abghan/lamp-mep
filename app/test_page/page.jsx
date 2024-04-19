// 'use client';
// import React, { useState, useEffect } from 'react';

// function MyComponent() {
//   const [data, setData] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setIsLoading(true);
//         const response = await fetch('/api/lamp_mep', { cache: 'no-store' });
//         if (!response.ok) {
//           throw new Error('Failed to fetch data');
//         }
//         const jsonData = await response.json();
//         setData(jsonData);
//         setIsLoading(false);
//       } catch (error) {
//         setError(error);
//         setIsLoading(false);
//       }
//     };

//     // Fetch data initially when component mounts
//     fetchData();

//     // Fetch data every 10 seconds
//     const intervalId = setInterval(fetchData, 10000);

//     // Cleanup function to clear interval when component unmounts
//     return () => clearInterval(intervalId);
//   }, []); // Empty dependency array ensures this effect runs only once

//   return (
//     <div>
//       <h1>Data Fetcher</h1>
//       {isLoading && <div>Loading...</div>}
//       {error && <div>Error: {error.message}</div>}
//       {data && (
//         <div>
//           {/* Render fetched data here */}
//           <pre>{JSON.stringify(data, null, 2)}</pre>
//         </div>
//       )}
//     </div>
//   );
// }

// export default MyComponent;

'use client';
import React, { useState } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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

  return (
    <div>
      <h1>Lamp MEP</h1>
      <p>
        <button onClick={() => fetchData('api/lamp_mep/')} disabled={isLoading}>
          Sync Data
        </button>
      </p>
      {/* <p>
        <button onClick={() => fetchData('api/lamp_mep/1')} disabled={isLoading}>
          Relay 1
        </button>
      </p>
      <p>
        <button onClick={() => fetchData('api/lamp_mep/2')} disabled={isLoading}>
          Relay 2
        </button>
      </p>
      <p>
        <button onClick={() => fetchData('api/lamp_mep/3')} disabled={isLoading}>
          Relay 3
        </button>
      </p>
      <p>
        <button onClick={() => fetchData('api/lamp_mep/4')} disabled={isLoading}>
          Relay 4
        </button>
      </p> */}

      {error && <div>Error: {error.message}</div>}
      {data && (
        <div>
          {/* Render fetched data here */}
          {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
          {/* <p>{data.relay1}</p>
          <p>{data.relay2}</p>
          <p>{data.relay3}</p>
          <p>{data.relay4}</p> */}
          <p>
            <button onClick={() => fetchData('api/lamp_mep/1')} disabled={isLoading}>
              Relay 1
            </button>{' '}
            {data.relay1 ? 'On' : 'Off'}
          </p>
          <p>
            <button onClick={() => fetchData('api/lamp_mep/2')} disabled={isLoading}>
              Relay 2
            </button>{' '}
            {data.relay2 ? 'On' : 'Off'}
          </p>
          <p>
            <button onClick={() => fetchData('api/lamp_mep/3')} disabled={isLoading}>
              Relay 3
            </button>{' '}
            {data.relay3 ? 'On' : 'Off'}
          </p>
          <p>
            <button onClick={() => fetchData('api/lamp_mep/4')} disabled={isLoading}>
              Relay 4
            </button>{' '}
            {data.relay4 ? 'On' : 'Off'}
          </p>
        </div>
      )}
    </div>
  );
}

export default MyComponent;
