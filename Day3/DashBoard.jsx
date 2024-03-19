import React from 'react'
import AdminSidebar from './AdminSidebar'
import { HiUserGroup } from "react-icons/hi2";
import { FaUserAlt } from "react-icons/fa";
import '../assets/css/DashBoard.css'
import { BsPersonWorkspace } from "react-icons/bs";

import { MdIndeterminateCheckBox } from "react-icons/md";
function DashBoard() {
  return (
    <div>
      <AdminSidebar/>
      <div className='dashboardfull'>
            <div className='dashboardhead'>
                <h1>Admin Dashboard</h1>
            </div>
            <div className='dash_con'>
                <div className='dash_det'>
                    <h5><span className='l1'>TOTAL CLIENT</span></h5>
                    <HiUserGroup />
                    <p> Clients</p>
                </div>
                <div className='dash_det'>
                <h5><span className='l2'>TOTAL USER LOGIN</span></h5>
                <FaUserAlt />
                    <p>6 Users</p>
                </div>
                <div className='dash_det'>
                    <h5><span className='l3'>TOTAL COMPANY</span></h5>
                    <MdIndeterminateCheckBox />
                    <p>4 Companies</p>
                </div>
                <div className='dash_det'>
                     <h5><span className='l4'>TOTAL JOBS</span></h5>
                     <BsPersonWorkspace />
                     <p>7 Job</p>
                </div>
            </div>
            <div className='dash_con2'>
                <div className='dash_det2'>
                    <h5><span className='l1'>TOTAL APPLY JOBS</span></h5>
                    <HiUserGroup />
                    <p>2 Users</p>
                </div>
                <div className='dash_det2'>
                    <h5><span className='l2'>TOTAL JOBS ACCEPT</span></h5>
                    <HiUserGroup />
                    <p>2 Users</p>
                </div>
                <div className='dash_det2'>
                    <h5><span className='l3'>TOTAL JOBS REJECT</span></h5>
                    <HiUserGroup />
                    <p>2 Users</p>
                </div>
               
                
                
                
            </div>
            </div>
      </div>
  
  )
}

export default DashBoard
