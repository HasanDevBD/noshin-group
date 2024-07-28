import React from "react";

export default function LargeRightBox({ children }) {
  const childrenArray = React.Children.toArray(children);
  const isOdd = childrenArray.length % 2 !== 0;

  return (
    <div className="sliders h-[140px] w-full md:h-full row-span-3 col-span-1 overflow-x-auto md:overflow-y-auto flex md:grid grid-cols-2 md:grid-cols-2 gap-1 justify-evenly">
      {React.Children.map(childrenArray, (child, index) =>
        React.cloneElement(child, {
          className: `${child.props.className} ${
            isOdd && index === childrenArray.length - 1
              ? "w-full md:col-span-2"
              : ""
          }`,
        })
      )}
    </div>
  );
}
