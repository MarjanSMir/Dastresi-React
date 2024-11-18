import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Admin = () => {
  const navigate = useNavigate();
  const changeRoute = () => {
    navigate("/");
  };
  const createProduct = () => {
    navigate("/Product/create");
  };
  const updateProduct = () => {
    navigate("/Product/update");
  };
  const deleteProduct = () => {
    navigate("/Product/delete");
  };
  const createDastebandi = () => {
    navigate("/Dastebandi/Create");
  };
  const deleteDastebandi = () => {
    navigate("/Dastebandi/delete");
  };
  const updateDastebandi = () => {
    navigate("/Dastebandi/update");
  };
  const createPorforosh = () => {
    navigate("/PorForosh/Create");
  };
  const deletePorforosh = () => {
    navigate("/PorForosh/Delete");
  };
  const updatePorforosh = () => {
    navigate("/PorForosh/Update");
  };
  const createMojodi = () => {
    navigate("/Mojodi/Create");
  };
  const deleteMojodi = () => {
    navigate("/Mojodi/Delete");
  };
  const updateMojodi = () => {
    navigate("/Mojodi/Update");
  };
  const createBrands = () => {
    navigate("/Brands/Create");
  };
  const deleteBrands = () => {
    navigate("/Brands/Delete");
  };
  const updateBrands = () => {
    navigate("/Brands/Update");
  };
  return (
    <div className="flex flex-col justify-center items-center bg-slate-300">
      <h1 className="text-4xl m-9">پنل ادمین</h1>
      <button
        className="w-[150px] h-[50px] rounded text-white bg-rose-900 m-2"
        onClick={changeRoute}
      >
        خانه
      </button>
      <div className="w-6/12 h-28 border border-solid m-3 rounded border-rose-900">
        <p className="text-center font-normal">بخش محصولات تخفیف دار</p>
        <div className="flex justify-center items-start">
          <button
            className="w-[150px] h-[50px] rounded text-white bg-lime-600 m-4"
            onClick={createProduct}
          >
            افزودن محصول
          </button>
          <button className="w-[150px] h-[50px] rounded  text-white bg-cyan-600 m-4">
            <Link to={"http://localhost:3000/Product"}>
              مشاهده محصولات تخفیف دار
            </Link>
          </button>
          <button
            className="w-[150px] h-[50px] rounded  text-white bg-yellow-600 m-4"
            onClick={updateProduct}
          >
            ویرایش محصول
          </button>
          <button
            className="w-[150px] h-[50px] rounded  text-white bg-red-600 m-4"
            onClick={deleteProduct}
          >
            حذف محصول
          </button>
        </div>
      </div>
      <div className="w-6/12 h-28 border border-solid m-3 rounded border-rose-900">
        <p className="text-center font-normal">بخش محصولات پر فروش</p>
        <div className="  flex justify-center items-start">
          <button
            className="w-[150px] h-[50px] rounded  text-white bg-lime-600 m-4"
            onClick={createPorforosh}
          >
            افزودن محصول
          </button>
          <button className="w-[150px] h-[50px] rounded  text-white bg-cyan-600 m-4">
            <Link to={"http://localhost:3000/ProductP"}>مشاهده محصولات </Link>
          </button>
          <button
            className="w-[150px] h-[50px] rounded  text-white bg-yellow-600 m-4"
            onClick={updatePorforosh}
          >
            ویرایش محصول
          </button>
          <button
            className="w-[150px] h-[50px] rounded  text-white bg-red-600 m-4"
            onClick={deletePorforosh}
          >
            حذف محصول
          </button>
        </div>
      </div>
      <div className="w-6/12 h-28 border border-solid m-3 rounded border-rose-900">
        <p className="text-center font-normal">بخش محصولات موجود شده</p>
        <div className="  flex justify-center items-start">
          <button
            className="w-[150px] h-[50px] rounded  text-white bg-lime-600 m-4"
            onClick={createMojodi}
          >
            افزودن محصول
          </button>
          <button className="w-[150px] h-[50px] rounded  text-white bg-cyan-600 m-4">
            <Link to={"http://localhost:3000/ProductM"}>مشاهده محصولات</Link>
          </button>
          <button
            className="w-[150px] h-[50px] rounded  text-white bg-yellow-600 m-4"
            onClick={updateMojodi}
          >
            ویرایش محصول
          </button>
          <button
            className="w-[150px] h-[50px] rounded  text-white bg-red-600 m-4"
            onClick={deleteMojodi}
          >
            حذف محصول
          </button>
        </div>
      </div>
      <div className="w-6/12 h-28 border border-solid m-3 rounded border-rose-900">
        <p className="text-center font-normal">بخش دسته بندی‌ها</p>
        <div className="  flex justify-center items-start">
          <button
            className="w-[150px] h-[50px] rounded  text-white bg-lime-600 m-4"
            onClick={createDastebandi}
          >
            افزودن دسته‌بندی
          </button>
          <button className="w-[150px] h-[50px] rounded  text-white bg-cyan-600 m-4">
            <Link to={"http://localhost:3000/Dastebandi"}>
              مشاهده دسته بندی
            </Link>
          </button>
          <button
            className="w-[150px] h-[50px] rounded  text-white bg-yellow-600 m-4"
            onClick={updateDastebandi}
          >
            ویرایش دسته‌بندی
          </button>
          <button
            className="w-[150px] h-[50px] rounded  text-white bg-red-600 m-4"
            onClick={deleteDastebandi}
          >
            حذف دسته‌بندی
          </button>
        </div>
      </div>
      <div className="w-6/12 h-28 border border-solid m-3 rounded border-rose-900">
        <p className="text-center font-normal">بخش برندها</p>
        <div className="  flex justify-center items-start">
          <button
            className="w-[150px] h-[50px] rounded  text-white bg-lime-600 m-4"
            onClick={createBrands}
          >
            افزودن برند
          </button>
          <button className="w-[150px] h-[50px] rounded  text-white bg-cyan-600 m-4">
            <Link to={"http://localhost:3000/Brands"}> مشاهده برندها</Link>
          </button>
          <button className="w-[150px] h-[50px] rounded  text-white bg-yellow-600 m-4" onClick={updateBrands}>
            ویرایش برند
          </button>
          <button className="w-[150px] h-[50px] rounded  text-white bg-red-600 m-4" onClick={deleteBrands}>
            حذف برند
          </button>
        </div>
      </div>
    </div>
  );
};
export default Admin;
