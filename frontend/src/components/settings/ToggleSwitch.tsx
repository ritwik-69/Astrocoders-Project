interface ToggleProps {
  label: string;
}

const ToggleSwitch = ({ label }: ToggleProps) => {
  return (
    <div className="flex items-center justify-between py-3">
      <span className="text-gray-300">{label}</span>
      <button
        disabled
        className="bg-indigo-600  text-white font-bold py-1 px-4 rounded 
        transition duration-200
        "
      >
        Enabled
      </button>
    </div>
  );
};
export default ToggleSwitch;
