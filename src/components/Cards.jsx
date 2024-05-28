//* THIS IS A WRAPPER COMPONENT, WE CAN USE IT IN DIFFRENT COMPONENTS FOR CLEAN CODE AND ALSO USE IT TO CREATE AND PASS IN PROP DYNAMICALLY
const Cards = ({ children, bg = "bg-gray-100" }) => {
  return <div className={`${bg} p-6 rounded-lg shadow-md`}>{children}</div>;
};

export default Cards;
