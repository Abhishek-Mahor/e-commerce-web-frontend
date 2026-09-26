import { useEffect, useMemo, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../../components/user/Header';
import Footer from '../../components/user/Footer';
import Banner1 from '../../components/user/Banner1';
import ProductCard from '../../components/user/ProductCard';


const Home = () => {

  const backend_url = import.meta.env.VITE_BACKEND_URL;

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const search = searchParams.get('search') || '';

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${backend_url}/api/products`);
        const data = response.data;
        setProducts(Array.isArray(data) ? data : []);
      } catch (error) {
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [backend_url]);

  const filteredProducts = useMemo(() => {
    return products.filter(product =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.description?.toLowerCase().includes(search.toLowerCase()) ||
      product.color?.toLowerCase().includes(search.toLowerCase())
    )
  });

  return (
    <div>
      <Header />
      <Banner1 />

      {search && (
        <div className='max-w-6xl mx-auto px-4 mt-6 flex justify-between items-center bg-gray-50 border p-3 rounded-lg'>
          <p className='text-sm text-gray-600 font-medium'>
            Showing results for: <span className='font-bold text-black'>"{search}"</span> ({filteredProducts.length} items found)
          </p>
          <button
            onClick={() => navigate('/')}
            className='text-xs text-red-500 hover:text-red-700 font-bold hover:underline cursor-pointer'
          >
            Clear Search
          </button>
        </div>
      )}

      <div className="flex flex-wrap gap-4 justify-center mt-5">
        {loading ? (
          <div className='text-center py-12 text-gray-500'>Loading products...</div>
        ) : (
          <>
            {filteredProducts.map((item, index) => (
              <ProductCard
                key={item._id || index}
                id={item._id}
                name={item.name}
                price={item.price}
                description={`Color: ${item.color}`}
                image={item.image}
              />
            ))}
            {filteredProducts.length === 0 && (
              <div className='text-center py-12'>
                does not match your qeury
              </div>
            )}
          </>
        )}
      </div>

      <Footer />
    </div>
  )
}

export default Home