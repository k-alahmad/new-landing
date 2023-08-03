import React, { useRef, useState } from "react";
import { data } from "../../../../data/projectsData";
import useWindowDimensions from "../../../../hooks/screenDimentions";
import Slider from "react-slick";
import PropertiesNavigator from "./PropertiesNavigator";
import ProjectDetails from "./ProjectDetails";
import PropertyCard from "./PropertyCard";
const Properties = () => {
  const { width } = useWindowDimensions();
  const [selected, setSelected] = useState(0);
  const sliderRef = useRef();
  return (
    <div className="px-[5%]">
      <PropertiesNavigator
        selected={selected}
        setSelected={setSelected}
        sliderRef={sliderRef}
      />
      <div
        style={{
          width: width - (width * 10) / 100,
          maxWidth: "1920px",
        }}
      >
        <Slider
          ref={sliderRef}
          touchMove={false}
          slidesToShow={1}
          slidesToScroll={1}
          dots={false}
          arrows={false}
          infinite={false}
          autoplay={false}
        >
          {data.map((item, index) => {
            return (
              <div key={index}>
                <ProjectDetails
                  title={item.title}
                  description={item.description}
                  plan={item.plan}
                  location={item.location}
                  startingPrice={item.startingPrice}
                />
                <div className="grid grid-cols-3 mt-12">
                  {item.propertes.map((i, idx) => {
                    return (
                      <PropertyCard
                        image={i.image}
                        key={idx}
                        area={i.area}
                        bathsNumber={i.bathsNumber}
                        bedroomNumber={i.bedroomNumber}
                        startingPrice={i.startingPrice}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};
export default Properties;
