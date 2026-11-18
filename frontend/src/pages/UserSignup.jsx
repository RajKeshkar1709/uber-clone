import { Link } from "react-router-dom"

const UserSignup = () => {
  return (
    <div>

        <div className="p-7 h-screen flex flex-col justify-between">
  <div>
    <img
      className="w-16 mb-10"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s"
      alt="Logo"
    />

    <form>
      <h3 className="text-lg w-1/2 font-medium mb-2">
        What's your name
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

      <h3 className="text-lg font-medium mb-2">
        What's your email
      </h3>

      <input
        type="email"
        placeholder="email@example.com"
        required
        className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base outline-none"
      />

      <h3 className="text-lg font-medium mb-2">
        Enter Password
      </h3>

      <input
        type="password"
        placeholder="password"
        required
        className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base outline-none"
      />

      <button
        type="submit"
        className="bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg"
      >
        Create account
      </button>
    </form>

    <p className="text-center">
      Already have an account?{" "}
      <Link to="/user-login" className="text-blue-600">
        Login here
      </Link>
    </p>
  </div>

  <div>
    <p className="text-[10px] leading-tight">
      This site is protected by reCAPTCHA and the{" "}
      <span className="underline">Google Privacy Policy</span> and{" "}
      <span className="underline">Terms of Service apply</span>.
    </p>
  </div>
</div>
      
    </div>
  )
}

export default UserSignup
