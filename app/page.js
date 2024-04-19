// import { fetchLamp } from './services/FetchLamp';
import Todos from './services/FetchLamp';
async function getData() {
  const res = await fetch('http://192.168.10.213/', { cache: 'no-store' });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  const data = await res.json();
  console.log(data);
  return data;
}

// async function getDataLamp() {
//   const res = await fetch('http://192.168.10.213/', { cache: 'no-store' });
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data');
//   }
//   const data = await res.json();
//   console.log(data);
// }

export default async function Page() {
  const data = await getData();
  // const { data, isLoading, isError } = fetchLamp();
  // console.log(data);

  return (
    <main>
      {/* <button onClick={getDataLamp()}>Refresh</button> */}
      <p>{data.relay1}</p>
      <p>{data.relay2}</p>
      <p>{data.relay3}</p>
      <p>{data.relay4}</p>
      {/* <Todos /> */}
    </main>
  );
}
