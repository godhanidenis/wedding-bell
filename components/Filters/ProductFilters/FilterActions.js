const FilterActions = () => {
  return (
    <div className="mb-2 flex justify-start gap-5">
      <button className="bg-colorPrimary px-5 py-1 rounded-md text-colorWhite">
        Filter By
      </button>

      <button className="bg-colorPrimary px-5 py-1 rounded-md text-colorWhite">
        Reset
      </button>
    </div>
  );
};

export default FilterActions;
