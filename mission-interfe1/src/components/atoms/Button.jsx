function Button({ children, onClick, variant = "primary" }) {
  const baseStyle = "w-full p-2 rounded-xl";
  const styles = {
    outline: `${baseStyle} bg-[#e2fcd9cc] text-[#3ecf4c] font-semibold font-poppins`,
    primary: `${baseStyle} bg-[#3ecf4c] text-[#fff] font-semibold font-poppins`,
    secondary: `${baseStyle} bg-white border border-[#3a35411f] text-[#333333] font-semibold font-poppins`,
  };

  return (
    <button onClick={onClick} className={styles[variant]}>
      {children}
    </button>
  );
}

export default Button;
