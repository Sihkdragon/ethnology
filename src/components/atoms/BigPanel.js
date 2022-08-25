const BigPanel = ({ children }) => {
  return (
    <div className="bg-white rounded-md border-4 my-shadow  border-choc-dark w-full h-full overflow-hidden">
      {children}
    </div>
  );
};

export default BigPanel;
