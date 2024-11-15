import { useState } from "react";
import useSWR, { mutate } from "swr";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const fetcher = (url) => fetch(url).then((res) => res.json());

const Delete = () => {
    const navigate = useNavigate();
    const changeRoute = () => {
      navigate("/");
    };
  const [id, setId] = useState("");
  const [message, setMessage] = useState("");
  const server = "http://localhost:3000/Product";
  const { data, error } = useSWR(server, fetcher);

  const handleDelete = async (e) => {
    e.preventDefault();

    if (!id) {
      setMessage("Please enter an ID to delete.");
      return;
    }

    await Swal.fire({
      title: "مطمئنی؟",
      text: "محصول حذف شده برنخواهد گشت",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "بله",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          const response = fetch(`${server}/${id}`, {
            method: "DELETE",
          });

          if (!response.ok) {
            throw new Error("آیدی مورد نظر وجود ندارد دوباره تلاش کنید.");
          }

          // Update the local cache
          mutate(server);

          setMessage(`محصول با آیدی مورد نظر حذف شد`);
          setId(""); // Clear input
        } catch (err) {
          setMessage(err.message);
        }

        Swal.fire({
          title: "محصول حذف شد",
          icon: "success",
        });
      }
    });
  };
  return (
    <div className="w-full h-screen  bg-slate-400">
      <form onSubmit={handleDelete} className="flex flex-col justify-center items-center">
        <label htmlFor="id" className="mb-1 text-white m-4">
          آیدی محصول
        </label>
        <input required
            type="text"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)} className="rounded m-3"
          />
        {message && <p>{message}</p>}
      {error && <p style={{ color: "red" }}>داده لود نشد</p>}
      {data && <p className="text-white">تعداد داده دریافت شده از سرور: {data.length}</p>}
        <button type="submit"  className="w-[100px] h-10 bg-red-700 rounded m-4">حذف محصول</button>
        <button
          className="w-[70px] h-10 bg-rose-800 rounded mt-2"
          onClick={changeRoute}
        >
          خانه
        </button>
      </form>

    </div>
  );
};

export default Delete;
