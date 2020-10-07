// Import Packages
import React from 'react'

// Import Components
import Slider from '../components/Slider'
import ProductCatalog from '../components/ProductCatalog'

/**
 * @page Homepage
 */
const Home = () => {
  const productsToDisplay = [
    {
      copy: 'Powerful design with simple but beautiful elements is real',
      image: {
        alt: 'Kitten image.',
        src: 'https://placekitten.com/1000/1000'
      },
      params: {
        width: '27.5 cm',
        lengthval: '24 cm',
        height: '9.5 cm',
        weight: '950 g'
      },
      price: 38,
      thumb: {
        alt: 'This is a thumbnail.',
        src: '/images/plane.png'
      },
      title: 'Wooden Plane',
      type: 'Wooden Toys'
    },
    {
      copy: 'Powerful design with simple but beautiful elements is real',
      image: {
        alt: 'Kitten image.',
        src: 'https://placekitten.com/1001/1001'
      },
      params: {
        width: '26.5 cm',
        lengthval: '22 cm',
        height: '12.5 cm',
        weight: '1200 g'
      },
      price: 58,
      thumb: {
        alt: 'This is a thumbnail.',
        src: '/images/boat.png'
      },
      title: 'Wooden Boat',
      type: 'Wooden Toys'
    }
  ]

  return (
    <section id="home">

      <ProductCatalog products={productsToDisplay} />

      {/* <Slider /> */}

      {/* <div className="w-1/2 h-64 flex flex-row bg-red-200 border-dashed border-2 border-red-900">
        <div className="h-full w-1/3 even:bg-blue-300"></div>
        <div className="h-full w-1/3 even:bg-blue-300"></div>
        <div className="h-full w-1/3 even:bg-blue-300"></div>
        <div className="h-full w-1/3 even:bg-blue-300"></div>
        <div className="h-full w-1/3 even:bg-blue-300"></div>
      </div>

      <div className="w-20 mx-auto bg-white divide-y-8 divide-red-400 shadow-2xl hover:shadow-md hover:translate-y-2 transform transition duration-500 ease-in-out cursor-pointer">
        <div className="text-center py-2">1</div>
        <div className="text-center py-2">2</div>
        <div className="text-center py-2">3</div>
      </div> */}
    </section>
  )
}

export default Home