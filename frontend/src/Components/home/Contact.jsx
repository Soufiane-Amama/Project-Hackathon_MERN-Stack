import { useState } from "react";


const Contact = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log("Contact added successfully!");
    
  };

  return (
    <div
      className='flex flex-col items-center gap-4 mt-20 bg-teal-700 p-2 text-white'
      id='contact'
    >
      <div className='font-bold text-lg md:text-4xl pt-2 text-end'> اتصل بنا </div>
      <div className='w-full '>
        <div className='max-w-3xl mx-auto mt-8 flex flex-col md:flex-row  justify-between items-center gap-10  '>
          <div className='w-full p-3 md:pr-8'>
            <form onSubmit={handleSubmit} className='space-y-4'>
              <div>
                <label htmlFor='email' className='block mb-1 text-end'>
                بريدك الالكتروني    
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  className='w-full px-3 py-2 border rounded-md '
                />
              </div>
              <div>
                <label htmlFor='title' className='block mb-1 text-end'>
                عنوان
                </label>
                <input
                  type='text'
                  id='title'
                  name='title'
                  value={formData.title}
                  onChange={handleChange}
                  className='w-full px-3 py-2 border rounded-md'
                />
              </div>
              <div>
                <label htmlFor='description' className='block mb-1 text-end'>
                وصف
                </label>
                <textarea
                  id='description'
                  name='description'
                  value={formData.description}
                  onChange={handleChange}
                  rows='4'
                  className='w-full px-3 py-2 border rounded-md'
                />
              </div>
              <button
                type='submit'
                className='w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600'
              >
                ارسل
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;