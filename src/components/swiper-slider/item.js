const Item = ({ children, className }) => {
  return (
    <div
      className={`bg-green-500 min-h-32 min-w-32 rounded-lg z-30 text-lg md:min-h-32 md:min-w-24 ${className}`}
    >
      {children}
    </div>
  );
};
export { Item };
