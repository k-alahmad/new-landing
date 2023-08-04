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
      <div className="grid grid-cols-3 md:gap-x-8 py-4 place-items-center">
        <div className="col-span-3 max-md:py-2 md:col-span-1">
          <p>{description}</p>
        </div>
        <div className="max-md:col-span-2">
          <p className="font-semibold text-primary ">Payment Plan</p>
          <ul className="list-disc ml-7">
            <li>
              <span className="font-semibold text-secondary">Type: </span>
              {plan.name}
            </li>
            {plan.postHandover && <li>{plan.postHandover} Post Handover</li>}
            {plan.onBooking && <li>{plan.onBooking} On Booking</li>}
            {plan.duringConstruction && (
              <li>{plan.duringConstruction} During Construction</li>
            )}
            {plan.onHandover && <li>{plan.onHandover} On Handover</li>}
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
