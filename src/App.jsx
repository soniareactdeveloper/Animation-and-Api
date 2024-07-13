import './App.css'
import { IoIosSpeedometer } from "react-icons/io";
import { FaGasPump } from "react-icons/fa6";
import { MdAutoMode } from "react-icons/md";
import { useEffect, useState } from 'react';
import cars from './ProductData';

function App() {
  const [data, setData] = useState(cars);

  const handleFilter = (carsName) => {
    const filterData = cars.filter((categoryItem) => categoryItem.category === carsName);
    setData(filterData);
  };

  useEffect(() => {
    let single_card = document.querySelectorAll('.single_card');

    single_card.forEach((items) => {
      items.classList.remove('animation');
      void items.offsetWidth;
      items.classList.add('animation');
    });

  }, [data]);

  return (
    <>
      <div className="w-full min-h-screen bg-gradient-to-r from-[#5A72A0] pb-10">
        <nav>
          <div className="container pt-5">
            <div className="flex justify-end items-center flex-wrap gap-5 rounded-lg py-3 px-10 bg-[#1A2130]">
              <button onClick={() => setData(cars)} className=' text-white text-[24px] font-bold font-serif transition-[0.5s] hover:text-[#FFDB00]'>All</button>
              <button onClick={() => handleFilter("SUV")} className=' text-white text-[24px] font-bold font-serif transition-[0.5s] hover:text-[#FFDB00]'>SUV</button>
              <button onClick={() => handleFilter("Sedan")} className=' text-white text-[24px] font-bold font-serif transition-[0.5s] hover:text-[#FFDB00]'>Sedan</button>
              <button onClick={() => handleFilter("Truck")} className=' text-white text-[24px] font-bold font-serif transition-[0.5s] hover:text-[#FFDB00]'>Truck</button>
            </div>
          </div>
        </nav>
        <div className="container pt-10 flex flex-wrap gap-9 justify-center">
          {
            data.map((items, i) => (
              <div key={i} className="allcard single_card relative w-[320px] h-[430px] bg-[#e3dde6] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-lg">
                <div className="img flex justify-center items-center flex-col">
                  <img className='rounded-t-lg w-full h-[200px]' src={items.img} alt="cars" />
                  {
                    items.discountPrice &&
                    <h2 className=' absolute top-3 left-5 text-[30px] font-bold font-sans px-4 bg-[#EB5B00] text-white rounded-md'>Sale</h2>
                  }
                  <div className="details flex flex-col flex-wrap items-center">
                    <h2 className='text-xl font-bold text-black font-sans p-1'>{items.model}</h2>
                    <h3 className='text-[11px] font-semibold text-[#4a4949] font-mono'>{items.description}</h3>
                    <div className="mile flex justify-center gap-5 pt-4">
                      <h3 className='flex justify-center items-center flex-col text-xl text-[#1A2130]'><span><IoIosSpeedometer className='text-[30px]' /></span>{items.miles}</h3>
                      <h3 className='flex justify-center items-center flex-col text-xl text-[#1A2130]'><span><FaGasPump className='text-[30px]' /></span>{items.fuelType}</h3>
                      <h3 className='flex justify-center items-center flex-col text-xl text-[#1A2130]'><span><MdAutoMode className='text-[30px]' /></span>{items.transmission}</h3>
                    </div>
                    <h2 className='text-[24px] font-bold text-[#EB5B00] font-sans flex gap-7 mt-6'>{items.discountPrice ? items.discountPrice : items.price} <span className='text-[#405D72] line-through'>{items.discountPrice && items.price}</span></h2>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App;


