import React from "react";

const ProjectDetails = ({
  title,
  description,
  plan,
  location,
  startingPrice,
}) => {
  return (
    <div className="py-1 text-tiny 2xl:text-smaller w-full">
      <p className="font-semibold text-primary text-big">{title}</p>
      <div className="grid grid-cols-3 gap-x-8 py-4 place-items-center">
        <div className="col-span-1">
          <p>{description}</p>
        </div>
        <div>
          <p className="font-semibold text-primary ">Payment Plan</p>
          <ul className="list-disc ml-7">
            <li>Type: {plan.name}</li>
            {/* <li>{item.plan.postHandover}</li> */}
            <li>{plan.onBooking} On Booking</li>
            <li>{plan.duringConstruction} During Construction</li>
            <li>{plan.onHandover} On Handover</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-primary ">Location </p>
          <ul className="list-disc ml-7">
            <li>{location}</li>
          </ul>
          <p className="font-semibold text-primary ">Starting Price</p>
          <ul className="list-disc ml-7">
            <li>{startingPrice}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
