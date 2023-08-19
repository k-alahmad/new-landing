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
    <div className="mt-24">
      <div className="h-[500px] relative">
        <img
          src={article?.mainImage}
          className="h-full w-full object-cover object-bottom"
          alt=""
        />
        <div className="absolute h-full w-full bg-secondary/40 top-0 left-0" />

        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-30 text-white">
          <p className="font-semibold text-big text-center w-[50%] drop-shadow-2xl">
            {article?.title}
          </p>
        </div>
      </div>
      <div className="p-8">
        {article?.sections.map((item, index) => {
          return (
            <div className="grid grid-cols-12 gap-x-12">
              <div className="col-span-8 space-y-2">
                <p className="font-bold text-small"> {item.heading}</p>
                <div className="">
                  {item?.text.map((item, index) => {
                    return <p className="font-nornal text-smaller">{item}</p>;
                  })}
                </div>
              </div>
              {item?.images?.length > 0 && (
                <img
                  src={item.images[0]}
                  className="col-span-4 w-full h-full p-2 "
                  alt=""
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ArticlePage;
