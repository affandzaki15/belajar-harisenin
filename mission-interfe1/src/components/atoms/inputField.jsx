function InputField({ type, placeholder, value, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full border border-[#3a35411f] rounded-md p-3"
    />
  );
}
export default InputField;
