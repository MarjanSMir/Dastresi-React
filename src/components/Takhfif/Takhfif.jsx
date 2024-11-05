const Takhfif = () => {
  return (
    <div className="bg-gray-300 w-3/4 h-[800px] flex m-3 p-8 rounded-2xl flex-col">
      
      <h1 className="text-gray-600 text-4xl"><span className="text-red-500 text-4xl">%</span>تخفیف‌های روزانه دسترسی</h1>
      <div className="box flex justify-center items-center w-full h-[790px]">
        <div className="box-1 flex items-center justify-center w-4/6 h-[600px]">
          <div className="product w-1/2 h-full bg-white ml-2 rounded-2xl"></div>
          <div className="product w-1/2 h-full bg-white ml-2 rounded-2xl"></div>
        </div>
        <div className="box-2 flex flex-col justify-between items-center w-2/6 h-[600px]">
          <div className="small-product w-full h-[190px] mr-4 bg-white rounded-2xl"></div>
          <div className="small-product w-full h-[190px] mr-4 bg-white rounded-2xl"></div>
          <div className="small-product w-full h-[190px] mr-4 bg-white rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
};
export default Takhfif;
