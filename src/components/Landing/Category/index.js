const Category = ({ category }) => {
    return (
        <div className="col-lg-4" data-aos="fade-up" data-aos-delay={200}>
        <div className="box" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <div style={{ flex: 1 }}>
                <img src={category.imgURL} className="img-fluid" alt />
            </div>
            <div  style={{ textDecoration: 'none', color: 'inherit' }}>
                <h3>{category.name}</h3>
                <p>{category.description}.</p>
                <button className="btn btn-primary ml-auto">Xem thêm</button>
            </div>
            
        </div>
        
    </div>
    )
}

export default Category