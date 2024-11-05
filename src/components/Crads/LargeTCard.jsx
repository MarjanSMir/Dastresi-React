const LargeTCard = () => {
  return (
    <div className="product w-1/2 h-full bg-white ml-2 rounded-2xl flex flex-col justify-center items-center">
      <img src="" alt="" />
      <h3>{item.name}</h3>
      <h4>مدل:{item.model}</h4>
      <div className="price text-blue-700">{item.price}</div>
    </div>
  );
};
export default LargeTCard;
