import React from "react";
import { Link } from "react-router-dom";

function Components() {

  const compoData = [
    {
      title: "Buttons",
      link: "/kiton-lib/components/buttons",
      compos: [
        {
          head: "Button",
          link: '/kiton-lib/components/button'
        },
        {
          head: "ButtonPrimary",
          link: '/kiton-lib/components/button-primary'
        },
        {
          head: "ButtonSecondary",
          link: '/kiton-lib/components/button-secondary'
        },
        {
          head: "ButtonOutline",
          link: '/kiton-lib/components/button-outline'
        },
        {
          head: "ButtonLoading",
          link: '/kiton-lib/components/button-loa'
        },
      ]
    },
    
  ]

  return (
    <div className="min-h-[calc(100vh-1.5rem)] mt-16 sm:mt-0">
      <h1 className="text-4xl font-bold">Components</h1>
      <ul className=" grid min-[375px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 lg:gap-16 mt-6 lg:mt-8 ml-0 lg:mx-8">
        {
          compoData.map((item) => (
            <Link 
            key={item.title}
            to={item.link}
            className="w-fit h-fit flex flex-col gap-3 hover:shadow-custom-glow hover:dark:shadow-custom-glow-dark  border border-primary bg-white bg-opacity-0 hover:bg-opacity-5 hover:opacity-100 opacity-75 p-4 lg:p-6 rounded-xl justify-self-center">
              <span className="text-2xl font-bold underline decoration-primary underline-offset-4 decoration-1">{item.title}</span>
              {
                item.compos && (
                  <ul className="flex flex-col gap-2">
                    {item.compos.map((subItem) => (
                      <Link
                      key={subItem.head}
                      to={subItem.link}
                      className="flex items-center gap-2"
                      >
                        <span className="p-[1.8px] bg-primary"></span>
                        <span className="hover:underline decoration-primary decoration-3 underline-offset-4">{subItem.head}</span>
                      </Link>
                    ))}
                  </ul>
                )
              }
            </Link>
          ))
        }
      </ul>
    </div>
  );
}

export default Components;
