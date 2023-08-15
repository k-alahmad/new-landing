import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "../../../components/UI/Button";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
const CustomInput = ({
  icon,
  placeholder,
  type,
  name,
  value,
  onChange,
  radios,
  radiosViewType,
}) => {
  return type == "text" || type == "email" || type == "number" ? (
    <div className="bg-white rounded-md px-4 py-4 flex items-center shadow-sm drop-shadow-sm w-full">
      {icon}
      <p className="text-tiny text-gray-400">{placeholder} </p>

      <input
        type={type}
        className="bg-transparent px-2 w-full outline-none flex-1"
        name={name}
        onChange={onChange}
        id={name}
        value={value}
      />
    </div>
  ) : type == "radio" ? (
    <div className="flex justify-start items-center gap-x-4 bg-white rounded-md shadow-sm drop-shadow-sm px-4 py-4 ">
      <p className="text-tiny font-semibold">{placeholder}</p>

      <div className={`${radiosViewType}`}>
        {radios.map((item, index) => {
          return (
            <div key={index} className="flex gap-x-1">
              <input
                type="radio"
                name={item.name}
                value={item.value}
                id={item.name}
                checked={item.checked}
                onChange={onChange}
                style={{
                  accentColor: "#AA8A3A",
                }}
              />
              <label htmlFor="regular" onClick={onChange}>
                {item.placeholder}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <div> what is this?</div>
  );
};

let defaultFormState = {
  full_name: "",
  email: "",
  phone_No: "",
  years_experience: 0,
  area: "",
  field: "",
  gender: "",
  lvl_english: "",
  lvl_arabic: "",
  other_lang: "",
  closing_deal: "",
  cv: "",
};
const JobForm = () => {
  const [form, setForm] = useState(defaultFormState);
  const [file, setFile] = useState();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };
  function onFileChange(e) {
    if (!e.target.files || e.target.files.length === 0) {
      setFile(undefined);
    }
    setFile(e.target.files[0]);
    setForm({ ...form, cv: e.target.files[0] });
  }
  const hiddenFileInput = React.useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_5wdnu6j",
        "template_tl2vjv3",
        formRef.current,
        "sxh5TJan60LQqD6Sw"
      )
      .then(
        (result) => {
          console.log(result.text);
          window.location.reload(false);
        },
        (error) => {
          console.log(error.text);
          alert("Registration Failed!");
        }
      );
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    sendEmail(e);
    // let formData = new FormData(form.current);
    // try {
    //   const response = await fetch(
    //     "https://hooks.zapier.com/hooks/catch/12792925/312q4d0/",
    //     {
    //       method: "POST",
    //       body: formData,
    //       "Content-Type": "multipart/form-data",
    //     }
    //   );
    //   const result = response.json();
    //   console.log("Success:", result);
    //   sendEmail(e);
    //   if (downloadState) {
    //     let alink = document.createElement("a");
    //     alink.href = Brochure;
    //     alink.download = "BrochurePdf.pdf";
    //     alink.click();
    //   }
    //   dispatch(register());
    //   dispatch(counterIsFull());
    //   dispatch(hideModal());
    //   navigate("/thankyou");
    // } catch (error) {
    //   console.error("Error here:", error);
    // }
    alert("Thank You !!!");
  };
  const formRef = React.useRef();
  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="mt-8 p-8 w-full lg:grid grid-cols-2 gap-x-5 space-y-8 bg-third rounded-md "
    >
      <p className="text-med font-semibold p-4 self-start lg:col-span-2">
        Apply For The Job
      </p>
      <CustomInput
        placeholder={"full Name"}
        type="text"
        name="full_name"
        value={form.full_name}
        onChange={handleChange}
      />
      <CustomInput
        placeholder={"Email"}
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <div>
        <PhoneInput
          country={"ae"}
          placeholder={"Phone Number"}
          enableSearch={true}
          // value={form.phone_No}
          inputProps={{
            name: "phone_No",
            id: "phone_No",
            required: true,
          }}
          onChange={(e) => setForm({ ...form, phone_No: e })}
          containerClass="bg-white !rounded-md shadow-sm drop-shadow-sm  px-1 flex"
          inputClass={`!bg-transparent !text-black !w-full !text-lg !h-full !border-none px-0 !outline-none`}
          buttonClass={`!border-none !text-lg `}
          buttonStyle={{ direction: "ltr" }}
          inputStyle={{
            direction: "ltr",
          }}
        />
      </div>
      <CustomInput
        placeholder={"Years Of Experience"}
        type="number"
        name="years_experience"
        value={form.years_experience}
        onChange={handleChange}
      />
      <CustomInput
        placeholder={"Area"}
        type="text"
        name="area"
        value={form.area}
        onChange={handleChange}
      />
      <div />
      <CustomInput
        radiosViewType={"flex justify-center items-center gap-x-4"}
        placeholder={"Field"}
        type="radio"
        onChange={handleChange}
        radios={[
          {
            name: "field",
            value: "offPlan",
            checked: form.field == "offPlan",
            placeholder: "Off Plan",
          },
          {
            name: "field",
            value: "secMarket",
            checked: form.field == "secMarket",
            placeholder: "Secondary Market",
          },
          {
            name: "field",
            value: "rent",
            checked: form.field == "rent",
            placeholder: "Rent",
          },
        ]}
      />
      <CustomInput
        radiosViewType={"flex justify-center items-center gap-x-4"}
        placeholder={"Gender"}
        type="radio"
        onChange={handleChange}
        radios={[
          {
            name: "gender",
            value: "male",
            checked: form.gender == "male",
            placeholder: "Male",
          },
          {
            name: "gender",
            value: "female",
            checked: form.gender == "female",
            placeholder: "Female",
          },
        ]}
      />
      <div className="lg:col-span-2">
        <CustomInput
          radiosViewType={"grid grid-cols-3 gap-x-6 gap-y-1"}
          placeholder={"English Level"}
          type="radio"
          onChange={handleChange}
          radios={[
            {
              name: "lvl_english",
              value: "NoProficiency",
              checked: form.lvl_english == "NoProficiency",
              placeholder: "0 - No proficiency",
            },
            {
              name: "lvl_english",
              value: "ElementaryProficiency",
              checked: form.lvl_english == "ElementaryProficiency",
              placeholder: "1 - Elementary proficiency",
            },
            {
              name: "lvl_english",
              value: "LimitedWorkingProficiency",
              checked: form.lvl_english == "LimitedWorkingProficiency",
              placeholder: "2 - Limited working proficiency",
            },
            {
              name: "lvl_english",
              value: "ProfessionalWorkingProficiency",
              checked: form.lvl_english == "ProfessionalWorkingProficiency",
              placeholder: "3 - Professional working proficiency",
            },
            {
              name: "lvl_english",
              value: "FullProfessionalProficiency",
              checked: form.lvl_english == "FullProfessionalProficiency",
              placeholder: "4 - Full professional proficiency",
            },
            {
              name: "lvl_english",
              value: "PrimaryFluency",
              checked: form.lvl_english == "PrimaryFluency",
              placeholder: "5 - Primary fluency/ Native",
            },
          ]}
        />
      </div>
      <div className="lg:col-span-2">
        <CustomInput
          radiosViewType={"grid grid-cols-3 gap-x-6 gap-y-1"}
          placeholder={"Arabic Level"}
          type="radio"
          onChange={handleChange}
          radios={[
            {
              name: "lvl_arabic",
              value: "NoProficiency",
              checked: form.lvl_arabic == "NoProficiency",
              placeholder: "0 - No proficiency",
            },
            {
              name: "lvl_arabic",
              value: "ElementaryProficiency",
              checked: form.lvl_arabic == "ElementaryProficiency",
              placeholder: "1 - Elementary proficiency",
            },
            {
              name: "lvl_arabic",
              value: "LimitedWorkingProficiency",
              checked: form.lvl_arabic == "LimitedWorkingProficiency",
              placeholder: "2 - Limited working proficiency",
            },
            {
              name: "lvl_arabic",
              value: "ProfessionalWorkingProficiency",
              checked: form.lvl_arabic == "ProfessionalWorkingProficiency",
              placeholder: "3 - Professional working proficiency",
            },
            {
              name: "lvl_arabic",
              value: "FullProfessionalProficiency",
              checked: form.lvl_arabic == "FullProfessionalProficiency",
              placeholder: "4 - Full professional proficiency",
            },
            {
              name: "lvl_arabic",
              value: "PrimaryFluency",
              checked: form.lvl_arabic == "PrimaryFluency",
              placeholder: "5 - Primary fluency/ Native",
            },
          ]}
        />
      </div>

      <CustomInput
        placeholder={"Other Languages"}
        type="text"
        name="other_lang"
        value={form.other_lang}
        onChange={handleChange}
      />
      <CustomInput
        placeholder={"Approximate Value Of Last Year Closing Deal"}
        type="text"
        name="closing_deal"
        value={form.closing_deal}
        onChange={handleChange}
      />
      <div className="col-span-full flex justify-between items-center">
        <div className="md:flex items-center md:gap-4">
          <Button
            textColor={"text-white font-medium"}
            text={"Upload CV"}
            bgColor={"bg-primary"}
            customStyle={"py-2 px-4"}
            onClick={(e) => {
              e.preventDefault();
              hiddenFileInput.current.click();
            }}
          />
          <input
            type="file"
            // accept="images/*"
            onChange={onFileChange}
            style={{ display: "none" }}
            ref={hiddenFileInput}
          />
          <p>{form.cv?.name} </p>
        </div>
        <button
          className="text-white font-medium bg-secondary py-2 px-4 rounded-[27px] text-center text-smaller disabled:bg-gray-500"
          type="submit"
          disabled={
            form.full_name == "" ||
            form.email == "" ||
            form.phone_No == "" ||
            form.years_experience == "" ||
            form.area == "" ||
            form.field == "" ||
            form.gender == "" ||
            form.lvl_arabic == "" ||
            form.lvl_english == "" ||
            form.closing_deal == "" ||
            form.cv == ""
          }
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default JobForm;
