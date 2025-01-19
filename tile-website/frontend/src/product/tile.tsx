// frontend/src/app/product/[id].tsx
import { useRouter } from 'next/router';

const ProductDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="container mx-auto py-16">
      <h2 className="text-4xl font-semibold text-center mb-8">Product {id} Details</h2>
      <div className="flex justify-center">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/2">
          <img
            src={`https://via.placeholder.com/500x500?text=Product+${id}`}
            alt={`Product ${id}`}
            className="w-full h-72 object-cover mb-6"
          />
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Product Name {id}</h3>
          <p className="text-gray-600 mb-6">
            Description for Product {id}. This is where you can provide detailed information about the product.
          </p>
          <p className="text-xl text-blue-600 font-semibold">$29.99</p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
