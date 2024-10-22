export default function TransactionCard() {
  return (
    <div className="bg-background-quaternary flex items-center justify-between rounded-md p-2">
      <div className="flex gap-2">
        <img
          src="https://images.pexels.com/photos/3602258/pexels-photo-3602258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="product photo"
          className="h-28 w-28 rounded-md object-cover"
        />
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-red font-bold">Camera</p>
            <p className="text-red text-xs font-light">
              <span className="font-semibold">Saturday</span>, 14 Juli 2021
            </p>
            <p className="text-xs">Price : Rp.500.000</p>
          </div>

          <p className="text-sm">Sub Total : 500.000</p>
        </div>
      </div>
      <img
        src="dm-logo.svg"
        alt="dumb merch logo"
        className="mr-5 h-16 w-16 rounded-md object-cover"
      />
    </div>
  );
}
