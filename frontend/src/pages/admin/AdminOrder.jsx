import React, { useState, useEffect } from 'react';
import AdminOrderModel from '../../Components/AdminOrderModel';
import BigAdminSidebar from '../../Components/BigAdmin/BigAdminSidebar';
import BigNavbar from '../../Components/BigAdmin/BigNavbar';

const AdminOrder = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        fetchTransactions();
    }, []);

    const fetchTransactions = async () => {
        try {
            const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
            const response = await fetch("https://server-hackathon-mnl9.onrender.com/api/transactions/of-admin", {
                headers: {
                    'Authorization': `Bearer ${token}`, // Include the token in the request headers
                },
            });
            const data = await response.json();
            setTransactions(data);
        } catch (error) {
            console.error('Error fetching transactions:', error);
        }
    };

    const deleteTransaction = async (transactionId) => {
        try {
            const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
            const response = await fetch("https://server-hackathon-mnl9.onrender.com/api/transactions", {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`, // Include the token in the request headers
                },
                body: JSON.stringify({ transactionId }),
            });
            const data = await response.json();
            if (response.ok) {
                // Transaction deleted successfully, update transactions state
                fetchTransactions();
            } else {
                // Handle error response
                console.error('Error deleting transaction:', data.error);
            }
        } catch (error) {
            console.error('Error deleting transaction:', error);
        }
    };

    const updateTransaction = async (transactionId, userId, pointsToAdd) => {
        try {
            const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
            const response = await fetch("https://server-hackathon-mnl9.onrender.com/api/transactions/of-admin", {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`, // Include the token in the request headers
                },
                body: JSON.stringify({ transactionId, userId, pointsToAdd }),
            });
            const data = await response.json();
            if (response.ok) {
                // Transaction updated successfully
                console.log('Transaction updated successfully:', data);
                fetchTransactions(); // Refresh transactions
            } else {
                // Handle error response
                console.error('Error updating transaction:', data.error);
            }
        } catch (error) {
            console.error('Error updating transaction:', error);
        }

    }

    return (
        <>
            <AdminOrderModel/>
            <BigAdminSidebar/>
            <BigNavbar title={"الطلبات"}/>
            <div className='md:pl-[218px] pt-2  bg-teal-600 h-screen   text-black  '>
                <div className='flex flex-col w-full items-center '>
                    <div className='bg-white rounded-lg shadow-xl text-black w-full mt-10 '> 
                        <h2 className='text-end p-2 text-2xl'>آخر العمليات</h2>
                        <div className="overflow-x-auto"> 
                            <table className="table text-center">
                                {/* Render table header */}
                                <thead>
                                    <tr>
                                        <th>رقم المعاملة</th>
                                        <th>نوع المعاملة</th>
                                        <th>المبلغ</th>
                                        <th>الحالة</th>
                                        <th>تاريخ الإنشاء</th>
                                        <th>تاريخ التحديث</th>
                                        <th>إجراء</th>
                                    </tr>
                                </thead>
                                {/* Render table body */}
                                <tbody>
                                    {transactions.map((transaction, index) => (
                                        <tr key={index}>
                                            <td>{transaction._id}</td>
                                            <td>{transaction.transactionType}</td>
                                            <td>{transaction.amount}</td>
                                            <td>{transaction.status}</td>
                                            <td>{new Date(transaction.createdAt).toLocaleString()}</td>
                                            <td>{new Date(transaction.updatedAt).toLocaleString()}</td>
                                            <td>
                                                <button className='text-red-500' onClick={() => deleteTransaction(transaction._id)}>حذف</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

};
export default AdminOrder;
