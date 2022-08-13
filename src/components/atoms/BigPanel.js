const BigPanel = ({ children }) => {
  return (
    <div className="bg-white rounded-md border-4  shadow-inner border-choc-dark w-full h-full overflow-hidden">
      {children}
    </div>
  );
};

export default BigPanel;
