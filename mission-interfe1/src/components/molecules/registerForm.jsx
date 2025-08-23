import InputField from "../atoms/inputField";
import Button from "../atoms/Button";
import { Link } from "react-router-dom";

function RegisterForm() {
  return (
    <form className="space-y-4">
      <InputField type="text" placeholder="Nama Lengkap" />
      <InputField type="email" placeholder="E-Mail" />

      <div className="flex">
        <select className="border rounded-l-md p-3">
          <option value="+62">+62</option>
          <option value="+60">+60</option>
        </select>
        <InputField type="text" placeholder="No. HP" />
      </div>

      <InputField type="password" placeholder="Kata Sandi" />
      <InputField type="password" placeholder="Konfirmasi Kata Sandi" />

      <Button variant="outline">Masuk</Button>
      <Button variant="primary">Daftar</Button>

      <div className="text-center mt-2">
        <p className="text-sm text-amber-200 ">
          Sudah punya akun?{" "}
          <Link to="/login" className="text-green-500">Masuk</Link>
        </p>
      </div>

      <Button variant="outline">
        <img src="/google-icon.svg" alt="Google" className="w-5 h-5 inline-block mr-2" />
        Daftar dengan Google
      </Button>
    </form>
  );
}
export default RegisterForm;
