const Moarefi = () => {
  return (
    <div className="flex flex-col w-3/4 h-[300px] justify-center items-center mt-8">
      <h2 className="text-2xl mb-7 font-semibold">چرا دسترسی رو برای خرید انتخاب کنیم؟</h2>
      <div className="w-full flex flex-row text-center justify-between">
        <div className="box-1 h-[200px] w-1/4 flex flex-col items-center justify-center m-3">
          <img src="/src/assets/Icon/icon1.png" alt="" className="" />
          <h4 className="text-sm text-gray-600 font-semibold mt-4">قیمت مناسب با بالاترین کیفیت</h4>
          <p className="text-sm mt-3">
            گروه دسترسی در تلاش است که کالای با کیفیت را با مناسب‌ترین قیمت به
            دست شما برساند.
          </p>
        </div>
        <div className="box-2 w-1/4 flex flex-col items-center justify-center m-3">
          <img src="/src/assets/Icon/icon2.png" alt="" className=""/>
          <h4 className="text-sm text-gray-600 font-semibold mt-4">مشاوره تخصصی برای خرید محصول</h4>
          <p className="text-sm mt-3">
            برای خرید هر محصول با تیم دسترسی در ارتباط باشید تا بهترین انتخاب رو
            انجام دهید.
          </p>
        </div>
        <div className="box-3 w-1/4 flex flex-col items-center justify-center m-3">
          <img src="/src/assets/Icon/icon3.png" alt="" className=""/>
          <h4 className="text-sm text-gray-600 font-semibold mt-4">ارسال سریع</h4>
          <p className="text-sm mt-3">
            ارسال از طریق تیپاکس، پست پیشتاز و پیک موتوری (ویژه تهران) صورت می
            گیرد.
          </p>
        </div>
        <div className="box-4 w-1/4 flex flex-col items-center justify-center m-3">
          <img src="/src/assets/Icon/icon4.png" alt="" className=""/>
          <h4 className="text-sm text-gray-600 font-semibold mt-4">امکان خرید حضوری</h4>
          <p className="text-sm mt-3">
            مشتری گرامی جهت خرید حضوری می‌توانید به آدرس مندرج در پایین سایت
            مراجعه نمایید.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Moarefi;
