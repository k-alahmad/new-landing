import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../data/articlesData";
const ArticlePage = () => {
	const { slug } = useParams();
	const [article, setArticle] = useState();
	useEffect(() => {
		let tempData = data.articles.find((a) => a.slug == slug);
		setArticle(tempData);
	}, [slug]);
	return (
		<div className='flex flex-col justify-center items-center'>
			<div className='h-[500px] relative w-full '>
				<img
					src={article?.mainImage}
					className='h-full w-full object-cover object-bottom'
					alt=''
				/>
				<div className='absolute h-full w-full bg-secondary/50 top-0 left-0' />
				<div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-30 text-white'>
					<p className='font-semibold text-med md:text-big text-center w-[70%] 2xl:w-[50%] drop-shadow-2xl'>
						{article?.title}
					</p>
				</div>
			</div>
			<div className='max-w-[1280px]'>
				<div className='p-4 md:p-8 space-y-12'>
					<div className='flex items-center gap-x-4'>
						<img
							src={article?.author?.image}
							className='h-[150px] w-[100px] lg:h-[100px] lg:w-[100px] rounded-md object-cover object-top'
							alt=''
						/>
						<div>
							<p className='font-semibold text-smaller md:text-med'>
								{article?.title}
							</p>
							<p className='text-tiny md:text-smaller font-medium'>
								{article?.author?.name}
							</p>
							<div className='flex items-center gap-x-4'>
								<p className='text-tiny md:text-smaller font-medium'>
									{article?.minRead} Min Read
								</p>
								<p className='text-tiny font-medium'>{article?.createDate}</p>
							</div>
						</div>
					</div>
					{article?.sections.map((item, index) => {
						return (
							<div
								key={index}
								className='col-span-8 flex flex-col justify-center items-center'
							>
								<p className='font-bold text-small self-start'>
									{item.heading}
								</p>
								<div className='space-y-6'>
									{item?.text.map((item, index) => {
										return (
											<p
												key={index}
												className='font-nornal text-smaller text-justify'
											>
												{item}
											</p>
										);
									})}
								</div>
								{item?.images?.length > 0 && (
									<img
										src={item.images[0]}
										className='col-span-4 lg:w-[60%] self-center h-[400px] rounded-md pt-12'
										alt=''
									/>
								)}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default ArticlePage;
