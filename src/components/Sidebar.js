import { useRef, useState } from "react"
import { FaArrowUp } from "react-icons/fa";
import img from '../assets/logo.jpg'
import person from '../assets/person.jpg'

function Sidebar() {

    const[opendropdown,setopendropdown]=useState(false)
    const dropref=useRef()
    console.log(opendropdown)
    console.log(!opendropdown)
    function handeldropDown(){
        setopendropdown((prev)=>!prev)
        if(opendropdown){
            dropref.current.classList.add('active')
        }
        else{
            dropref.current.classList.remove('active')
        }
    }

  return (
    <div className="">
        <div className="hidden md:block text-white w-[220px] h-[110vh] bg-[#0d183887] px-2">
            <div className="flex items-center justify-center">
                <img src={img} alt="logo"/>
            </div>
            <div className="dropdown">                
                <div onClick={handeldropDown} className="cursor-pointer flex items-center justify-between p-2 rounded-md mt-4 hover:bg-[#081028] transition-all duration-500"><p>Dashboard</p><FaArrowUp className="text-gray-300"/></div>
                <div ref={dropref} className="dropdown-menu ">
                    <ul>
                        <li className="my-2">Overview</li>
                        <li className="my-2">Reports</li>
                        <li className="my-2">Appoinsement</li>
                        <li className="my-2">Schedule</li>
                        <li className="my-2">Finantial</li>
                    </ul>
                </div>
            </div>
            <div className={`${!opendropdown && 'mt-[16rem]'}`}>
            <div className="dropdown">                
                <div className="cursor-pointer  flex items-center justify-between p-2 rounded-md mt-4 hover:bg-[#081028] transition-all duration-500"><p>Features</p><FaArrowUp className="text-gray-300"/></div>
            </div>
            <div className="dropdown">                
                <div className="cursor-pointer  flex items-center justify-between p-2 rounded-md mt-4 hover:bg-[#081028] transition-all duration-500"><p>Users</p><FaArrowUp className="text-gray-300"/></div>
            </div>
            <div className="dropdown">                
                <div className="cursor-pointer  flex items-center justify-between p-2 rounded-md mt-4 hover:bg-[#081028] transition-all duration-500"><p>Prising</p><FaArrowUp className="text-gray-300"/></div>
            </div>
            <div className="dropdown">                
                <div className="cursor-pointer  flex items-center justify-between p-2 rounded-md mt-4 hover:bg-[#081028] transition-all duration-500"><p>Integration</p><FaArrowUp className="text-gray-300"/></div>
            </div>
            <div className="border-b pt-4"></div>
            <div className="dropdown">                
                <div className="cursor-pointer  flex items-center justify-between p-2 rounded-md mt-4 hover:bg-[#081028] transition-all duration-500"><p>Settings</p><FaArrowUp className="text-gray-300"/></div>
            </div>
            <div className="dropdown">                
                <div className="cursor-pointer  flex items-center justify-between p-2 rounded-md mt-4 hover:bg-[#081028] transition-all duration-500">
                    <div className="flex items-center gap-4">
                        <img src={person} className="rounded-[50%] w-[3rem] h-[3rem]"/>
                        <div>
                        <p>John Capeton</p>
                        <span className="text-gray-500 font-thin">Doctor</span>
                        </div>
                    </div>
                    <FaArrowUp className="text-gray-300"/>
                </div>

            </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar