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
    <div className="flex flex-col justify-center items-center">
      <div className="h-[500px] relative w-full">
        <img
          src={article?.mainImage}
          className="h-full w-full object-cover object-bottom"
          alt=""
        />
        <div className="absolute h-full w-full bg-secondary/50 top-0 left-0" />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-30 text-white">
          <p className="font-semibold text-big text-center w-[70%] 2xl:w-[50%] drop-shadow-2xl">
            {article?.title}
          </p>
          <div className="flex items-center gap-x-4">
            <img
              src={article?.author?.image}
              className="h-[50px] w-[50px] rounded-md object-cover object-top"
              alt=""
            />
            <div>
              <p className="text-small font-medium text-third">
                {article?.author?.name}
              </p>
              <div className="flex items-center gap-x-4">
                <p className="text-tiny font-medium text-third">
                  {article?.minRead} Min Read
                </p>
                <p className="text-tiny font-medium text-third">
                  {article?.createDate}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1280px] mx-2">
        <div className="p-8 space-y-12">
          {article?.sections.map((item, index) => {
            return (
              <div className="col-span-8 space-y-4">
                <p className="font-bold text-small"> {item.heading}</p>
                <div className="space-y-6">
                  {item?.text.map((item, index) => {
                    return <p className="font-nornal text-smaller">{item}</p>;
                  })}
                </div>
                {item?.images?.length > 0 && (
                  <img
                    src={item.images[0]}
                    className="col-span-4 w-full h-full rounded-md"
                    alt=""
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
