import React from "react";
import ProductTable from "./ProductTable";
import {
  textfieldinput,
  eyeonincrement,
  textproductinput,
  eyeonproductinput,
  dropdownrating,
  seedropdownrating,
  storage,
} from "./formsAtom";
import { useAtom } from "jotai";
import { AiFillStar } from "react-icons/ai";

const ProductForm = () => {
  // for product description input
  const [textAreainput, setTextAreainput] = useAtom(textfieldinput);
  const [increment] = useAtom(eyeonincrement);
  //for product description
  const [textprodinput, setTextproductinput] = useAtom(textproductinput);
  const [incrementProduct] = useAtom(eyeonproductinput);
  //for dropdown
  const [dropdown, setDropdown] = useAtom(dropdownrating);
  const [checkdropdown] = useAtom(seedropdownrating);
  //save storage
  const [store, setStored] = useAtom(storage);
  const prod = {
    ProductName: textprodinput,
    productdescription: textAreainput,
    rating: dropdown,
  };

  console.log(store);
  const Handlesubmit = (e) => {
    e.preventDefault();
    setStored([...store, prod]);
    setTextAreainput("");
    setTextproductinput("");
    setDropdown(0);
  };

  return (
    <>
      <div className="container">
        <form onSubmit={Handlesubmit}>
          <div className="mb-3">
            <label className="form-label">Product Name</label>
            <input
              type="text"
              value={textprodinput}
              onChange={(e) => setTextproductinput(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            {incrementProduct ? (
              ""
            ) : (
              <span className="text1">
                {" "}
                product name should be greater than 10
              </span>
            )}
          </div>
          <div className="mt-3">
            <label className="form-label">Product Description</label>
            <textarea
              name=""
              id=""
              value={textAreainput}
              onChange={(e) => setTextAreainput(e.target.value)}
            ></textarea>
          </div>
          {increment ? (
            ""
          ) : (
            <span className="text1">
              product description should be greater than 20
            </span>
          )}
          <div className="my-3 ">
            <label className="rating-text"> Rating</label>
            <select
              className="rating"
              id="rating"
              value={dropdown}
              onChange={(e) => setDropdown(e.target.value)}
            >
              {/* <option value="0">0</option> */}
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            {checkdropdown ? (
              <span className="text1">please select rating</span>
            ) : (
              ""
            )}
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <h1 className="title">Your added product</h1>
      <div className="container pt-5">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">
          <table className="main-table" >
            <thead>
            <tr>
              <th>product name</th>
              <th className="col-width">Product Description</th>
              < th>Rating</th>
            </tr>
            </thead>
            <tbody>
            {store.map((prod,i)=>{return (<tr key={i}>
              <td>{prod.ProductName}</td>
              <td>{prod.productdescription}</td>
              <td>{prod.rating}</td>
            </tr>)})}
            
            </tbody>
          </table>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </>
  );
};

export default ProductForm;
