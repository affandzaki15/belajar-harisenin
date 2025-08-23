function Button({ children, onClick, variant = "primary" }) {
  const baseStyle = "w-full p-3 rounded-md";
  const styles = {
    outline: `${baseStyle} bg-[#e2fcd9cc] text-[#3ecf4c] font-semibold font-poppins`,
    primary: `${baseStyle} bg-[#3ecf4c] text-[#fff] font-semibold font-poppins`,
  };

  return (
    <button onClick={onClick} className={styles[variant]}>
      {children}
    </button>
  );
}

export default Button;
