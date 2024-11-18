import { useState } from "react";
import useSWR, { mutate } from "swr";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const fetcher = (url) => fetch(url).then((res) => res.json());

const EditProduct = () => {
  const navigate = useNavigate();
  const changeRoute = () => {
    navigate("/");
  };
  const [formData, setFormData] = useState({
    id: "",
    image: "",
    alt: "",
  });
  const [message, setMessage] = useState("");
  const Server = "http://localhost:3000/Brands";
  const { data, error } = useSWR(Server, fetcher);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleEdit = async (e) => {
    e.preventDefault();
  
    if (!formData.id) {
      setMessage("لطفا آیدی آیتم مورد نظر را وارد کنید");
      return;
    }
  
    const confirmResult = await Swal.fire({
      title: "میخواهید تغییرات را ذخیره کنید؟",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "بله",
      denyButtonText: `خیر`,
    });
  
    if (!confirmResult.isConfirmed) {
      Swal.fire("تغییرات ذخیره نشد", "", "info");
      return;
    }
  
    try {
      const currentProduct = data?.find((product) => product.id === formData.id);
  
      if (!currentProduct) {
        setMessage("آیتم مورد نظر یافت نشد.");
        return;
      }
  
      const updatedProduct = {
        ...currentProduct,
        ...Object.fromEntries(
          Object.entries(formData).filter(([key, value]) => value && key !== "id")
        ),
      };
  
      const response = await fetch(`${Server}/${formData.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      });
  
      if (!response.ok) {
        throw new Error("داده بروزرسانی نشد، لطفا دوباره تلاش کنید.");
      }
  
      mutate(Server);
  
      Swal.fire("ذخیره شد!", "", "success");
      setMessage(`محصول مورد نظر ویرایش شد.`);
      setFormData({ id: "", name: "", image: "", model: "", price: "" });
    } catch (err) {
      setMessage(err.message);
    }
  };
  

  return (
    <div className="w-full h-auto  bg-slate-400">
      <form
        onSubmit={handleEdit}
        className="flex flex-col justify-center items-center"
      >
        <div className="m-4 flex flex-col items-start">
          <label htmlFor="id" className="m-3 text-white">
            آیدی آیتم
            <input
              className="rounded p-3 m-3 text-black"
              type="text"
              id="id"
              name="id"
              value={formData.id}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="m-4 flex flex-col items-start">
          <label htmlFor="image" className="m-3 text-white">
            آدرس تصویر
            <input
              className="rounded p-3 m-3 text-black"
              type="text"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="m-4 flex flex-col items-start">
          <label htmlFor="alt" className="m-3 text-white">
            توضیحات
            <input
              className="rounded m-3 p-3 text-black"
              type="text"
              id="alt"
              name="alt"
              value={formData.alt}
              onChange={handleChange}
            />
          </label>
        </div>
        {message && <p>{message}</p>}
        {error && <p style={{ color: "red" }}>عدم لود داده</p>}
        {data && <p className="text-white">تعداد داده‌ی دریافتی از سرور{data.length}</p>}

        <input
          className="w-[70px] h-10 bg-yellow-700 rounded m-3"
          type="submit"
          value={"ویرایش"}
        />

        <button
          className="w-[70px] h-10 bg-rose-800 rounded m-3"
          onClick={changeRoute}
        >خانه</button>
      </form>
    </div>
  );
};

export default EditProduct;
