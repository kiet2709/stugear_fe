import './ChatSection.css'

const ChatSection = ({ product }) => {
  return (
    <>
      <div className="card">
        <div className="card-body chat-section-body">
          <p>Nhắn với <b>{product.owner_name}</b> ngay bây giờ</p>
          <form method="POST" action="#">
            <textarea
              className="form-control input-group"
              name="content"
              id="content"
              rows={8}
              required
              placeholder="Nhắn tin ở đây..."
              defaultValue={`Xin chào ${product.owner_name},\n\nBạn còn món đồ này không? Tui muốn mua vài món từ bạn. Xin hãy nhắn lại cho tui biết\n\nCảm ơn,\nNguyen`}
            />
                   <button className="btn text-white input-group custom-btn  " type="submit">
                Gửi tin nhắn
              </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default ChatSection
