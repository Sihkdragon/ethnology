const BigPanel = ({ children }) => {
  return (
    <div className="bg-white rounded-md border-4 my-shadow border-choc-dark w-full h-52 sm:h-full sm:overflow-hidden">
      {children}
    </div>
  );
};

export default BigPanel;
