// Import Packages
import React, { useState } from 'react'
import PropTypes from 'prop-types'

const ProductCatalog = ({ products }) => {
  let [currentIndex, updateCurrentIndex] = useState(0)
  const thumbActiveClasses = " bg-white shadow-lg -translate-y-1 xl:translate-x-1"
  const thumbInactiveClasses = " bg-gray-100"

  /**
   * Method for sliding to previous product
   */
  const _prev = () => {
    if (currentIndex - 1 >= 0) {
      updateCurrentIndex(currentIndex - 1)
    }
  }

  /**
   * Method for sliding to next product
   */
  const _next = () => {
    if (currentIndex + 1 <= products.length - 1) {
      updateCurrentIndex(currentIndex + 1)
    }
  }

  /**
   * Method for sliding to the X product
   */
  const _slideToX = (productIndex) => {
    updateCurrentIndex(productIndex)
  }

  return (
    <section
      id="product-catalog"
      className="product-catalog w-10/12 max-w-screen-lg mx-auto mt-10 flex flex-col md:flex-row"
    >
      <div
        className="detail-pane bg-white p-5 rounded-tr-lg rounded-tl-lg md:w-1/2 md:rounded-tr-none md:rounded-bl-lg xl:flex"
      >
        {products.map((product, i) => (
          <div
            key={product.title}
            className={`product-info xl:w-3/4 xl:order-2 xl:mx-auto ${
              i !== currentIndex ? ' hidden' : ''
            }`}
          >
            {product.type && (
              <p
                className="product-type text-xs text-gray-500 font-bold uppercase tracking-wider"
              >
                {product.type}
              </p>
            )}

            <div className="title-container flex">
              <h3 className="product-title text-3xl text-gray-900 font-medium">
                {product.title}
              </h3>

              <div
                className="product-price flex justify-center items-center h-6 px-2 ml-2 rounded-full bg-orange-200 text-orange-500 text-sm font-bold"
              >
                <p>
                  ${product.price}
                </p>
              </div>
            </div>

            <p
              className="product-copy mt-4 mb-4 text-gray-700"
            >
              {product.copy}
            </p>

            <button
              className="btn-buy bg-teal-500 rounded-lg text-white py-2 px-4 mb-8"
            >
              Buy Now
            </button>

            <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-2">
              Parameters
            </p>
            <table className="product-data block w-64 table-auto mb-10 border-2 border-solid rounded-lg">
              <tbody className="block">
                <tr className="block flex border-b-2 border-solid border-gray-200">
                  <td className="w-1/2 p-4 text-sm text-gray-500 font-bold">Width</td>
                  <td className="w-1/2 p-4 border-l-2 border-solid border-gray-200">{product.params.width}</td>
                </tr>
                <tr className="block flex border-b-2 border-solid border-gray-200">
                  <td className="w-1/2 p-4 text-sm text-gray-500 font-bold">Length</td>
                  <td className="w-1/2 p-4 border-l-2 border-solid border-gray-200">{product.params.lengthval}</td>
                </tr>
                <tr className="block flex border-b-2 border-solid border-gray-200">
                  <td className="w-1/2 p-4 text-sm text-gray-500 font-bold">Height</td>
                  <td className="w-1/2 p-4 border-l-2 border-solid border-gray-200">{product.params.height}</td>
                </tr>
                <tr className="block flex">
                  <td className="w-1/2 p-4 text-sm text-gray-500 font-bold">Weight</td>
                  <td className="w-1/2 p-4 border-l-2 border-solid border-gray-200">{product.params.weight}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}

        {products.length > 1 && (
          <div className="product-slide w-full flex justify-between xl:w-auto xl:order-1 xl:flex-col">
            <button
              className="btn-prev"
              onClick={() => _prev()}
            >
              Prev
            </button>
            <ul className="frame w-full flex justify-around xl:flex-col xl:items-center xl:flex-grow">
              {products.map((product, i) => (
                <li
                  key={product.thumb.src}
                  className={`product-thumb w-20 h-26 rounded-lg transform transition transition-all duration-200 ${
                    i === currentIndex ? thumbActiveClasses : thumbInactiveClasses
                  }`}
                >
                  <button
                    className="block"
                    onClick={() => _slideToX(i)}
                  >
                    <img
                      className="object-cover"
                      src={product.thumb.src}
                      alt={product.thumb.alt}
                    />
                  </button>
                </li>
              ))}
            </ul>
            <button
              className="btn-next"
              onClick={() => _next()}
            >
              Next
            </button>
          </div>
        )}
      </div>
      <div
        className="gallery-pane block md:w-1/2"
      >
        <ul className="gallery-list h-full">
          {products.map((product, i) => (
            <li className={`gallery-item h-full${
              currentIndex === i ? '' : ' hidden'
            }`}>
              <img
                className="object-cover w-full h-64 md:h-full"
                style={{
                  maxHeight: '635px'
                }}
                src={product.image.src}
                alt={product.image.alt || 'No alt description.'}
              />
            </li>
          ))}
        </ul>
        
      </div>
    </section>
  )
}

ProductCatalog.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired
}

export default ProductCatalog