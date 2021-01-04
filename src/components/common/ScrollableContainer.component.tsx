import React from "react";

interface ScrollableContainerProps {
  classNames?: string[];
}

const ScrollableContainer: React.FC<ScrollableContainerProps> = ({
  children,
  classNames = [],
}) => {
  return (
    <section className="chatsContainer flex-1 relative">
      <div
        className="outerContainer absolute top-0 
                      left-0 w-full h-full z-40 flex flex-col"
      >
        <div
          className="innerContainer flex
                          flex-col flex-grow min-h-0"
        >
          <div
            className={
              "scrollableContainer scrollbar-master  " +
              " flex-grow overflow-y-auto min-h-0  " +
              "  " +
              classNames.join(" ")
            }
          >
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};
export default ScrollableContainer;
