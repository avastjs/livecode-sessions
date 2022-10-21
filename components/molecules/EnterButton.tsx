type EnterButtonProps = {
  handleClick: () => void;
};

function EnterButton({ handleClick }: EnterButtonProps) {

  function enter() {

  }

  return (
    <button type="button" onClick={handleClick} className="shadow bg-pink-500 hover:bg-pink-400 focus:shadow-outline focus:outline-none text-white py-1 px-2 rounded">
      Enter Room
    </button>
  )
}

export default EnterButton