import { Sidebar } from "./components";
import { Outlet } from "react-router-dom";

const App = () => {
  console.log("come in App.jsx")
  //   const codeData = [
  //     {
  //       lan: "javascript",
  //       code: `<div>
  //     <span className="">Kiton's workspace !</span>
  //     <div className="flex flex-col gap-5 w-fit m-8">
  //         <Button />
  //         <ButtonPrimary text="Primary" />
  //         <ButtonSecondary text="Secondary" />
  //         <ButtonOutline text="Outline" />
  //         <ButtonLoading text="Loading..." isLoading={true} />
  //     </div>
  // </div>`,
  //     },

  //     {
  //       lan: "css",
  //       code: `.custom-button {
  //   padding: 0.5rem 1rem; /* px-4 py-2 */
  //   font-weight: 500; /* font-medium */
  //   background-color: #4C24DA; /* bg-[#4C24DA] */
  //   border-radius: 9999px; /* rounded-full */
  //   box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* shadow-md */
  //   height: fit-content; /* h-fit */
  //   width: fit-content; /* w-fit */
  //   color: white; /* text-white */
  // }`,
  //     },

  //     {
  //       lan: "html",
  //       code: `<!DOCTYPE html>
  // <html lang="en">
  // <head>
  //   <meta charset="UTF-8">
  //   <meta name="viewport" content="width=device-width, initial-scale=1.0">
  //   <title>Button Styling</title>
  //   <style>
  //     .custom-button {
  //       padding: 0.5rem 1rem; /* px-4 py-2 */
  //       font-weight: 500; /* font-medium */
  //       background-color: #4C24DA; /* bg-[#4C24DA] */
  //       border-radius: 9999px; /* rounded-full */
  //       box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* shadow-md */
  //       height: fit-content; /* h-fit */
  //       width: fit-content; /* w-fit */
  //       color: white; /* text-white */
  //     }
  //   </style>
  // </head>
  // <body>
  //   <button class="custom-button">Click Me</button>
  // </body>
  // </html>
  // `,
  //     },
  //   ];

  return (
    <div className="app flex flex-col sm:flex-row font-sans gap-3 sm:gap-6 bg-[#D7E5FF] dark:bg-darkBase dark:text-white duration-150">
      <Sidebar />
      <div className="flex-1 px-2 pt-6 ">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
