import { useEffect, useState } from 'react'
import './CategoryFilter.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort } from '@fortawesome/free-solid-svg-icons'
import ProductService from '../../../service/ProductService'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { InputGroup, Button } from 'react-bootstrap'
const CategoryFilter = ({setTotalProduct, setTotalPage, category_id, currentPage, setCurrentPage, setProducts, setLoading}) => {


  const [transactionMethod, setTransactionMethod] = useState("")
  const [field, setField] = useState("")
  const [sort, setSort] = useState("")
  const [query, setQuery] = useState("")

  const search = async(criterial, currentPage) => {
    setLoading(true)
    const response = await ProductService.searchInCategory(criterial, currentPage)

    setProducts(response)
    setTotalPage(response?.total_pages)
    setTotalProduct(response?.total_in_all_page)
    setLoading(false)
  }

  useEffect(() => {
    
    const criterial = {
      category_id: category_id,
      transaction_method: transactionMethod,
      field: field,
      sort: sort,
      q: query
  }

    search(criterial, currentPage)
    
  }, [transactionMethod, field, sort, currentPage, query])

  let debounceTimer;

  const handleInputChange = (e) => {
    clearTimeout(debounceTimer);

    const input = e.target.value;
    debounceTimer = setTimeout(() => {
      setQuery(input);
      setCurrentPage(1);
    }, 400); // Adjust the debounce time (in milliseconds) as needed
  };
  return (
    <>
      <div className="row">
        <div className="col-4 mt-2">
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
    
        <div className="col">
     <div className='row'>
     <div className="col-4" style={{marginRight: '300px'}}>
            <InputGroup className="form-outline" id="search-group" style={{width: '250px'}}>
              <input
                id="search-input"
                placeholder="Tìm kiếm..."
                type="search"
                className="form-control"
                onChange={(e) => handleInputChange(e)}
              />
              <Button id="search-button">
                <FontAwesomeIcon icon={faSearch} id="search-icon" />
              </Button>
            </InputGroup>
            </div>
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
      </div>
    </>
  )
}

export default CategoryFilter
