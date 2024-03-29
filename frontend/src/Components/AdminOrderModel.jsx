import { useState } from "react";
import order from "../images/ordre/order.png";

const AdminOrderModel = () => {
    const [formData, setFormData] = useState({
        full_name: "",
        purpose_type: "",
        select_date_time: "",
        location: "",
        other_notes: "",
        email_address: "",
    });
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (
            formData.full_name &&
            formData.purpose_type &&
            formData.select_date_time &&
            formData.location
        ) {
            // Your submission logic here
            console.log(formData);
            // Assuming you have the backend API call here
            // It should be something like:
            const response = await fetch("https://server-hackathon-mnl9.onrender.com/api/truck", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userId: "6602f7238ac87f73d5883aab",
                    fullName: formData.full_name,
                    typeOfItems: formData.purpose_type,
                    date: formData.select_date_time,
                    place: formData.location,
                    comments: formData.other_notes || "لايوجد",
                }),
            });
            const data = await response.json();
            console.log(data);
            if (response.ok) {
                setSuccessMessage("Truck added successfully");
                setErrorMessage(""); // Clear error message if any
            } else {
                setErrorMessage("Failed to add truck"); // Set error message if there's an issue with the request
                setSuccessMessage(""); // Clear success message
            }
        } else {
            // Handle error if any of the required fields are empty
            let missingFields = [];
            if (!formData.full_name) missingFields.push("الاسم");
            if (!formData.purpose_type) missingFields.push("نوع الأغراض");
            if (!formData.select_date_time) missingFields.push("اختر التاريخ والزمان");
            if (!formData.location) missingFields.push("المكان");
            setErrorMessage("Please fill in all fields: " + missingFields.join(", "));
            setSuccessMessage(""); // Clear success message
        }
    };

    return (
        <div>
            <dialog id='my_modal_1' className='modal text-black text-end'>
                <div className='modal-box bg-white '>
                    <h3 className='font-bold text-lg'>اطلب شاحنة</h3>

                    <div className='py-4'>
                        <div>
                            <img src={order} alt="Order Image"  />
                        </div>
                        <div className='max-w-md mx-auto mt-8'>
                            <form onSubmit={handleSubmit} className='space-y-4'>
                                <div>
                                    <label htmlFor='full_name' className='block mb-1'>
                                        الاسم الكامل
                                    </label>
                                    <input
                                        type='text'
                                        id='full_name'
                                        name='full_name'
                                        value={formData.full_name}
                                        onChange={handleChange}
                                        className='w-full px-3 py-2 border rounded-md bg-white'
                                        placeholder='الاسم الكامل'
                                    />
                                </div>
                                <div>
                                    <label htmlFor='purpose_type' className='block mb-1'>
                                        نوع الأغراض
                                    </label>
                                    <input
                                        type='text'
                                        id='purpose_type'
                                        name='purpose_type'
                                        value={formData.purpose_type}
                                        onChange={handleChange}
                                        className='w-full px-3 py-2 border rounded-md bg-white'
                                        placeholder='نوع الأغراض'
                                    />
                                </div>
                                <div>
                                    <label htmlFor='select_date_time' className='block mb-1'>
                                        اختر التاريخ والزمان
                                    </label>
                                    <input
                                        type='text'
                                        id='select_date_time'
                                        name='select_date_time'
                                        value={formData.select_date_time}
                                        onChange={handleChange}
                                        className='w-full px-3 py-2 border rounded-md bg-white'
                                        placeholder='اختر التاريخ والزمان'
                                    />
                                </div>
                                <div>
                                    <label htmlFor='location' className='block mb-1'>
                                        المكان
                                    </label>
                                    <input
                                        type='text'
                                        id='location'
                                        name='location'
                                        value={formData.location}
                                        onChange={handleChange}
                                        className='w-full px-3 py-2 border rounded-md bg-white'
                                        placeholder='المكان'
                                    />
                                </div>
                                <div>
                                    <label htmlFor='other_notes' className='block mb-1'>
                                        ملاحظات أخرى
                                    </label>
                                    <input
                                        type='text'
                                        id='other_notes'
                                        name='other_notes'
                                        value={formData.other_notes}
                                        onChange={handleChange}
                                        className='w-full px-3 py-2 border rounded-md bg-white'
                                        placeholder='ملاحظات أخرى'
                                    />
                                </div>
                                {errorMessage && <div className="text-red-600">{errorMessage}</div>}
                                {successMessage && <div className="text-green-600">{successMessage}</div>}
                                <button
                                    type='submit'
                                    className='w-full py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600'
                                >
                                    اطلب
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className='modal-action'>
                        <form method='dialog'>
                            {/* if there is a button in form, it will close the modal */}
                            <div className='flex justify-center'>
                                <button className='btn'>Close</button>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default AdminOrderModel;
