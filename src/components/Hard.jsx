import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CustomButton from './common/CustomButton';
import { ALPHABET_LIST } from '../utils/helper';
import woodImg from '../assets/images/png/wood-img.png';
import girlImg from '../assets/images/png/girl-img.png';

const Hard = () => {
    const { type, alphabet_name } = useParams();
    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState('');
    const [activeAlphabet, setActiveAlphabet] = useState('');

    const handleCategoryClick = (category) => {
        navigate(`/category/${category.toLowerCase()}`);
        setActiveCategory(category);
    };

    const getHeadingText = () => {
        if (type === 'all') return 'all';
        if (type === 'pop') return 'pop';
        if (type === 'rock') return 'rock';
        if (type === 'more') return 'more';
        return "soft"
    };

    const handleAlphabetClick = (alphabet) => {
        navigate(`/alphabet/${alphabet.toLowerCase()}`);
        setActiveAlphabet(alphabet);
    };

    const getAlphabet = () => {
        return alphabet_name ? alphabet_name : '';
    }

    return (
        <div className="flex justify-center items-center py-24.5 px-3">
            <div className="max-w-[1140px] mx-auto w-full">
                <div className="w-full overflow-x-auto max-w-[1059px]">
                    <div className="flex gap-[5px] whitespace-nowrap items-center">
                        <CustomButton
                            btnText={"All"}
                            isActive={activeCategory === "all"}
                            onClick={() => handleCategoryClick("all")}
                        />
                        <CustomButton
                            btnText={"Pop"}
                            isActive={activeCategory === "pop"}
                            onClick={() => handleCategoryClick("pop")}
                        />
                        <CustomButton
                            btnText={"Rock"}
                            isActive={activeCategory === "rock"}
                            onClick={() => handleCategoryClick("rock")}
                        />
                        <CustomButton
                            btnText={"More"}
                            isActive={activeCategory === "more"}
                            onClick={() => handleCategoryClick("more")}
                        />
                        {ALPHABET_LIST.map((item, index) => (
                            <button key={index}
                                onClick={() => handleAlphabetClick(item)} className={`hover:bg-[#14191C] hover:text-white rounded-full min-h-[26px] min-w-[26px] flex items-center justify-center cursor-pointer transition-all duration-200 ease-linear text-xs leading-[18px] ff-poppins text-[#14191C] 
                            ${activeAlphabet === item && getAlphabet().toUpperCase() === item ? 'bg-black text-white' : ''}`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="w-full bg-img rounded-[22px] py-9 px-3 md:px-6 lg:pt-9 lg:pb-[43px] lg:pl-[48px] lg:pr-[43px] mt-[43px] relative">
                    <div className="absolute top-0 left-0 w-full h-full bg-[#14191C] opacity-100 z-0 rounded-[22px]"></div>
                    <div className="md:flex md:justify-between gap-4 max-md:pb-5 relative z-10">
                        <h1 className="ff-montserrat max-md:text-center font-bold text-4xl md:text-5xl leading-[100%] uppercase text-[#FAFAFF]">
                            hit me hard and {getHeadingText()}
                        </h1>
                        <img className="max-md:pt-5 max-md:mx-auto pointer-events-none" src={woodImg} alt="wood-img" />
                    </div>
                    <div className="flex gap-3 md:gap-6.5 items-center relative justify-center md:absolute md:-bottom-12 lg:-bottom-16 z-10">
                        <img className="size-[130px] md:size-[170px] pointer-events-none lg:size-[206px]" src={girlImg} alt="girl-img" />
                        <div>
                            <h3 className="ff-poppins font-semibold text-2xl lg:text-[32px] leading-normal lg:leading-[42px] text-white pb-[5px]">
                                Billie Eilish {getAlphabet().toUpperCase()}
                            </h3>
                            <p className="font-medium text-sm sm:text-base leading-[100%] text-[#CECECE] ff-montserrat">
                                Released May 17, 2024
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hard;
