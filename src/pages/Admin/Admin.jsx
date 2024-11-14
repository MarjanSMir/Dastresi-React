const Admin = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-slate-300">
      <h1 className="text-4xl m-9">پنل ادمین</h1>
      <button className="w-[150px] h-[50px] rounded text-white bg-rose-900 m-2">
        خانه
      </button>
      <div className="w-6/12 h-28 border border-solid m-3 rounded border-rose-900">
        <p className="text-center font-normal">بخش محصولات تخفیف دار</p>
        <div className="flex justify-center items-start">
          <button className="w-[150px] h-[50px] rounded text-white bg-lime-600 m-4">
            افزودن محصول
          </button>
          <button className="w-[150px] h-[50px] rounded  text-white bg-cyan-600 m-4">
            مشاهده محصولات
          </button>
          <button className="w-[150px] h-[50px] rounded  text-white bg-yellow-600 m-4">
            ویرایش محصول
          </button>
          <button className="w-[150px] h-[50px] rounded  text-white bg-red-600 m-4">
            حذف محصول
          </button>
        </div>
      </div>
      <div className="w-6/12 h-28 border border-solid m-3 rounded border-rose-900">
        <p className="text-center font-normal">بخش محصولات پر فروش</p>
        <div className="  flex justify-center items-start">
          <button className="w-[150px] h-[50px] rounded  text-white bg-lime-600 m-4">
            افزودن محصول
          </button>
          <button className="w-[150px] h-[50px] rounded  text-white bg-cyan-600 m-4">
            مشاهده محصولات
          </button>
          <button className="w-[150px] h-[50px] rounded  text-white bg-yellow-600 m-4">
            ویرایش محصول
          </button>
          <button className="w-[150px] h-[50px] rounded  text-white bg-red-600 m-4">
            حذف محصول
          </button>
        </div>
      </div>
      <div className="w-6/12 h-28 border border-solid m-3 rounded border-rose-900">
        <p className="text-center font-normal">بخش محصولات موجود شده</p>
        <div className="  flex justify-center items-start">
          <button className="w-[150px] h-[50px] rounded  text-white bg-lime-600 m-4">
            افزودن محصول
          </button>
          <button className="w-[150px] h-[50px] rounded  text-white bg-cyan-600 m-4">
            مشاهده محصولات
          </button>
          <button className="w-[150px] h-[50px] rounded  text-white bg-yellow-600 m-4">
            ویرایش محصول
          </button>
          <button className="w-[150px] h-[50px] rounded  text-white bg-red-600 m-4">
            حذف محصول
          </button>
        </div>
      </div>
      <div className="w-6/12 h-28 border border-solid m-3 rounded border-rose-900">
        <p className="text-center font-normal">بخش دسته بندی‌ها</p>
        <div className="  flex justify-center items-start">
          <button className="w-[150px] h-[50px] rounded  text-white bg-lime-600 m-4">
            افزودن دسته‌بندی
          </button>
          <button className="w-[150px] h-[50px] rounded  text-white bg-cyan-600 m-4">
            مشاهده دسته‌بندی
          </button>
          <button className="w-[150px] h-[50px] rounded  text-white bg-yellow-600 m-4">
            ویرایش دسته‌بندی
          </button>
          <button className="w-[150px] h-[50px] rounded  text-white bg-red-600 m-4">
            حذف دسته‌بندی
          </button>
        </div>
      </div>
      <div className="w-6/12 h-28 border border-solid m-3 rounded border-rose-900">
        <p className="text-center font-normal">بخش برندها</p>
        <div className="  flex justify-center items-start">
          <button className="w-[150px] h-[50px] rounded  text-white bg-lime-600 m-4">
            افزودن برند
          </button>
          <button className="w-[150px] h-[50px] rounded  text-white bg-cyan-600 m-4">
            مشاهده برندها
          </button>
          <button className="w-[150px] h-[50px] rounded  text-white bg-yellow-600 m-4">
            ویرایش برند
          </button>
          <button className="w-[150px] h-[50px] rounded  text-white bg-red-600 m-4">
            حذف برند
          </button>
        </div>
      </div>
    </div>
  );
};
export default Admin;
