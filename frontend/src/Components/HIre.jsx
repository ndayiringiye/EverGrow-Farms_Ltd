import React from "react";
import { Phone, Facebook, Linkedin } from "lucide-react";

const HIre = () => {
  const contacts = [
    {
      id: 1,
      icon: <Phone className="w-6 h-6 text-green-500 dark:text-green-400" />,
      title: "Get via Call",
      description: "+250 788 123 456",
      bg: "from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-900/10",
    },
    {
      id: 2,
      icon: <Facebook className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: "Facebook",
      description: "@evergrowfarms",
      bg: "from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-900/10",
    },
    {
      id: 3,
      icon: <Linkedin className="w-6 h-6 text-sky-600 dark:text-sky-400" />,
      title: "LinkedIn",
      description: "EverGrow Farms Ltd",
      bg: "from-sky-50 to-sky-100 dark:from-sky-900/20 dark:to-sky-900/10",
    },
  ];

  return (
    <section className="">

      <div className="flex justify-between w-[50%] mx-auto absolute top-8 ">
        {contacts.map((item) => (
          <div
            key={item.id}
            className=""
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white dark:bg-gray-800 shadow-md mb-4 group-hover:rotate-12 transition-transform duration-300">
              {item.icon}
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default HIre;
