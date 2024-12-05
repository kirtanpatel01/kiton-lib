import React from "react";
import { btnGrp, party } from "../assets";
import { CodeBlock, CodedLine, ParagraphBox } from "../components";

function GetStarted() {
  const para_content = [
    {
      data: `Since, Kiton is a React and Tailwind based component library it’s
          necessary to use React library and configure Tailwind css in it.`,
    },
    {
      data: (
        <div>
          <p className="mb-4">
            Now, to use Kiton’s various components you have to install it using
            below command:{" "}
          </p>
          <CodeBlock language="javascript" code="npm install kiton" />
        </div>
      ),
    },

    {
      data: `After installing you can use Kiton’s components but since it’s using
          Tailwind CSS for styling the colors and other styling will not appear
          or say it’ll not get rendered !`,
    },

    {
      data: (
        <p>
          To get it you need to configure the path to the{" "}
          <span className="text-">Kiton’s</span> components into the{" "}
          <CodedLine text="tailwind.config.js" /> file, so tailwind can scan all
          the components for styling classes.
        </p>
      ),
    },

    {
      data: (
        <div>
          <p className="mb-4">
            You just have to add this line into content object:
          </p>
          <CodeBlock
            language="javascript"
            code={`"./node_modules/kiton/dist/**/*.{js,jsx}"`}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="get-started">
      {/* hero section */}
      <div className="hero flex justify-between">
        <div className=" sm:mt-28">
          <h1 className="flex flex-col text-3xl sm:text-4xl xl:text-5xl font-bold gap-4">
            <span>Hey there,</span>
            <span>
              This is <span className="text-primary">Kiton's</span> Space!
            </span>
          </h1>
          <p className="p-4 sm:p-6 text-xl xl:text-2xl max-w-md xl:max-w-lg leading-7 sm:leading-9 xl:leading-10">
            Where you can find essential, React components designed to help you
            build modern web interfaces quickly and effectively.
          </p>
        </div>
        <img
          src={btnGrp}
          alt="Group of Buttons"
          className="hidden lg:flex max-w-80 xl:max-w-sm"
        />
      </div>

      {/* Installation steps: */}
      <div className="max-w-lg">
        <h2 className="text-2xl xl:text-3xl font-bold underline underline-offset-8 decoration-primary">
          To do so what you need ?
        </h2>
        <ul className="flex flex-col gap-6 mt-4 sm:mt-6 ml-2 sm:ml-4 text-lg xl:text-xl">
          {para_content.map((cont) => (
            <ParagraphBox content={cont.data} />
          ))}
        </ul>
      </div>

      {/* after installation */}
      <div className="my-8">
        <h2 className="text-2xl xl:text-3xl flex items-center gap-4 font-bold">
          <span>Congratulations !</span>
          <img src={party} alt="party_emogi" />
        </h2>

        <ParagraphBox
          content={
            <div >
              <p className="">
                Now, you’re ready to go! What you just have to do is import the
                required component like below in your <CodedLine text=".jsx" />{" "}
                file:
              </p>
              <CodeBlock
                className="my-4"
                language="javascript"
                code={`import { 
      Button, 
      ButtonLoading, 
      ButtonOutline, 
      ButtonPrimary, 
      ButtonSecondary 
    } from "kiton";`}
              />
            </div>
          }
        />

        <ParagraphBox
          content={
            <div className="w-fit">
              <p>
                Example use case of above imported components:
              </p>
              <CodeBlock
                className="my-4"
                language="javascript"
                code={`function App() { 
   return ( 
      <div> 
          <span className="">Kiton's workspace !</span> 
          <div className="flex flex-col gap-5 w-fit m-8"> 
              <Button /> <ButtonPrimary text="Primary" /> 
              <ButtonSecondary text="Secondary" /> 
              <ButtonOutline text="Outline" /> 
              <ButtonLoading text="Loading..." isLoading={true} /> 
          </div> 
     </div> ); 
  }  

export default App;`}
              />
            </div>
          }
        />
      </div>
    </div>
  );
}

export default GetStarted;
