// frontend/src/app/page.tsx
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <main className="bg-white text-gray-800">
        <section className="hero bg-primary text-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6 animate__animated animate__fadeIn">Welcome to Tile Hub!</h1>
            <p className="mb-6 animate__animated animate__fadeIn animate__delay-1s">Discover premium ceramic tiles for your home and office!</p>
            <button className="bg-secondary text-white py-2 px-6 rounded-lg hover:bg-gray-700 transition duration-300 animate__animated animate__fadeIn animate__delay-2s">
              Shop Now
            </button>
          </div>
        </section>
        <section className="products py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Top Products</h2>
            <div className="grid grid-cols-3 gap-10">
              {/* Add product cards here */}
              <div className="product-card p-6 bg-gray-100 rounded-lg shadow-lg hover:scale-105 transition duration-300 ease-in-out">
                <img src="/images/tile-1.jpg" alt="Product 1" className="w-full h-48 object-cover mb-4" />
                <h3 className="text-xl font-semibold mb-2">Modern Ceramic Tile</h3>
                <p className="mb-4">Perfect for contemporary spaces.</p>
                <button className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300">View Details</button>
              </div>
              {/* Repeat Product Cards */}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
