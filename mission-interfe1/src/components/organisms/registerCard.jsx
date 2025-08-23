import RegisterForm from "../molecules/registerForm";

function RegisterCard() {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md font-poppins">
      <h2 className="text-center text-xl font-semibold mb-4 text-amber-600">Pendaftaran Akun</h2>
      <p className="text-center text-sm mb-6 text-amber-800">Yuk, daftar akun sekarang juga!</p>
      <RegisterForm />
    </div>
  );
}
export default RegisterCard;
