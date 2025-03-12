// 'use client';

// import useSWRInfinite from 'swr/infinite';
// import { createClient } from '@/app/utils/supabase/client';
// import { useEffect } from 'react';
// import { getPokeList } from '../utils/get-poke';
// import useSWR from 'swr';
// import PokeCard from './poke-card';

// // import { getPokeList } from '../utils/get-poke';

// // const getKey = (pageIndex, previousPageData) => {
// //   if (previousPageData && !previousPageData.length) return null;
// //   // if (previousPageData.length) {
// //   //   return previousPageData.at(-1).id;
// //   // }

// //   return `${pageIndex}`;
// // };

// const getKey = (pageIndex, previousPageData) => {
//   // 끝에 도달
//   if (previousPageData && !previousPageData.data) return null;

//   // 첫 페이지, `previousPageData`가 없음
//   if (pageIndex === 0) return `/users?limit=20`;

//   // API의 엔드포인트에 커서를 추가
//   return `/users?cursor=${previousPageData.nextCursor}&limit=20`;
// };

// function extractCursorValue(url: string) {
//   const match = url.match(/cursor=(\d+)/);
//   return match ? Number(match[1]) : 0;
// }

// // async function getPokeList(index: string) {
// //   const supabase = createClient();

// //   const start = index;
// //   console.log(start);

// //   const startIndex = extractCursorValue(index);

// //   const { data, error } = await supabase
// //     .from('poke')
// //     .select()
// //     .gt('id', startIndex) // id >= startId (1 이상)
// //     .order('id', { ascending: true }) // id 기준 오름차순 정렬
// //     .limit(50); // 최대 50개 가져오기

// //   if (error) {
// //     return [];
// //   }

// //   const nextCursor = data.at(-1).id;

// //   return { data, nextCursor };
// // }

// export default function Pokedex() {
//   const { data, error } = useSWR('pokedex', getPokeList);

//   if (error) {
//     return <div>1</div>;
//   }

//   console.log(data);

//   return (
//     <div>
//       {data?.map((d) => (
//         <PokeCard
//           key={d.id}
//           name={d.name_ko}
//           no={d.no}
//           sprite={d.sprite}
//           type1={d.type_1}
//           type2={d.type_2}
//           pokeKey={d.poke_key}
//         >
//           {d.name_ko}
//         </PokeCard>
//       ))}
//     </div>
//   );
// }

// // export default function Pokedex() {
// //   const { data, size, setSize } = useSWRInfinite(getKey, getPokeList);
// //   if (!data) return 'loading';
// //   let totalUsers = 0;
// //   for (let i = 0; i < data.length; i++) {
// //     totalUsers += data[i].data.length;
// //   }

// //   // setSize(size + 7);

// //   // console.log(size);
// //   console.log(data);
// //   return (
// //     <div>
// //       <p>{totalUsers} users listed</p>
// //       {/* <div>{JSON.stringify(data)}</div> */}
// //       {/* {data.map((users, index) => {
// //       // `data`는 각 페이지의 API 응답 배열입니다.
// //       return users.map(user => <div key={user.id}>{user.name}</div>);
// //     })} */}
// //       {data.map(({ data: pokeList }) => {
// //         return pokeList.map((poke) => (
// //           <div key={poke.id} className="flex gap-x-2">
// //             <div>{poke.id}</div>
// //             <div>{poke.ename_ko}</div>
// //             <div>{poke.sprite}</div>
// //           </div>
// //         ));
// //       })}
// //       <button onClick={() => setSize(size + 1)}>Load More</button>
// //     </div>
// //   );
// // }
