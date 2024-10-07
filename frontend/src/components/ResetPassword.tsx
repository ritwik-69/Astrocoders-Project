import { Chat } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { notify } from "../utils/notify";
import { resetPassword } from "../firebase/authentication";

export function ResetPassword() {
  const navigate = useNavigate();
  const email = useRef<HTMLInputElement>(null);

  const handleClick = async (e: any) => {
    e.preventDefault();
    if (email.current) {
      try {
        const success = await resetPassword(email.current.value);
        if (success) {
          notify("Password reset email sent successfully");
          navigate("/login");
        } else {
          notify("Failed to send password reset email");
        }
      } catch (err) {
        console.log(err);
        notify("something went wrong");
      }
    } else {
      notify("Please give a valid email");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4 sm:px-0">
      <div className="bg-white flex flex-col p-5 md:p-6 border-2 shadow-md shadow-gray-100/10 border-palladium rounded-xl w-full sm:max-w-[440px]">
        <div className="flex flex-col justify-between">
          <h1 className="font-medium text-[22px] leading-[130%] md:mr-8">
            Provide your Email Adress
          </h1>
          <p className="text-slate-500 mt-2 text-base">
            Fill in your Email address to Reset your password
          </p>
        </div>
        <div className="space-y-4 my-6">
          <div className="relative flex items-center">
            <Chat
              weight="fill"
              className="w-6 h-6 absolute left-4 inset-y-0 my-auto"
            />
            <input
              ref={email}
              type="text"
              name="phone"
              id="phone"
              placeholder="Insert your Email"
              className="focus:outline-none block w-full rounded-xl placeholder-gray-500 bg-gray-100 pl-12 pr-4 h-12 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-black"
            />
          </div>
        </div>
        <div className="flex justify-between mt-4 gap-x-4">
          <button
            onClick={() => navigate("/login")}
            className="rounded-xl flex gap-x-4 mb-8 text-black h-11 w-1/2 items-center justify-center px-6 border border-gray-500"
          >
            Cancel
          </button>
          <button
            onClick={handleClick}
            className="bg-black rounded-xl flex h-11 w-1/2 items-center justify-center px-6"
          >
            <span className="text-base font-light text-white">Send Email</span>
          </button>
        </div>
      </div>
    </div>
  );
}
