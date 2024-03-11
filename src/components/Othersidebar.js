import { BsThreeDots } from 'react-icons/bs'
import doc from '../assets/doc.jpg'
import { IoIosArrowRoundForward } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import status from '../assets/circle.jpg'

function Othersidebar() {
  return (
    <div>
        <div className=" text-white w-[20rem] h-[125vh] bg-[#0d183887] px-2">
            <div>
                <div className='flex flex-col items-center gap-6 pb-10 pt-6'>
                    <img src={doc} alt='' className='w-[4rem] h-[4rem] rounded-sm'/>
                    <h1>DR. Dilip hotmaub</h1>
                </div>
                <div className='flex items-center pb-6 border-b-2'>
                    <div className='flex flex-col items-start gap-4 w-[8rem] border-r-2 pl-2'>
                        <p className='text-gray-600'>Apponsement</p>
                        <p className='text-[1.2rem]'>4250</p>
                    </div>
                    <div className='flex flex-col items-start gap-4 w-[8rem] border-r-2 pl-4'>
                        <p className='text-gray-600'>Totla patients</p>
                        <p className='text-[1.2rem]'>32.1K</p>
                    </div>
                    <div className='flex flex-col items-start gap-4 w-[8rem] pl-4'>
                        <p className='text-gray-600'>Rate</p>
                        <p className='text-[1.2rem]'>4.8</p>
                    </div>
                </div>
                <div className='pl-3'>
                    <div className="flex items-center justify-between py-6">
                        <h1 className="font-semibold text-[1.2rem]">Upcomming Appoinemet</h1>
                        <BsThreeDots className="text-[2rem] cursor-pointer mr-8"/>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <p className='text-blue-800'>july 30,2022</p>
                        <div className='border border-sky-700 w-[17rem]'></div>
                    </div>
                    <div className='border-b-2'>
                        <div className='flex items-center justify-between py-4'>
                            <div className='flex items-center gap-2'>
                                <GoDotFill className='text-[#A9A9A9]'/>
                                <p className='text-[#A9A9A]'>8:30 am, 10:30 am</p>
                            </div>
                            <IoIosArrowRoundForward className='text-[#A9A9A] mr-8 text-[1.4rem]'/>
                        </div>
                        <p className='pl-6'>Nurse visit 20</p>
                        <p className='text-[#A9A9A9] pl-6 pb-5'>Dr.Carole D.pollok</p>
                    </div>
                    <div className='border-b-2'>
                        <div className='flex items-center justify-between py-4'>
                            <div className='flex items-center gap-2'>
                                <GoDotFill className='text-[#A9A9A9]'/>
                                <p className='text-[#A9A9A]'>8:30 am, 10:30 am</p>
                            </div>
                            <IoIosArrowRoundForward className='text-[#A9A9A] mr-8 text-[1.4rem]'/>
                        </div>
                        <p className='pl-6'>Ahmad visit 15</p>
                        <p className='text-[#A9A9A9] pl-6 pb-5'>Dr.Carole D.pollok</p>
                    </div>

                    <div>
                    <h1 className="font-semibold text-[1.2rem] py-4">Patient Satifaction</h1>
                    <div className='flex items-center justify-around'>
                        <img src={status} alt='' className='w-[7rem] h-[7rem] bg-transparent'/>
                        <div>
                            <div className='flex items-center gap-6'>
                                <div className='w-[1rem] h-[1rem] bg-blue-700'></div>
                                <p>Excellent</p>
                            </div>
                            <div className='flex items-center gap-6'>
                                <div className='w-[1rem] h-[1rem] bg-orange-700'></div>
                                <p>Good</p>
                            </div>
                            <div className='flex items-center gap-6'>
                                <div className='w-[1rem] h-[1rem] bg-green-700'></div>
                                <p>Poor</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Othersidebar