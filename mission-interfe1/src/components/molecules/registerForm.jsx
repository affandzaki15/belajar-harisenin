import InputField from "../atoms/inputField";
import Button from "../atoms/Button";
import { Link } from "react-router-dom";
import LogoImage from "../../assets/images/vector.png";
import LogoImages from "../../assets/images/google-icon.png";
import LogoImagess from "../../assets/images/Indonesia.png";

function RegisterForm() {
  return (
    <form className="space-y-4">
      {/* nama */}
      <div className="flex flex-col space-y-1">
        <label className="text-sm font-poppins font-medium text-[#333333ad] border-[#3a35411f]">
          Nama Lengkap<span className="text-red-500">*</span>
        </label>
        <InputField type="email" placeholder="" />
      </div>
      {/* Email */}
      <div className="flex flex-col space-y-1">
        <label className="text-sm font-poppins font-medium text-[#333333ad] border-[#3a35411f]">
          E-Mail<span className="text-red-500">*</span>
        </label>
        <InputField type="email" placeholder="" />
      </div>

      <div className="flex flex-col space-y-1">
        <label htmlFor="phone" className="text-sm font-medium text-gray-700">
          No. Hp <span className="text-red-500">*</span>
        </label>

        <div className="flex items-center">
          {/* Bendera */}
          <div className="w-12 h-12 bg-[#f0f0f0] flex items-center justify-center border border-[#3a35411f] rounded-l-md">
            <img
              src={LogoImagess}
              alt="indonesia"
              className="w-6 h-6"
            />
          </div>

          {/* Select Kode Negara */}
          <select
            name="kode"
            className="h-12 px-2 text-sm bg-white border rounded-r-lg border-[#3a35411f] focus:ring-2 focus:ring-green-500 outline-none"
            required
          >
            <option value="+62">+62</option>
            <option value="+60">+60</option>
            <option value="+253">+253</option>
            <option value="+72">+72</option>
          </select>

          {/* Input Nomor */}
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            placeholder=""
            className="flex-1 h-12 px-3 ml-2 border border-[#3a35411f] rounded-md focus:ring-2 focus:ring-green-500 outline-none"
          />
        </div>
      </div>

      {/* Password */}
      {/* Password */}
      <div className="flex flex-col space-y-1 relative">
        <label className="text-sm font-medium text-[#333333ad]">
          Kata Sandi <span className="text-red-500">*</span>
        </label>

        {/* wrapper relative untuk input + icon */}
        <div className="relative">
          <InputField
            type="password"
            placeholder=""
            className="pr-10" // kasih padding kanan biar tidak ketimpa icon
          />
          <img
            src={LogoImage}
            alt="eye"
            className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2"
          />
        </div>
      </div>
      {/* Password */}
      <div className="flex flex-col space-y-1 relative">
        <label className="text-sm font-medium text-[#333333ad]">
          Konfirmasi Kata Sandi <span className="text-red-500">*</span>
        </label>

        {/* wrapper relative untuk input + icon */}
        <div className="relative">
          <InputField
            type="password"
            placeholder=""
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
        <Link
          to="#"
          className="text-sm font-medium text-[#333333ad] hover:underline"
        >
          Lupa Password?
        </Link>
      </div>
      <Button variant="primary">Daftar</Button>
      <Button variant="outline">Masuk</Button>

      <div className="flex items-center my-6">
        <div className="flex-grow border-b border-[#333333ad]" />
        <span className="mx-2 text-[#333333ad] text-sm">atau</span>
        <div className="flex-grow border-b border-[#333333ad]" />
      </div>

      <Button variant="secondary">
        <img
          src={LogoImages}
          alt="Google"
          className="w-5 h-5 inline-block mr-2"
        />
        Daftar dengan Google
      </Button>
    </form>
  );
}
export default RegisterForm;
