import { Link } from "react-router";
function Cart() {
  return (
    <main>
      
        <div className="text-4xl font-serif text-center py-30">
          <div className="text-center flex"></div>
          <p>Cart is Empty !!!!</p>
          <p>Go Shop my dear dont be stingy🤣</p>
          <Link to="/ClearanceShop">
            <button className="rounded-full bg-[#45c9a1] text-[#f1f1f0] border-black py-4 px-10">
              Go Shopping
            </button>
          </Link>
        </div>

     
      
    </main>
  );
}
export default Cart;