import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Create = () => {
    const navigate = useNavigate();
    const changeRoute = ()=>{navigate("/")}
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const clickHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/Product", {
      name: name,
      image: image,
      model: model,
      price: price,
    });
  };
  return (
    <div className="w-full h-screen  bg-slate-400">
      <form
        action=""
        method="post"
        onSubmit={clickHandler}
        className="flex flex-col justify-center items-center"
      >
        <div className="m-4 flex flex-col items-start">
          <label htmlFor="name" className="mb-1 text-white">
            اسم محصول
          </label>
          <input
            className="rounded p-2"
            type="text"
            placeholder="اسم محصول"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="m-4 flex flex-col items-start">
          <label htmlFor="image" className="mb-1 text-white">
            تصویر محصول
          </label>
          <input
            className="rounded p-2"
            type="text"
            placeholder="آدرس تصویر محصول"
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="m-4 flex flex-col items-start">
          <label htmlFor="model" className="mb-1 text-white">
            مدل محصول
          </label>
          <input
            className="rounded p-2"
            type="text"
            placeholder="مدل محصول"
            onChange={(e) => setModel(e.target.value)}
          />
        </div>
        <div className="m-4 flex flex-col items-start">
          <label htmlFor="price" className="mb-1 text-white">
            {" "}
            قیمت محصول
          </label>
          <input
            className="rounded p-2"
            type="text"
            placeholder="قیمت محصول"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <input className="w-[70px] h-10 bg-green-700 rounded" type="submit" value={"ثبت"}/>
        <button className="w-[70px] h-10 bg-rose-800 rounded mt-2" onClick={changeRoute}>خانه</button>
      </form>
    </div>
  );
};
export default Create;
