import './CategorySearch.css'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { InputGroup, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const CategorySearch = () => {
  return (
        <>
        <InputGroup className="form-outline" id="search-group">
              <input
                id="search-input"
                placeholder="Tìm kiếm..."
                type="search"
                className="form-control"
              />
              <Button id="search-button">
                <FontAwesomeIcon icon={faSearch} id="search-icon" />
              </Button>
            </InputGroup>

        </>
  )
}

export default CategorySearch
