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
    productoNombre: "",
    productoDescripcion: "",
    productoPrecio: 0.0,
    productoImagen: "",
    categoriaId: 0,
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
      const response = await PostProduct(product);
      if (response) {
        setBandera(!bandera);
        setProduct({
          productoNombre: "",
          productoDescripcion: "",
          productoPrecio: 0.0,
          productoImagen: "",
          categoriaId: 0,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "productoPrecio") {
      return setProduct({ ...product, [name]: parseFloat(value) });
    } else if (name === "categoriaId") {
      return setProduct({ ...product, [name]: parseInt(value) });
    } else {
      return setProduct({ ...product, [name]: value });
    }
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    try {
      const response = await UploadProductImage(file);
      if (response.success) {
        return setProduct({ ...product, [name]: value });
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
          <label htmlFor="productoNombre">Nombre de producto</label>
          <input
            type="text"
            name="productoNombre"
            id="productoNombre"
            value={product.productoNombre}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="productoDescripcion">Product description</label>
          <input
            type="text"
            name="productoDescripcion"
            id="productoDescripcion"
            value={product.productoDescripcion}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="productoPrecio">Product price</label>
          <input
            type="number"
            min={0}
            step={0.1}
            name="productoPrecio"
            id="productoPrecio"
            value={product.productoPrecio}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="productoImagen">Product image</label>
          <input
            type="file"
            name="productoImagen"
            id="productoImagen"
            onChange={handleFileChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="categoriaId">Product category</label>
          <select
            name="categoriaId"
            id="categoriaId"
            value={product.categoriaId}
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
