import Logo from "../atoms/logo";

function AuthLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-[20px_10px_40px_rgba(62,67,74,0.31)] relative z-10 w-full h-[74px] flex items-center md:shadow-none">
        <Logo className="absolute left-1/2 -translate-x-1/2" />
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-[#fdf8f2] flex items-center justify-center">
        {children}
      </main>
    </div>
  );
}
export default AuthLayout;
