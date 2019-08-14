// window.addEventListener('load', () => {
//   sendMsEvent('paid_enterToLanding', typeof userData !== 'undefined' ? userData : {});
//
//   if (userData) {
//     Object.keys(userData).forEach((f)=> {
//       let input = document.querySelector('#' + f);
//       if (f && f !== 'phone' && input) {
//         input.value = userData[f];
//       }
//     });
//   }
//
//   setTimeout(
//     () => {
//       if (typeof window.msMaskedObject !=='undefined' && userData && userData.phone) {
//         window.msMaskedObject.setPhone(userData.phone);
//       }
//     },500);
// });
//
// function sendMsEvent(id, clientData) {
//   document.dispatchEvent(new CustomEvent(id, {detail: clientData}));
// }
//
// export {
//   sendMsEvent
// };
