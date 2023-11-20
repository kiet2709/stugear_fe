import { useEffect, useState } from "react"
import CategoryService from "../../service/CategoryService"
import Category from "../../components/Landing/Category"
import UserService from "../../service/UserService"

const AdminUser = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        const loadData = async () => {
        
    
            const response = await UserService.getAllUsers()
            console.log(response)
            if (response?.status === 500) {
              console.log('Something wentwrong')
            } else {
                setUsers(response)
            }
    
    
        }
        loadData()
      }, [])
    return (
        <>

    <div style={{height: '780px'}}>
    <table class="table table-bordered">
  <thead>
    <tr>
    <th scope="col">ID</th>
      <th scope="col">Tên đăng nhập</th>
      <th scope="col">Email</th>
      <th scope="col">Tên</th>
      <th scope="col">Họ</th>
      <th scope="col">Trạng thái</th>
    </tr>
  </thead>
  <tbody>
    {users?.map(user => {
        return (      <tr>
            <th scope="row">1</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.is_enable == 1 ? "Hoạt động": "Chặn"}</td>
            </tr>)
      
    })}
 

  </tbody>
</table>
    </div>
   
      
        </>
    )
}
export default AdminUser