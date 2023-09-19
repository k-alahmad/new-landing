import React, { useEffect } from "react";
import GradientText from "../../components/UI/GradientText";
import JobForm from "./components/Job/JobForm";
import Header from "./components/Header";
import JobInfo from "./components/Job/JobInfo";
import Head from "../../components/Layout/PageContainer/Head";
const JobApplicationPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className='flex flex-col items-center'>
			<Head
				title={"Join us"}
				desc={"Join our team."}
				keywords={
					"Jobs at Ava Real Esatate, Jobs in Dubai, Real Estate Jobs, Agents, Real Estate Consultant"
				}
				canonicalLink={"/jobs"}
			/>
			<Header />
			<div className='flex flex-col items-center w-full xl:w-[1270px] my-12 max-xl:px-4'>
				<JobInfo />
				<JobForm />
			</div>
		</div>
	);
};

export default JobApplicationPage;
