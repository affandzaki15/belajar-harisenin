import InputField from "../atoms/inputField";
import Button from "../atoms/Button";
import { Link } from "react-router-dom";
import LogoImage from "../../assets/images/vector.png"; 

function LoginForm() {
  return (
    <form className="space-y-4">
      {/* Email */}
      <div className="flex flex-col space-y-1">
        <label className="text-sm font-medium text-gray-700">
          Email<span className="text-red-500">*</span>
        </label>
        <InputField type="email" placeholder="Masukkan email" />
      </div>

      {/* Password */}
      {/* Password */}
      <div className="flex flex-col space-y-1 relative">
        <label className="text-sm font-medium text-gray-700">
          Kata Sandi <span className="text-red-500">*</span>
        </label>

        {/* wrapper relative untuk input + icon */}
        <div className="relative">
          <InputField
            type="password"
            placeholder="Masukkan kata sandi"
            className="pr-10" // kasih padding kanan biar tidak ketimpa icon
          />
          <img
            src={LogoImage}
            alt="eye"
            className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2"
          />
        </div>
      </div>

      {/* Lupa Password */}
      <div className="flex justify-end">
        <Link to="#" className="text-sm font-medium text-[#333333ad] hover:underline">
          Lupa Password?
        </Link>
      </div>

      <Button variant="primary">Masuk</Button>
      <Button variant="outline">Daftar</Button>

      <div className="text-center mt-2">
        <p className="text-sm">
          Belum punya akun?{" "}
          <Link to="/register" className="text-green-500">
            Daftar
          </Link>
        </p>
      </div>

      <Button variant="outline">
        <img
          src="/google-icon.svg"
          alt="Google"
          className="w-5 h-5 inline-block mr-2"
        />
        Masuk dengan Google
      </Button>
    </form>
  );
}
export default LoginForm;
