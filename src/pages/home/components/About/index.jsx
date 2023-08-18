import React from "react";
import dubaiImage from "../../../../assets/images/aboutus/dubai.webp";
import logo from "../../../../assets/logos/white-logo.svg";

const About = () => {
	return (
		<div className='py-24 px-[5%] rounded-md '>
			<div
				style={{
					backgroundImage: `url(${dubaiImage})`,
				}}
				className='rounded-md bg-no-repeat bg-cover bg-center md:h-[500px]'
			>
				<div className='bg-black/50 h-full p-[5%]'>
					<img src={logo} alt='AVA Logo' className='w-32 h-32' />
					<div className='md:grid md:grid-cols-2 place-items-center text-white py-10'>
						<p className='font-bold text-big '>
							All you need about Dubai apartments, in one place
						</p>
						<p>
							At AVA Real Estate, our vision is to be The Best Real Estate
							Company in the industry. Both in the minds of people and the
							communities. We expect and believe in delivering The Best we have
							to offer by always keeping our values at the top without
							compromising customer values. We want to create The Best working
							environment where everyone has equal opportunity to grow and be
							proud of working together for the growth of the communities and
							the nation.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
