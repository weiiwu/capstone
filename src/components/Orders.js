import React from 'react'

const Orders = () => {
  return (
    <>
    <div className=' m-4 font-bold'>Order FOR DELIVERY!</div>
      <div class="flex space-x-2 m-4">
        <button className="bg-white text-gray-700 border border-gray-300 rounded-full font-bold py-2 px-4 rounded hover:bg-gray-700  hover:text-white">Lunch</button>
        <button className="bg-white text-gray-700 border border-gray-300 rounded-full font-bold py-2 px-4 rounded hover:bg-gray-700 hover:text-white">Mains</button>
        <button className="bg-white text-gray-700 border border-gray-300 rounded-full font-bold py-2 px-4 rounded hover:bg-gray-700 hover:text-white">Desserts</button>
        <button className="bg-white text-gray-700 border border-gray-300 rounded-full font-bold py-2 px-4 rounded hover:bg-gray-700 hover:text-white">A La Carte</button>
        <button className="bg-white text-gray-700 border border-gray-300 rounded-full font-bold py-2 px-4 rounded hover:bg-gray-700 hover:text-white">Specials</button>
      </div>
      <div className="border border-gray-300 mt-6"></div>
    </>

  )
}

export default Orders