import React from "react";
import { projectsData } from "../../../data/projectsData";
import { useTranslation } from "react-i18next";
const Info = ({ selectedProject }) => {
	const { i18n } = useTranslation();
	return (
		<div className='flex flex-col justify-center items-center mt-12'>
			<div className='w-[80vw] flex flex-col justify-center items-center'>
				<p className='font-semibold text-med sm:text-big text-center'>
					{projectsData[selectedProject].InfoTitle[i18n.language]}
				</p>
				<p className='text-smaller text-center md:w-[50%]'>
					{projectsData[selectedProject].InfoSubTitle[i18n.language]}
				</p>
				<div className='flex max-sm:flex-col sm:gap-x-6 mt-4 max-sm:space-y-2'>
					{projectsData[selectedProject].InfoData.map((item, index) => {
						return (
							<div className='flex items-center gap-x-1' key={index}>
								<img
									src={item.Icon}
									alt={item.Title}
									className='h-10 md:h-16 w-10 md:w-16'
								/>
								<div className='space-y-1'>
									<p className='font-bold text-smaller md:text-small'>
										{item.Title[i18n.language]}
									</p>
									<p className='text-tiny md:text-smaller'>
										{item.SubTitle[i18n.language]}
									</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Info;
