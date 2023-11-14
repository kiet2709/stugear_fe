import { useEffect, useState } from 'react'
import './CategoryFilter.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort } from '@fortawesome/free-solid-svg-icons'
import ProductService from '../../../service/ProductService'
const CategoryFilter = ({setTotalPage, category_id, currentPage, setCurrentPage, setProducts, setLoading}) => {


  const [transactionMethod, setTransactionMethod] = useState("")
  const [field, setField] = useState("")
  const [sort, setSort] = useState("")

  const search = async(criterial, currentPage) => {
    const response = await ProductService.searchInCategory(criterial, currentPage)
    console.log("dô")
    console.log(response)
    setProducts(response)
    setTotalPage(response?.total_pages)
  }

  useEffect(() => {
    setLoading(true)
    const criterial = {
      category_id: category_id,
      transaction_method: transactionMethod,
      field: field,
      sort: sort
  }
  console.log(criterial)
    search(criterial, currentPage)
    setLoading(false)
  }, [transactionMethod, field, sort, currentPage])


  return (
    <>
      <div className="row">
        <div className="col-10">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="cash-radio"
              value="cash"
             
              onChange={() => {setTransactionMethod("cash")
              setCurrentPage(1)}}
            />
            <label className="form-check-label" htmlFor="cash-radio">
              Tự do
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="website-radio"
              value="online"
            
              onChange={() => {
                setTransactionMethod("online")
                setCurrentPage(1)
              }}
            />
            <label className="form-check-label" htmlFor="website-radio">
              Qua website
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="all-method"
              value="all"
              onChange={() => {setTransactionMethod("")
              setCurrentPage(1)}}
            />
            <label className="form-check-label" htmlFor="all-method">
              Tất cả
            </label>
          </div>
        </div>
        <div className="col ms-auto">
          <div className="dropdown col">
            <button
              className="btn dropdown-toggle"
              id="dropdown"
              data-bs-toggle="dropdown"
            >
              Sắp xếp
            </button>

            <ul
              className="dropdown-menu dropdown-menu-dark mt-2"
              aria-labelledby="dropdown"
            >
              <li>
                <button className="dropdown-item" onClick={() => {
                  setField("lastUpdate")
                  setSort(sort === "increase" ? "decrease" : "increase")
                  setCurrentPage(1)
                }}>
                  <FontAwesomeIcon icon={faSort} /> Ngày đăng
                </button>
              </li>
              <li>
                <button className="dropdown-item" onClick={() => {
                  setField("price")
                  setSort(sort === "increase" ? "decrease" : "increase")
                  setCurrentPage(1)
                }}>
                  <FontAwesomeIcon icon={faSort} /> Giá bán
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default CategoryFilter
