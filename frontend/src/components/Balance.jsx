const Balance = ({ value }) => {
  return (
    <>
      <div className="flex flex-row justify-start mt-4 ml-5 h-14 font-bold text-xl ">
        Your Balance
        <div className="pl-3">${value}</div>
      </div>
    </>
  );
};
export default Balance;
