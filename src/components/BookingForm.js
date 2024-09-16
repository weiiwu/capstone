import React, { useState } from 'react';

const BookingForm = () => {
  // State to keep track of the count
  const [count, setCount] = useState(0);

  // Function to handle increasing the count
  const increase = () => {
    setCount(count + 1);
  };

  // Function to handle decreasing the count with a condition
  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <section>
        <div className="container m-auto max-w-2xl">
          <div
            className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
          >
            <form>
              <h2 className="text-3xl text-center font-semibold mb-6">Reserve a table</h2>

              <div className="mb-4">
                <label for="type" className="block text-gray-700 font-bold mb-2"
                >Date</label
                >
                <input
                  type='date'
                  id='date'
                  name='date'
                  className='border rounded w-full py-2 px-3 mb-2'
                  placeholder='Date'
                  required
                />
              </div>

              <div className="mb-4">
                <label for="time" className="block text-gray-700 font-bold mb-2"
                >Time</label
                >
                <select
                  id="time"
                  name="time"
                  className="border rounded w-full py-2 px-3"
                  required
                >
                  <option value="10:00">10:00</option>
                  <option value="11:00">11:00</option>
                  <option value="12:00">12:00</option>
                  <option value="13:00">13:00</option>
                  <option value="14:00">14:00</option>
                  <option value="15:00">15:00</option>
                  <option value="16:00">16:00</option>
                  <option value="17:00">17:00</option>
                  <option value="18:00">18:00</option>
                  <option value="19:00">19:00</option>
                  <option value="20:00">20:00</option>
                </select>
              </div>

              <div className='mb-4'>
                <label className='block text-gray-700 font-bold mb-2'>
                  Guests Number
                </label>


                <div className="flex items-cente justify-center space-x-4">
                  {/* Text field to display the current count */}
                  <button
                    className="m-4 bg-white text-gray-700 border border-gray-300 rounded-full font-bold py-2 px-4 rounded hover:bg-gray-700  hover:text-white"
                    onClick={increase}
                    disabled={count <= 0} // Disable button when count is 0
                  >+</button>
                  {/* Button to increase the count */}
                  <input
                    type="text"
                    value={count}
                    readOnly
                     size="2"
                    className="text-xl font-bold border border-gray-300 rounded p-2 text-center w-24"
                  />
                  {/* Button to decrease the count */}
                  <button
                    className="m-4 bg-white text-gray-700 border border-gray-300 rounded-full font-bold py-2 px-4 rounded hover:bg-gray-700  hover:text-white"
                    onClick={decrease}
                    disabled={count <= 0} // Disable button when count is 0
                  >-</button>
                </div>


              </div>

              <div className="border border-gray-100 mb-5"></div>

              <div className="mb-4">
                <label for="name" className="block text-gray-700 font-bold mb-2"
                >Your Name</label
                >
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="border rounded w-full py-2 px-3"
                  placeholder="Please input your name"
                />
              </div>

              <div className="mb-4">
                <label
                  for="email"
                  className="block text-gray-700 font-bold mb-2"
                >Contact Email</label
                >
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="border rounded w-full py-2 px-3"
                  placeholder="Please input your Email address"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  for="phone"
                  className="block text-gray-700 font-bold mb-2"
                >Contact Phone</label
                >
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="border rounded w-full py-2 px-3"
                  placeholder="Please input your phone number"
                />
              </div>

              <div className='flex items-center justify-between'>
                <button
                  className="bg-white text-gray-700 border border-gray-300 rounded-full font-bold py-2 px-4 rounded hover:bg-gray-700  hover:text-white" type="submit"
                >
                  Cancel
                </button>

                <button
                  className="text-gray-700 bg-yellow py-2 px-4 rounded-full font-bold"
                  type="submit"
                >
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

    </>
  )
}

export default BookingForm