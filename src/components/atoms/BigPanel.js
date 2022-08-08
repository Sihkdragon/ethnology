const BigPanel = ({ children }) => {
  return (
    <div className="bg-white rounded-md border-2 border-yellow-900 w-[550px] h-[340px]">
      {children}
    </div>
  );
};

export default BigPanel;
