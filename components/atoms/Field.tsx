
type FieldProps = {
  title: string;
  value?: string;
  placeholder?: string;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function Field({ title, value, placeholder, handleChange }: FieldProps) {

  return (
    <div className="md:flex md:items-center mb-6">
      <div className="md:w-1/3">
        <label className="block font-bold md:text-right mb-1 md:mb-0 pr-4" >
          {title}
        </label>
      </div>
      <div className="md:w-2/3">
        <input placeholder={placeholder} value={value} onChange={handleChange} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" />
      </div>
    </div>
  )
}

export default Field