import React from 'react'

function Footer() {
    return (
        <>
            <div className=' bg-[#FAFBFC] h-[60px] flex justify-between items-center w-[calc(100%-276px)] ml-[276px] px-8 max-lg:ml-[60px] max-lg:w-[calc(100%-60px)] max-sm:text-[10px] max-sm:px-2 max-[400px]:text-[8px] max-sm:ml-0 max-sm:w-full'>


                <div className='flex gap-3'>
                    <button>Footer Link 1</button>
                    <button>Footer Link 2</button>
                </div>
                <div className='flex gap-3'>
                    <button>Footer Link 3</button>
                    <button><span className='bg-[#73A839] px-1 text-white text-[12px] rounded-sm max-[400px]:text-[8px]'>NEW</span> Footer Link 4</button>
                </div>
            </div>
        </>
    )
}

export default Footer