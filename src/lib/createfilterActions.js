// import { startLoading, finishLoading } from '../modules/loading';
// import { getUser } from './api';
// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { day } from '../modules/filter';

// const createfilterActions = (type, items) => {
//   const user = useSelector((state) => state.user.user);

//   const times = useMemo(() => {
//     const today = parseInt(Date.now() / 1000);
//     return today;
//   }, []);

//   return null;
//   return () => {
//     if (type === FILTER_DAY) {
//       const days = [...items].sort((a, b) => b.time - a.time)
//       const arr =[]
//       for (let i = 0; i < days.length; i++){
//         if (times - day[i].time <= 86400) {
//           arr.push(day[i])
//         }
//       }
//       days.map(day => day.time < 86400)
//       return dispatch({
//         type: day,
//         payload: days
//       });
//     } else if (type ==== )

//   }
// };

// export default createfilterActions;
