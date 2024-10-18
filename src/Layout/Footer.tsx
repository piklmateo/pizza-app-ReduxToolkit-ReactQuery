import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex items-center justify-between bg-slate-950 px-6 py-6 text-slate-200">
      <div className="flex gap-2">
        <p>X Pizzas</p>
        <p>$32.00</p>
      </div>
      <div>
        <Link to="/cart">
          <span>OPEN CART</span>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
