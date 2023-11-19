
import { Outlet } from 'react-router-dom'
const AdminLayout = () => {
  return (
        <>
   
            <div className="body container">
                <Outlet/>
            </div>
    
        </>
  )
}
export default AdminLayout
