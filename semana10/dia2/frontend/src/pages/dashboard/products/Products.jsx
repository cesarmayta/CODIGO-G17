import { useContext, useEffect, useState } from "react";
import { AdminContext } from "../../../contexts/AdminContext";
import { GetCategories } from "../../../services/CategoriesServices";
import { GetToken } from "../../../services/AuthServices";
import {
  GetAllProducts,
  PostProduct,
  UploadProductImage,
} from "../../../services/ProductsServices";
import { IoIosArrowDown } from "react-icons/io";
import "./Products.scss";

export const Products = () => {
  const { setAdminTitle } = useContext(AdminContext);
  const [listOfProducts, setListOfProducts] = useState([]);
  const [listOfCategories, setListOfCategories] = useState([]);
  const [product, setProduct] = useState({
    productId: 1,
    productName: "",
    productDescription: "",
    productPrice: 0.0,
    productImage: "",
    productCategory: 0,
  });
  const [bandera, setBandera] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const token = GetToken();
      const response = await GetCategories(token);
      if (response.status === 200) {
        setListOfCategories(response.data.content);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setAdminTitle("Products");
    const fetchData = async () => {
      const token = GetToken();
      const response = await GetAllProducts(token);
      setListOfProducts(response.data.content);
    };
    fetchData();
  }, [bandera]);

  const createProduct = async (event) => {
    event.preventDefault();
    try {
      console.log("data de producto a enviar:",product)
      const response = await PostProduct(product);
      if (response) {
        setBandera(!bandera);
        setProduct({
          productId: 1,
          productName: "",
          productDescription: "",
          productPrice: 0.0,
          productImage: "",
          productCategory: 0,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "productPrice") {
      return setProduct({ ...product, [name]: parseFloat(value) });
    } else if (name === "productCategory") {
      return setProduct({ ...product, [name]: parseInt(value) });
    } else {
      return setProduct({ ...product, [name]: value });
    }
  };

  const handleFileChange = async (event) => {
    const { name, value } = event.target;
    console.log("nombre :",name)
    const file = event.target.files[0];
    try {
      const response = await UploadProductImage(file);
      if (response.success) {
        console.log("url de imagen : ",response.content)
        return setProduct({ ...product, [name]: response.content });
      }
    } catch (error) {
      return console.log(error);
    }
  };

  return (
    <div className="Products">
      <h4 className="Products-subtitle">All products</h4>
      <div className="Products-table">
        <table>
          <thead>
            <tr>
              <th>Product name</th>
              <th>Product description</th>
              <th>Price</th>
              <th>Image</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {listOfProducts.length > 0 &&
              listOfProducts.map((product) => (
                <tr key={product._id}>
                  <td>{product.productName}</td>
                  <td>{product.productDescription}</td>
                  <td>S/ {product.productPrice}</td>
                  <td>
                    <img
                      src={product.productImage}
                      alt="Product Preview"
                      loading={"lazy"}
                    />
                  </td>
                  <td>{product.productCategory}</td>
                  <td>
                    <button>
                      Details
                      <IoIosArrowDown />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <h4 className="Products-subtitle">Create product</h4>
      <form className="Products-create-form" onSubmit={createProduct}>
        <div className="form-group">
          <label htmlFor="productName">Nombre de producto</label>
          <input
            type="text"
            name="productName"
            id="productName"
            value={product.productName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="productDescription">Product description</label>
          <input
            type="text"
            name="productDescription"
            id="productDescription"
            value={product.productDescription}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="productPrice">Product price</label>
          <input
            type="number"
            min={0}
            step={0.1}
            name="productPrice"
            id="productPrice"
            value={product.productPrice}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="productImage">Product image</label>
          <input
            type="file"
            name="productImage"
            id="productImage"
            onChange={handleFileChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="productCategory">Product category</label>
          <select
            name="productCategory"
            id="productCategory"
            value={product.productCategory}
            onChange={handleInputChange}
          >
            <option value="">Elegir Categoria</option>
            {listOfCategories.map((category, index) => (
              <option key={index} value={index}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <button className="Products-create-button">Create product</button>
        </div>
      </form>
    </div>
  );
};
