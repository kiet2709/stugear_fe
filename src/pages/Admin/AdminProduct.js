import { useEffect, useState } from "react";
import ProductService from "../../service/ProductService";
import CustomPagination from "../../components/Pagination/Pagination";
import Loading from "../../components/Loading";

const AdminUser = () => {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };
  const updateStatus = async (id, status) => {
    try {
      await ProductService.updateStatus(id, status);
      setStatus(status); // Assuming `setStatus` is declared somewhere
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      setLoading(true)
      try {
        const response = await ProductService.getAllProducts(currentPage);
        if (response?.status === 500) {
          console.log('Something went wrong');
        } else {
          setTotalPage(response?.total_page);
          setProducts(response?.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(false)
    };
    loadData();
  }, [status, currentPage]);

  const handleStatusChange = (e, productId) => {
    const selectedStatus = e.target.value;
    updateStatus(productId, selectedStatus);
  };

  return (
    <>
      <div >

        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Ảnh</th>
              <th scope="col">Tiêu đề</th>
              <th scope="col">Giá</th>
              <th scope="col">Trạng thái</th>
              <th scope="col">Chuyển trạng thái</th>
            </tr>
          </thead>
          {isLoading ? (
            <><Loading/></>
          ): (
            <>   <tbody>
            {products?.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td className="text-center">
                  <img
                    src={product.product_image}
                    alt=""
                    className="admin-small-img"
                    style={{ width: '40%', height: '100px' }}
                  />
                </td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.status}</td>
                <td>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    value={product.status}
                    onChange={(e) => handleStatusChange(e, product.id)}
                  >
                    <option value={product.status}>{product.status}</option>
                    <option value="3">Duyệt</option>
                    <option value="5">Đã thanh toán</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody></>
          )}
       
        </table>
        <div className=""><CustomPagination
          currentPage={currentPage}
          totalPage={totalPage}
          prevPage={prevPage}
          nextPage={nextPage}
          setCurrentPage={setCurrentPage}
        /></div>
      </div>
    </>
  );
};

export default AdminUser;
