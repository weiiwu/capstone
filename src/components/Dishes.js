import React from 'react'

const Dishes = (props) => {
    return (
        <>
            <section className="bg-white px-4 py-10">
                <div className="container-xl lg:container m-auto">

                    <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                        {props.dishes.map((prop) => (

                            <div className="bg-white rounded-xl relative">
                                <div className="p-4">

                                    <div className="flex flex-col lg:flex-row justify-between mb-4">

                                        <div>
                                            <div className="mb-6">
                                                <h3 className="text-xl font-bold">{prop.name}</h3>
                                            </div>

                                            <div className="mb-5 text-gray-700 mr-4">
                                                {prop.desc}
                                            </div>

                                            <h3 className="text-gray-700 mb-2">${prop.price}</h3>

                                        </div>

                                        <div className="flex space-x-2">
                                            <img key={props.id}
                                                className="custom-img" src={require('../assets/images/' + prop.img)} alt={prop.img}
                                            />
                                        </div>


                                    </div>
                                    <div className="border border-gray-100 mb-5"></div>

                                </div>
                            </div>

                        ))}

                    </div>
                </div>
            </section>
        </>
    )
}

export default Dishes