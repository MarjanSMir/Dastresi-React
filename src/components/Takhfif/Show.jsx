import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Show = () => {
  const [Product, setProduct] = useState(null);
  const navigate = useNavigate();
  const backAdmin = navigate("/Admin");
  const fetchPost = async () => {
    try {
      let res = await axios.get(`http://localhost:3000/Product`);
      setProduct(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <>

    </>
  );
};
export default Show;
