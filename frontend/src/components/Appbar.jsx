const AppBar = () => {
  return (
    <>
      <div className="shadow flex justify-between h-14">
        <div className="flex flex-col justify-center text-2xl h-full ml-5 my-3 font-bold">
          PayTM App
        </div>
        <div className="flex">
          <div className="flex flex-col justify-center h-full mr-2">Hello</div>
          <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
            <div className="flex flex-col justify-center h-full text-xl">U</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AppBar;
