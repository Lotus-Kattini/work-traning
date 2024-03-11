import { CiSearch } from "react-icons/ci";
import { FaMicrophoneLines } from "react-icons/fa6";
import { FaUserGroup } from "react-icons/fa6";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { FaClockRotateLeft } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import img from '../assets/person.jpg'
import { AiOutlineEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";


function Home() {
  return (
    <div className="">
        <div className="px-4 flex items-center justify-between w-[55rem] max-w-full">
            <div className="flex items-center p-2 rounded-sm bg-gray-400 text-white placeholder:text-white outline-none px-4">
                <CiSearch/>
                <input type="text" placeholder={'search'} className="pl-2 bg-transparent placeholder:text-white outline-none border-none"/>
                <FaMicrophoneLines/>
            </div>
            <select className="outline-none bg-transparent p-3 cursor-pointer text-gray-300">
                <option>English</option>
                <option>Arabic</option>
            </select>
        </div>
        <div className="px-4 pt-10 text-white">
            <h1 className="pb-4">Overview</h1>
            <div className="flex items-center gap-[2rem]">
                <div className="w-[262px] px-4 py-3 h-[161px] bg-[#0B1739] rounded-[1.2rem]">
                <div className="  flex items-start justify-between">
                    <div className="flex flex-col items-start gap-[2rem]">
                    <p className="text-gray-300">Total Patient</p>
                    <p className="font-semibold text-[1.5rem]">401</p>
                    </div>
                    <div className="bg-[#8280FF] opacity-[50%] p-2 w-[60px] h-[60px] rounded-[1.2rem] flex items-center justify-center text-lg">
                        <FaUserGroup/>
                    </div>
                </div>
                <div className="text-gray-300 pt-4 flex items-center"><FaRegArrowAltCircleUp className="text-green-500"/> <span className="text-green-700">8.5%</span>Up from last month</div>
                </div>
                <div className="w-[262px] px-4 py-3 h-[161px] bg-[#0B1739]  rounded-[1.2rem]">
                <div className="  flex items-start justify-between">
                    <div className="flex flex-col items-start gap-[2rem]">
                    <p className="text-gray-300">Total Staff</p>
                    <p className="font-semibold text-[1.5rem]">401</p>
                    </div>
                    <div className="bg-[#4AD991] opacity-[50%] p-2 w-[60px] h-[60px] rounded-[1.2rem] flex items-center justify-center text-lg">
                        <FaUserDoctor/>
                    </div>
                </div>
                <div className="text-gray-300 pt-4 flex items-center"><FaRegArrowAltCircleUp className="text-green-500"/> <span className="text-green-700">8.5%</span>Up from last month</div>
                </div>
                <div className="w-[262px] px-4 py-3 h-[161px] bg-[#0B1739]  rounded-[1.2rem]">
                <div className="  flex items-start justify-between">
                    <div className="flex flex-col items-start gap-[2rem]">
                    <p className="text-gray-300">Appoionements</p>
                    <p className="font-semibold text-[1.5rem]">401</p>
                    </div>
                    <div className="bg-[#FF9066] opacity-[50%] p-2 w-[60px] h-[60px] rounded-[1.2rem] flex items-center justify-center text-lg">
                        <FaClockRotateLeft/>
                    </div>
                </div>
                <div className="text-gray-300 pt-4 flex items-center"><FaRegArrowAltCircleUp className="text-green-500"/> <span className="text-green-700">8.5%</span>Up from last month</div>
                </div>
            </div>
        </div>

        <div className="px-4 py-3 text-white w-[55rem] max-w-full">
            <div className="bg-[#0B1739] px-4 py-3 rounded-md">
                <div className="flex items-center justify-between">
                    <h1 className="font-semibold text-[1.5rem]">Patients</h1>
                    <select className="outline-none bg-[#081028] p-3 cursor-pointer text-gray-300">
                        <option>This month</option>
                        <option>Arabic</option>
                    </select>
                </div>
                <div className="relative">
                    <div className="flex items-center justify-start z-1 h-[3rem]"> 
                        <p className="mr-4">200</p>
                        <div className="border w-[40rem] border-slate-400"></div>
                    </div>
                    <div className="flex items-center justify-start z-1 h-[3rem]"> 
                        <p className="mr-4">100</p>
                        <div className="border w-[40rem] border-slate-400"></div>
                    </div>
                    <div className="flex items-center justify-start z-1 h-[3rem]"> 
                        <p className="mr-4">50</p>
                        <div className="border w-[40rem] border-slate-400"></div>
                    </div>
                    <div className="custom absolute z-5 -top-6 left-4"></div>
                </div>
                <div className="flex items-center justify-between">
                    <h1 className="font-semibold text-[1.5rem]">Patients Data</h1>
                    <BsThreeDots className="text-[2rem] cursor-pointer mr-8"/>
                </div>
                <div>
                <table class="table-auto w-[50rem]">
                    <thead>
                        <tr >
                        <th className="text-[#A9A9A9]">Patient Name</th>
                        <th className="text-[#A9A9A9]">Date in</th>
                        <th className="text-[#A9A9A9]">Symptoms</th>
                        <th className="text-[#A9A9A9]">Status</th>
                        <th className="text-[#A9A9A9]">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td className="flex items-center gap-2">
                            <img src={img} alt="" className="w-[2rem] h-[2rem] rounded-[0.5rem]"/>
                            <p>Jenny willson</p>
                        </td>
                        <td className="font-sans text-gray-600">DES 18,2024</td>
                        <td>Gerication</td>
                        <td className="text-green-500">Confiermed</td>
                        <td className="flex items-center gap-3">
                            <AiOutlineEdit className="text-gray-600 text-[1.5rem]"/>
                            <MdDelete className="text-red-600 text-[1.5rem]"/>
                        </td>
                        </tr>
                        <tr>
                        <td className="flex items-center gap-2">
                            <img src={img} alt="" className="w-[2rem] h-[2rem] rounded-[0.5rem]"/>
                            <p>Jenny willson</p>
                        </td>
                        <td className="font-sans text-gray-600">DES 18,2024</td>
                        <td>Internset</td>
                        <td className="text-orange-500">Incoming</td>
                        <td className="flex items-center gap-3">
                            <AiOutlineEdit className="text-gray-600 text-[1.5rem]"/>
                            <MdDelete className="text-red-600 text-[1.5rem]"/>
                        </td>
                        </tr>
                        <tr>
                        <td className="flex items-center gap-2">
                            <img src={img} alt="" className="w-[2rem] h-[2rem] rounded-[0.5rem]"/>
                            <p>Jenny willson</p>
                        </td>
                        <td className="font-sans text-gray-600">DES 18,2024</td>
                        <td>Gerication</td>
                        <td className="text-green-500">Confiermed</td>
                        <td className="flex items-center gap-3">
                            <AiOutlineEdit className="text-gray-600 text-[1.5rem]"/>
                            <MdDelete className="text-red-600 text-[1.5rem]"/>
                        </td>
                        </tr>
                        <tr>
                        <td className="flex items-center gap-2">
                            <img src={img} alt="" className="w-[2rem] h-[2rem] rounded-[0.5rem]"/>
                            <p>Jenny willson</p>
                        </td>
                        <td className="font-sans text-gray-600">DES 18,2024</td>
                        <td>Gerication</td>
                        <td className="text-red-500">Canseled</td>
                        <td className="flex items-center gap-3">
                            <AiOutlineEdit className="text-gray-600 text-[1.5rem]"/>
                            <MdDelete className="text-red-600 text-[1.5rem]"/>
                        </td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home