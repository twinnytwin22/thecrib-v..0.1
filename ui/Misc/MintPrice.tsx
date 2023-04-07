export const MintPrice = ({mintPrice, chainSymbol}: any) => {
    return (
      <div className="flex relative">
        <p className="text-sm dark:bg-black p-1 rounded-lg items-center font-bold content-center text-center">
          {mintPrice}{chainSymbol}
        </p>
      </div>
    );
  };