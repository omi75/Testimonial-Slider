import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { MdDarkMode , MdOutlineDarkMode } from "react-icons/md";
import { useState } from 'react';

function Card({data}) {
    const [theme,setTheme] = useState(false);
    const [mode,setMode] = useState("Light");

    // Theme Function
    
    function themeHandler(theme)
    {
        if(theme===false && mode==="Light")
        {
            setTheme(true);
            setMode("Dark")
        }
        else
        {
            setTheme(false);
            setMode("Light")
        }
    }

  return (
    <div className='flex flex-col md:relative'>
        <div className='absolute top-[-7rem] z-[5] mx-auto'>
            <img src={data.image} className='aspect-square rounded-full w-[140px] h-[140px] z-[3] object-cover' 
            loading='lazy' alt=""/>
            <div className='absolute aspect-square rounded-full w-[140px] h-[140px] bg-violet-500 top-[-6px] left-[10px] z-[-1]'></div>
           
        {   
           theme ? 
            <div className='flex items-center absolute right-[-29em] top-[95px] gap-1 cursor-pointer' onClick={()=>themeHandler(theme)}>
                <MdDarkMode className="w-5 h-6"/>
                <span className='text-md font-semibold'>{mode}</span>
            </div> :
            
            <div className='flex items-center absolute right-[-29em] top-[95px] gap-1 cursor-pointer' onClick={()=>themeHandler(theme)}>
                <MdOutlineDarkMode className='w-5 h-6'/>
                <span className='text-md font-semibold' >{mode}</span>
            </div>
        }   
        </div>
        
        <div className='text-center mt-7'>
            <h2 className='font-bold text-2xl capitalize'>{data.name}</h2>
            <h4 className='uppercase text-center text-sm text-violet-300'>{data.state}</h4>
        </div>
        
        <div>
            <FaQuoteLeft className='text-violet-400 mx-auto mt-5'/>
            <p className='text-center mt-4 text-slate-500 break-words'>{data.info}</p>
            <FaQuoteRight className='text-violet-400 mx-auto mt-5'/>
        </div>
       
    </div>
  )
}

export default Card;