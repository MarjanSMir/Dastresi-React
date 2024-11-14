const Footer = () => {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center bg-gray-300">
      <div className="flex flex-row w-full h-20 bg-gray-400 text-white justify-center items-center m-1">
        <span className="ml-6">021-33902646</span>
        <span className="ml-6">
          شنبه تا چهارشنبه از ساعت 10 صبح الی ساعت 18 پنجشنبه‌ها از 10 صبح الی
          ساعت 16
        </span>
        <span className="ml-6">
          تهران - میدان امام خمینی - پاساژ لباف - همکف - پلاک 3 - فروشگاه بدیع
        </span>
        <a href="#Header">
          <button className="ml-6 w-20 h-10 bg-white text-center text-black">
            برو به بالا
          </button>
        </a>
      </div>
      <div className="flex flex-row justify-around items-center">
        <img src="/src/assets/logo.png" alt="" className=" h-24 m-9" />
        <div className="w-[600px] flex flex-col justify-center m-8">
          <h3 className="font-bold mb-1">فروشگاه اینترنتی دسترسی</h3>
          <p className="text-justify">
            فروشگاه دسترسی فعالیت خود را از سال 1389 به صورت فروش فیزیکی کالا در
            حوزه لوازم جانبی کامپیوتر و موبایل در تهران شروع کرد و از سال 1398
            از طریق پیج اینستاگرام وارد فروش آنلاین شد و به خاطر ارائه کالای
            اصلی و مشاوره های دقیق در بازه بسیار کوتاهی توانست اعتماد بسیاری از
            مشتریانش را جلب کند و سرانجام در سال 1399 فروش از طریق سایت را هم به
            فعالیت های خود اضافه کرد تا اینکه بتواند با بررسی دقیق کالاها انتخاب
            صحیح شما را به ارمغان آورد. و امروز دسترسی فعالیت خود را در زمینه
            آداپتور موبایل، کابل شارژ، پاوربانک، ساعت هوشمند، هندزفری و هدست،
            لوازم گیمینگ، باتری و شارژر، لوازم شبکه، تجهیزات ذخیره سازی، گیرنده
            دیجیتال و هزاران گجت جذاب ادامه میدهد.
          </p>
        </div>
        <div className="w-[200px] mr-9">
          <h4 className="font-bold mb-4">دسترسی سریع</h4>
          <ul>
            <li>باشگاه مشتریان</li>
            <li>سوالات متداول</li>
            <li>بلاگ</li>
            <li>شرایط و قوانین</li>
            <li>ارتباط با ما</li>
            <li>درباره ما</li>
          </ul>
        </div>
        <img src="/src/assets/logo-2.png" alt="" className="w-36 h-36 m-9" />
      </div>
      <div className="bg-blue-700 text-white w-full h-8 text-center">
        <p>تمامی حقوق این سایت محفوظ و متعلق به فروشگاه دسترسی می باشد.</p>
      </div>
    </div>
  );
};
export default Footer;
