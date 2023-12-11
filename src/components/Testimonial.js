import React from 'react'
import Card from './Card'
import {useState}from 'react';
import { FaChevronLeft ,FaChevronRight } from "react-icons/fa";

function Testimonial({data})
{
    const[val,setVal]=useState(0);
    function LeftShiftHandler()
    {
        if(val-1 < 0)
        {
            setVal(data.length-1);
        }
        else
        {
            setVal(val-1);
        }
    }

    function RightShiftHandler()
    {
        if(val + 1 >= data.length)
        {
            setVal(0);    
        }
        else setVal(val+1);
    }

    function surpriseHandler()
    {
        let ans=Math.floor(Math.random() * data.length);
        setVal(ans);
    }
  return (
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-500  hover:shadow-lg rounded-md'>
        <Card data={data[val]}></Card>

        {/* BUtton Section */}
        
        <div className='flex text-3xl mt-8 gap-3 text-violet-400 font-semibold justify-center'>
            <button onClick={LeftShiftHandler} className='cursor-pointer hover:text-violet-500'>
                <FaChevronLeft />
            </button>

            <button onClick={RightShiftHandler} className='cursor-pointer hover:text-violet-500'>
                <FaChevronRight />
            </button>
        </div>
        <div className='mt-5'>
            <button onClick={surpriseHandler} className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 
            cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg'>Surprise Me</button>
        </div>
    </div>
  )
}

export default Testimonial