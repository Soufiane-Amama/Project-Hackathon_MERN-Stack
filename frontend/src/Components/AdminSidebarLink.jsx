
import React from "react";

const AdminSidebarLink = ({ title, to, icon: Icon }) => {
  return (
    <a href={to} className='flex items-center p-3 pl-5  hover:bg-teal-600 transition rounded text-black '>
      <div className='mr-5'>
        <Icon size={24} />
      </div>
      <div>{title}</div>
    </a>
  );
};

export default AdminSidebarLink;
