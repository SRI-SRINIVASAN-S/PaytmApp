import React from "react";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import ButtonWarning from "../components/BottomWarning";

const SignIn = () => {
  return (
    <>
      <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
          <div className="rounded-lg bg-white p-2 w-90 text-center h-max px-4">
            <Heading label={"SignIn"} />
            <SubHeading
              label={"Enter your credentials to access your account"}
            />
            <InputBox placeholder={"johndoe@gmail.com"} label={"Email"} />
            <InputBox placeholder={""} label={"Password"} />
            <div className="my-3">
              <Button label={"SignIn"} />
            </div>
            <ButtonWarning
              label={"Dont have account?"}
              buttonText={"SignUp"}
              to={"/signup"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
