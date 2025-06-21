import React from 'react'

const CustomButton = ({ btnText, onClick, isActive }) => {
    return (
        <button onClick={onClick} className={`px-[12px] cursor-pointer hover:text-white hover:bg-[#14191C] transition-all duration-200 ease-linear ff-poppins py-[5.5px] text-[#14191C] font-medium text-xs border border-[#14191C] rounded-[9px] ${isActive ? 'bg-[#14191C] text-white' : ''}`}>{btnText}</button>
    )
}

export default CustomButton