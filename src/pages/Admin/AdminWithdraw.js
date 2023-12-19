import { useEffect, useState } from "react";
import CategoryService from "../../service/CategoryService";
import Category from "../../components/Landing/Category";
import UserService from "../../service/UserService";
import Loading from "../../components/Loading";
import CustomModal from "../../components/Modal/Modal";
import AskService from "../../service/AskService";
import UserModal from "../../components/Profile/UserModal/UserModal"
import Modal from "react-modal";
const AdminWithdraw = () => {
  const [withdraws, setWithdraws] = useState([]);
  const [isLoading, setLoading] = useState(true);
  
//   const handleStatusChange = async () => {
    
//     const updatedUsers = users.map((user) => {
//       if (user.id === selectedUserId) {
//         return { ...user, is_enable: selectedStatus };
//       }
//       return user;
//     });
//     console.log(updatedUsers)
//     setUsers(updatedUsers);
//     await UserService.updateUserStatus(selectedUserId, selectedStatus);
    
//   };
  const loadData = async () => {
    setLoading(true);
    const response = await AskService.getListWithdraws();

    if (response?.status === 400) {
      console.log("Something wentwrong");
    } else {
      setWithdraws(response?.data);
    }
    setLoading(false);
    
  };

  useEffect(() => {
    loadData();
  }, []);


const [selectedStatus, setSelectedStatus] = useState();
const [selectedWithdraw, setSelectedWithdraw] = useState();
const [changeStatusShow, setChangeStatusShow] = useState(false);
const [isError, setError] = useState("")
const handleChangeStatusClose = () => {
  setChangeStatusShow(false);
};
const handleChangeStatusSave = async () => {
  setError("")
  setChangeStatusShow(false);
  const response = await AskService.updateWithdrawStatus(
    selectedWithdraw,
    parseInt(selectedStatus)
  );

  if (response?.status !== 400) {
    setWithdraws(withdraws.map(withdraw => {
      if (withdraw?.id === selectedWithdraw) {
        let statusString;
        switch (selectedStatus) {
          case "3":
            statusString = "Đã hủy";
            break;
          case "2":
            statusString = "Đã xử lý hoàn tất";
            break;
          default:
            statusString = "Mới tạo"; // Default status
            break;
        }
    
        return { ...withdraw, status: statusString };
      }
      return withdraw;
    }));
  } else {
    setError(response?.data?.message);
  }
};
  return (
    <>
      <div style={{ height: "780px" }}>
   
      {isError!=="" ? (
          <><span className="text-danger">{isError}</span></>
        ): (
          <></>
        )}
      <CustomModal
          handleSave={handleChangeStatusSave}
          handleClose={handleChangeStatusClose}
          show={changeStatusShow}
          heading={"Thay đổi trạng thái báo cáo này?"}
          body={`Bạn có muốn thay đổi trạng thái báo cáo này không`}
        ></CustomModal>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col" width="15%">Người yêu cầu</th>
              <th scope="col" width="15%">Số tiền</th>
              <th scope="col">Nội dung</th>
              <th scope="col">Ngày yêu cầu</th>
              <th scope="col">Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <>
                <Loading />
              </>
            ) : (
              <>
          
                {" "}
                {withdraws?.map((withdraw) => {
                  return (
                    <tr>
                      <th scope="row" className="text-center" >{withdraw?.id}</th>
                      <td className="text-center"><UserModal userId={withdraw?.owner_id}/></td>
                      <td >{withdraw?.amount}</td>
                      <td>{withdraw.description}</td>
                      <td>{withdraw.date}</td>
                      <td>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          value={withdraw?.status === "Đã xử lý hoàn tất" ? 2 : "Đã hủy" ? 3: 1}
                          onChange={(e) => {
                            setSelectedWithdraw(withdraw?.id)
                            setSelectedStatus(e.target.value)
                            setChangeStatusShow(true)
                          }}
                        >
                          <>
                            <option value={1}>Mới tạo</option>
                            <option value={2}>Đã xử lý hoàn tất</option>
                            <option value={3}>Đã hủy</option>
                          </>
                        </select>
                      </td>
                    </tr>
                  );
                })}
              </>
            )}
          </tbody>
        </table>
        {/* <CustomModal handleSave={handleSave} handleClose={handleClose} show={show} heading={"Đổi trạng thái người dùng?"} body={"Bạn có muốn đổi trạng thái người dùng"}></CustomModal>
         */}
      </div>
    </>
  );
};
export default AdminWithdraw;
