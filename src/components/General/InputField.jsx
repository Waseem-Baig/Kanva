const InputField = ({
  width,
  type,
  //   id,
  placeholder,
  label,
  //   value,
  //   onChange,
  //   pattern,
  //   onInput,
}) => (
  <div className="flex flex-col mb-1">
    <label
      className="block text-[#F5F2FA] font-medium mb-1 md:text-[10px] lg:text-[12px] xl:text-[14px] font-baloo2"
      //   htmlFor={id}
    >
      {label}
    </label>
    <input
      type={type}
      //   id={id}
      className={`${width} border-[1px] border-[#9747FFBF] bg-black/20 py-3 rounded-lg text-[#F5F2FA] backdrop:blur-[1px] placeholder:text-[#9E9E9E] placeholder:font-baloo2 placeholder:text-[12px] pl-2 font-light text-[12px]`}
      placeholder={placeholder}
      //   value={value}
      //   onChange={onChange}
      //   pattern={pattern}
      //   onInput={onInput}
    />
  </div>
);

export default InputField;
