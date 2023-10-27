import './CategoryStatistic.css'

const CategoryStatistic = ({ item }) => {
  return (
    <>
      <div className="category-statistic mt-3 ">
        <span>{item.total}</span>
        <p>Tổng cộng</p>
      </div>
      <span className="vertical-line"></span>
      <div className="category-statistic mt-3 ">
        <span>{item.sold}</span>
        <p>Đã bán</p>
      </div>
      <span className="vertical-line"></span>
      <div className="category-statistic mt-3 ">
        <span>{item.tag_total}</span>
        <p>Thể loại</p>
      </div>
      <span className="vertical-line"></span>
    </>
  )
}

export default CategoryStatistic
