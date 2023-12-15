import React from "react";
import { omit } from "lodash";
import { MdMail, MdPerson } from "react-icons/md";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { useTranslation } from "react-i18next";
import { Gender } from "../../../constants";
import CustomInput from "../../../components/Forms/CustomInput";
import useForm from "../../../hooks/useForm";
import { useDispatch } from "react-redux";
import { showMessage } from "../../../redux/messageAction.slice";
import { projectsData } from "../../../data/projectsData";
const defaultFormState = {
  Email: "",
  FullName: "",
  Gender: "Male",
  PhoneNo: "",
  Project: projectsData[0].ProjectName.en,
};
const RegisterForm = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const {
    disabled,
    setErrors,
    errors,
    setValues,
    values,
    handleChange,
    handleSubmit,
  } = useForm(submit, defaultFormState);
  const isLoading = false;
  function submit(e) {
    setValues(defaultFormState);
  }
  return (
    <div id="register" className="w-[75vw] max-w-[700px] my-12">
      <form className="flex flex-col justify-between items-stretch h-full w-full space-y-4">
        <CustomInput
          icon={<MdPerson className="text-white text-med" />}
          placeholder={t("formFullName")}
          type="text"
          name="FullName"
          id="FullName"
          value={values.FullName}
          onChange={handleChange}
          error={Boolean(errors?.FullName)}
        />

        <CustomInput
          icon={<MdMail className="text-white text-med" />}
          placeholder={t("formEmail")}
          type="email"
          name="Email"
          id="Email"
          value={values.Email}
          onChange={handleChange}
          error={Boolean(errors?.Email)}
        />

        <PhoneInput
          country={"ae"}
          placeholder={t("formPhoneNumber")}
          enableSearch={true}
          inputProps={{
            name: "phone",
            id: "phone",
            required: true,
          }}
          onChange={(phone) => {
            if (phone.length < 10) {
              setErrors({
                ...errors,
                PhoneNo: "Phone Number is atleast 10 digits",
              });
            } else {
              let newObj = omit(errors, "PhoneNo");
              setErrors(newObj);
            }
            setValues({ ...values, PhoneNo: phone });
          }}
          value={values.PhoneNo}
          containerStyle={{
            outline: "none",
            outlineOffset: "0px",
            boxShadow: "none",
          }}
          containerClass={`${
            Boolean(errors.PhoneNo)
              ? "!border-[1px] border-red-500"
              : "!border-b-[1px] border-white"
          } px-1 flex bg-white/20 rounded-md !outline-none`}
          inputClass={`!bg-transparent !text-white !w-full !text-lg !h-full !border-none ${
            i18n.language == "en" ? "px-0" : "mx-10"
          } !outline-none`}
          buttonClass={`!border-none !outline-none !text-lg `}
          buttonStyle={{
            direction: "ltr",
            outline: "none",
            outlineOffset: "0px",
            boxShadow: "none",
          }}
          dropdownClass="!bg-primary/70 !backdrop-blur-[21px] !text-secondary"
          searchClass="!bg-primary/70 !backdrop-blur-[21px] !text-secondary"
          inputStyle={{
            direction: "ltr",
            outline: "none",
            outlineOffset: "0px",
            boxShadow: "none",
          }}
        />

        <div className="space-y-1">
          <p className="text-tiny text-white">{t("Project")} </p>

          <div className="flex justify-center items-center border-[1px] rounded-md p-1 gap-x-2">
            {projectsData.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <div
                    className={`py-4 rounded-md text-tiny w-full flex justify-center items-center cursor-pointer transition-all duration-300 tracking-tighter ${
                      values.Project == item.ProjectName.en
                        ? "bg-secondary text-primary"
                        : "bg-transparent text-white"
                    }`}
                    onClick={() =>
                      setValues({ ...values, Project: item.ProjectName.en })
                    }
                  >
                    {item.ProjectName[i18n.language]}
                  </div>
                  {index !== projectsData.length - 1 && (
                    <div className="h-10 w-1 bg-white/50" />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
        <button
          className={`bg-secondary text-primary font-semibold text-smaller md:text-small w-full py-1  disabled:bg-none disabled:bg-gray-500 disabled:text-white rounded-md ${
            isLoading && "animate-pulse"
          } `}
          onClick={handleSubmit}
          disabled={disabled}
        >
          {isLoading ? t("sending") : t("send")}
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
