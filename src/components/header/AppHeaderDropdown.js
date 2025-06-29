import React from 'react'
import {
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {
  cilLockLocked,
  cilUser,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { Avatar } from 'primereact/avatar';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

const AppHeaderDropdown = () => {
  const navigate = useNavigate();
  const userMode = useSelector((state) => state.userInfo.userModeValue);
  // const userInfo = JSON.parse(localStorage.getItem('token'));
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  // console.log("DropDownuserInfo", userInfo)

  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        {/* <span className='mx-2'>{userInfo?.firstname + " " + userInfo?.lastname}</span> */}
        <Avatar
          label={userInfo?.name?.charAt(0).toUpperCase()}
          className="p-2 my-1"
          size="small"
          shape="circle"
        />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">Admin</CDropdownHeader>
        <CDropdownItem>
          <CIcon icon={cilUser} className="me-2" />
          {userInfo?.role}
        </CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem >
          <CIcon
            icon={cilLockLocked} className="me-2"
          />
          <a
            href="#"
            rel="noopener noreferrer"
            className='text-dark'
            style={{ textDecoration: "none" }}
            onClick={() => {
              localStorage.removeItem("userInfo");
              // localStorage.removeItem("userMode");
              // localStorage.removeItem("loginInfo");
              // localStorage.removeItem("user");
              // localStorage.removeItem("token");
              // console.log("remove item")
              navigate("/");
            }}
          >
            Log out
          </a>
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
