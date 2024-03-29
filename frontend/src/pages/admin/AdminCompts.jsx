import React, { useState, useEffect } from 'react';
import AdminOrderModel from '../../Components/AdminOrderModel';
import BigAdminSidebar from '../../Components/BigAdmin/BigAdminSidebar';
import BigNavbar from '../../Components/BigAdmin/BigNavbar';

import { AiFillCloseSquare } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { BiSolidCommentAdd } from "react-icons/bi";

import avatar from "../../images/avatar.png";

const AdminCompts = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const response = await fetch("https://server-hackathon-mnl9.onrender.com/api/user");
          const data = await response.json();
          setUsers(data);
        } catch (error) {
          console.error('Error fetching users:', error);
        }
      };
      fetchUsers();
    }, []);

    const deleteUser = async (userId) => {
      try {
        const response = await fetch("https://server-hackathon-mnl9.onrender.com/api/user", {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId }),
        });
        const data = await response.json();
        if (response.ok) {
          // Remove the deleted user from the state
          setUsers(users.filter(user => user._id !== userId));
          console.log('User deleted:', data);
        } else {
          console.error('Failed to delete user:', data.error);
        }
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    };

    return (
        <>
            <AdminOrderModel/>
            <BigAdminSidebar/>
            <BigNavbar title={"الحسابات"}/>
            <div className='md:pl-[218px] pt-2  bg-teal-600 h-screen   text-black  '>
                <div className='bg-white rounded-lg shadow-xl text-black w-full mt-10 '> 
                        <h2 className='text-end p-2 text-2xl'>آخر العمليات</h2>
                        <div className="overflow-x-auto"> 
                        <table className="table text-center">
                          <tbody>
                            {users.map((user, index) => (
                              <tr key={index}>
                                <td>
                                  <div className='rounded-full inline-block text-center'>
                                    <div className='flex flex-col justify-center items-center'>
                                      <img className='rounded-full w-16' src={avatar} alt="" />
                                      <div>#{user._id}</div>
                                    </div>
                                  </div>
                                </td>
                                <td><div className='text-xs text-neutral-500 font-bold'>{user.fullName}</div></td>
                                <td><div className='text-xs text-neutral-500'>{user.phoneNumber}</div></td>
                                <td className=''>
                                  <div className='text-yellow-500 font-semibold'>+{user.phoneNumber}</div>
                                </td>
                                <td><div className='text-xs text-neutral-500'>{user.city}, {user.country}</div></td>
                                <td>
                                  <div className='flex gap-2'>
                                    <AiFillCloseSquare size={25} className='text-red-500 cursor-pointer' onClick={() => deleteUser(user._id)} />
                                    <FaEdit size={25} className='text-yellow-500 cursor-pointer'/>
                                    <BiSolidCommentAdd size={25} className='text-green-500 cursor-pointer'/>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                    </div>
                </div>
            </div>
        
        </>
      );
};

export default AdminCompts;
