export const MintPrice = ({mintPrice}: any) => {
    return (
      <div className="flex relative">
        <p className="text-sm dark:bg-black p-1 rounded-lg items-center font-bold content-center text-center">
          {mintPrice}ETH
        </p>
      </div>
    );
  };