import React from "react";
import { projectsData } from "../../../data/projectsData";
import { useTranslation } from "react-i18next";
const Nearby = ({ selectedProject }) => {
	const { t, i18n } = useTranslation();
	return (
		<div className='flex justify-center items-center mt-6'>
			<div className='w-[80vw]'>
				<p className='text-big md:text-bigger font-bold text-primary'>
					{t("NearbyPlaces")}
				</p>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-6 mt-6'>
					{projectsData[selectedProject].Nearby.map((item, index) => {
						return (
							<div
								key={index}
								className='relative w-[95%] h-[250px] rounded-md text-white shadow-md'
							>
								<img
									src={item.Image}
									alt={item.Place[i18n.language]}
									className='w-full h-full object-cover object-center rounded-md'
								/>
								<div className='absolute top-0 left-0 w-full h-full bg-primary/40 rounded-md' />
								<p className='absolute top-5 left-5 text-smaller md:text-small font-semibold'>
									{item.Duration}
								</p>
								<p className='absolute bottom-5 right-5 text-smaller md:text-small font-bold drop-shadow-2xl'>
									{item.Place[i18n.language]}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Nearby;
