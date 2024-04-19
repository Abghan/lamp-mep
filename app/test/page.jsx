'use client';

import { signal } from '@preact/signals';
import React, { useEffect } from 'react';

const relay = signal({ relay1: 0, relay2: 0, relay3: 0, relay4: 0 });

// function fetchLamp() {
//   // Define the fetcher function to fetch data from the API
//   const fetcher = (url) => fetch(url).then((res) => res.json());
//   const { data, error } = useSWR('/api/lamp_mep', fetcher);
//   relay.value = data;
// }

// async function getData() {
//   const res = await fetch('http://192.168.10.213/', { cache: 'no-store' });

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data');
//   }
//   const data = await res.json();
//   console.log(data);
//   relay.value = data;
//   //   return data;
// }

export default async function Page() {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/lamp_mep', { cache: 'no-store' });
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await response.json();
      relay.value = jsonData;
    };

    // Fetch data initially when component mounts
    fetchData();

    // Fetch data every 10 seconds
    const intervalId = setInterval(fetchData, 10000);

    // Cleanup function to clear interval when component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div>
      <div>Relay Info</div>
      <p>{relay.value.relay1}</p>
      <p>{relay.value.relay2}</p>
      <p>{relay.value.relay3}</p>
      <p>{relay.value.relay4}</p>
      {/* <button onClick={await getData()}>Fetch Data</button> */}
    </div>
  );
}
