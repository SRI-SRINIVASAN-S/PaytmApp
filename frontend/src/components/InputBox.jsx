const InputBox = ({ label, onChange, placeholder }) => {
  return (
    <>
      <div className="text-sm font-medium text-left py-2">{label}</div>
      <input
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-2 py-1 border rounded border-slate-500	"
      />
    </>
  );
};
export default InputBox;
