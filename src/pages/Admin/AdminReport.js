import { useEffect, useState } from "react";
import CategoryService from "../../service/CategoryService";
import Category from "../../components/Landing/Category";
import UserService from "../../service/UserService";
import Loading from "../../components/Loading";
import CustomModal from "../../components/Modal/Modal";
import AskService from "../../service/AskService";
import UserModal from "../../components/Profile/UserModal/UserModal"
const AdminReport = () => {
  const [reports, setReports] = useState([]);
  const [isLoading, setLoading] = useState(false);
  
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
    // setLoading(true);
    const response = await AskService.getListReport();

    if (response?.status === 400) {
      console.log("Something wentwrong");
    } else {
      setReports(response?.data);
    }
    // setLoading(false);
    
  };
  const [selectedStatus, setSelectedStatus] = useState();
  const [selectedReport, setSelectedReport] = useState();
  const [changeStatusShow, setChangeStatusShow] = useState(false);
  const [isError, setError] = useState("")

  useEffect(() => {
    loadData();
  }, []);

//   const handleSave = () => {
//     handleStatusChange(selectedStatus, selectedUserId)
//     setShow(false)
//   }
//   const [show, setShow] = useState(false);
//   const handleClose =() => {
//     setShow(false)
//   }
const handleChangeStatusClose = () => {
  setChangeStatusShow(false);
};
const handleChangeStatusSave = async () => {
  setError("")
  setChangeStatusShow(false);
  const response = await AskService.updateReportStatus(
    selectedReport,
    parseInt(selectedStatus)
  );

  if (response?.status !== 400) {
    setReports(reports.map(report => {
      if (report?.id === selectedReport) {
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
    
        return { ...report, status: statusString };
      }
      return report;
    }));
  } else {
    setError(response?.data?.message);
  }
};
  return (
    <>
      <div style={{ height: "780px" }}>
      <CustomModal
          handleSave={handleChangeStatusSave}
          handleClose={handleChangeStatusClose}
          show={changeStatusShow}
          heading={"Thay đổi trạng thái báo cáo này?"}
          body={`Bạn có muốn thay đổi trạng thái báo cáo này không`}
        ></CustomModal>
        {isError!=="" ? (
          <><span className="text-danger">{isError}</span></>
        ): (
          <></>
        )}
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col" width="15%">Người báo cáo</th>
              <th scope="col" width="15%">Người bị báo cáo</th>
              <th scope="col">Nội dung báo cáo</th>
              <th scope="col">Ngày báo cáo</th>
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
                {reports?.map((report) => {
                  return (
                    <tr>
                      <th scope="row" className="text-center" >{report?.id}</th>
                      <td className="text-center"><UserModal userId={report?.owner_id}/></td>
                      <td  className="text-center"><UserModal userId={report?.denounced_id}/></td>
                      <td>{report.description}</td>
                      <td>{report.date}</td>
                      <td>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          value={report?.status === "Đã xử lý hoàn tất" ? 2 : "Đã hủy" ? 3: 1}
                          onChange={(e) => {
                            setSelectedReport(report?.id)
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
export default AdminReport;
