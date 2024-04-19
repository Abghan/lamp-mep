// import UseSWR from 'swr';
// // import { fetcher } from '../lib/utils';

// const fetcher = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/comments');
//   const data = await res.json();
//   return data;
// };

// export function fetchLamp() {
//   const { data, error } = UseSWR(`comments`, fetcher, {
//     refreshInterval: Number(10000),
//   });
//   return {
//     data: data,
//     isLoading: !error && !data,
//     isError: error,
//   };
// }
'use client';
import useSWR from 'swr';

function Todos() {
  // Define the fetcher function to fetch data from the API
  const fetcher = (url) => fetch(url).then((res) => res.json());

  // Use SWR to fetch data from the API
  const { data, error } = useSWR('http://192.168.10.213/', fetcher);

  if (error) return <div>Failed to load todos</div>;
  if (!data) return <div>Loading todos...</div>;

  return (
    <div>
      <h1>Todos</h1>
      <p>{data}</p>
      {/* <p>{data.relay1}</p>
      <p>{data.relay2}</p>
      <p>{data.relay3}</p>
      <p>{data.relay4}</p> */}
    </div>
  );
}

export default Todos;
