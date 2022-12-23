import { useContext, useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { AdminContext } from "../../../contexts/AdminContext";
import { GetToken } from "../../../services/AuthServices";
import {
  DeleteCategory,
  GetCategories,
  PostCategory,
} from "../../../services/CategoriesServices";

export const Categories = () => {
  const { setAdminTitle } = useContext(AdminContext);
  const [listOfCategories, setListOfCategories] = useState([]);
  const [category, setCategory] = useState({
    name: "",
  });
  const [bandera, setBandera] = useState(false);

  useEffect(() => {
    setAdminTitle("Categories");
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const token = GetToken();
      const response = await GetCategories(token);
      if (response.status === 200) {
        setListOfCategories(response.data.content);
      }
    };
    fetchData();
  }, [bandera]);

  const createCategory = async (event) => {
    event.preventDefault();
    try {
      const token = GetToken();
      const response = await PostCategory(category, token);
      if (response.status === 201) {
        setBandera(!bandera);
        setCategory({
          name: "",
        });
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteCategory = async (category_id) => {
    try {
      const token = GetToken();
      const response = await DeleteCategory(category_id, token);
      if (response.status === 200) {
        setBandera(!bandera);
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    return setCategory({ ...category, [name]: value });
  };

  return (
    <div className="Products">
      <h4 className="Products-subtitle">All categories</h4>
      <div className="Products-table">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Category name</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {listOfCategories.length > 0 &&
              listOfCategories.map((category, index) => (
                <tr key={category.id}>
                  <td>{index + 1}</td>
                  <td>{category.name}</td>
                  <td>
                    <FaTrashAlt onClick={() => deleteCategory(category.id)} />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <h4 className="Products-subtitle">Create category</h4>
      <form className="Products-create-form" onSubmit={createCategory}>
        <div className="form-group">
          <label htmlFor="productName">Category name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={category.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="Products-create-button">
            Create category
          </button>
        </div>
      </form>
    </div>
  );
};
