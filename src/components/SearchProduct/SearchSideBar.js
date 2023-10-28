import "./SearchSideBar.css"

const SearchSideBar =() => {
    return (
        <>
        

          {/* Filter Section */}
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Filters</h5>
              {/* Add your filter options here */}
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="filterOption1" />
                <label className="form-check-label" htmlFor="filterOption1">
                  Filter Option 1
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="filterOption2" />
                <label className="form-check-label" htmlFor="filterOption2">
                  Filter Option 2
                </label>
              </div>
              {/* Add more filter options as needed */}
            </div>
          </div>
        </>
    )
}
export default SearchSideBar