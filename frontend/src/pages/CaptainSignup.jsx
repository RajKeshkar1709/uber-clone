import { Link } from "react-router-dom";

const CaptainSignup = () => {
  return (
    <div>
      <div className="py-5 px-5 min-h-screen flex flex-col justify-between">
        <div>
          <img
            className="w-20 mb-3"
            src="https://www.svgrepo.com/show/505031/uber-driver.svg"
            alt="Uber Driver Logo"
          />

          <form>
            {/* Captain Name */}
            <h3 className="text-lg w-full font-medium mb-2">
              What's our Captain's name
            </h3>

            <div className="flex gap-4 mb-7">
              <input
                type="text"
                placeholder="First name"
                required
                className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base outline-none"
              />

              <input
                type="text"
                placeholder="Last name"
                required
                className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base outline-none"
              />
            </div>

            {/* Email */}
            <h3 className="text-lg font-medium mb-2">
              What's our Captain's email
            </h3>

            <input
              type="email"
              placeholder="email@example.com"
              required
              className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base outline-none"
            />

            {/* Password */}
            <h3 className="text-lg font-medium mb-2">Enter Password</h3>

            <input
              type="password"
              placeholder="password"
              required
              className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base outline-none"
            />

            {/* Vehicle Information */}
            <h3 className="text-lg font-medium mb-2">Vehicle Information</h3>

            <div className="flex gap-4 mb-7">
              <input
                type="text"
                placeholder="Vehicle Color"
                required
                className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base outline-none"
              />

              <input
                type="text"
                placeholder="Vehicle Plate"
                required
                className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base outline-none"
              />
            </div>

            <div className="flex gap-4 mb-7">
              <input
                type="number"
                placeholder="Vehicle Capacity"
                required
                className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base outline-none"
              />

              <select
                required
                defaultValue=""
                className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg outline-none"
              >
                <option value="" disabled>
                  Select Vehicle Type
                </option>
                <option value="car">Car</option>
                <option value="auto">Auto</option>
                <option value="moto">Moto</option>
              </select>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg"
            >
              Create Captain Account
            </button>
          </form>

          <p className="text-center">
            Already have an account?{" "}
            <Link to="/captain-login" className="text-blue-600">
              Login here
            </Link>
          </p>
        </div>

        {/* Footer */}
        <div>
          <p className="text-[10px] mt-6 leading-tight">
            This site is protected by reCAPTCHA and the{" "}
            <span className="underline">Google Privacy Policy</span> and{" "}
            <span className="underline">Terms of Service apply</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CaptainSignup;
