import React from "react";
import ButtonComponent from "../button/button_component";

//Libraries
import { AnimatePresence, motion } from "motion/react";

interface SidebarProps {
  isOpen: boolean;
  title?: string;
  children?: React.ReactNode;
  className?: string;
  closeButton?: boolean;
  onCloseButton?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpen = false,
  title,
  children,
  className,
  closeButton,
  onCloseButton = () => {},
}) => {
  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className=" shadow-xl z-50 backdrop-blur-xl min-h-50 min-w-100 bg-gray-50/75 text-black p-6 rounded-2xl absolute top-1/6 md:right-10 sm:right-0"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
        >
          <div className="flex justify-between items-center ">
            <h1 className="text-2xl ">{title}</h1>
            {closeButton && (
              <ButtonComponent style="icon" size="sm" onClick={onCloseButton}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                </svg>
              </ButtonComponent>
            )}
          </div>
          <div className={`${className}`}>{children}</div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default Sidebar;
