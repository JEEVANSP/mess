// document.addEventListener("DOMContentLoaded", function () {
//   const loginButton = document.getElementById("new-tab");

//   loginButton.addEventListener("click", function () {
//       // Open a new window
//       const newWindow = window.open("./login.html", "_blank");

//       // Check if the new window was opened successfully
//       if (newWindow) {
//           // After a short delay, add the "active-popup" class to the new window's body
//           newWindow.addEventListener("load", function () {
//             const newWindowBody = newWindow.document.body;
//             newWindowBody.classList.add("active-popup");
//         });
//     } else {
//         alert("Failed to open the new window.");
//     }
// });
// });