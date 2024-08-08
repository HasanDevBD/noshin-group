const Item = ({ children, className }) => {
  return (
    <div
      className={`relative bg-green-500 min-h-32 min-w-28 rounded-lg z-30 text-lg md:min-h-32 md:min-w-24 ${className}`}
    >
      {children}
    </div>
  );
};
export { Item };
