const EmailWindow = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden">
      <div className="flex bg-gray-800 h-10">
        <div className="flex gap-x-1.5 items-center pl-3">
          <div className="h-2 w-2 rounded-full bg-red-600 "></div>
          <div className="h-2 w-2 rounded-full bg-yellow-400 "></div>
          <div className="h-2 w-2 rounded-full bg-green-500 "></div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex flex-col items-start font-semibold border-transparent border-b-gray-300 border pb-2">
          <p>
            To:{" "}
            <span className="border border-primary-600 bg-background-200 px-3 py-0 rounded-full text-primary-800">
              Your Recipient
            </span>
          </p>
          <p>Subject: Check out this amazing signature generator</p>
        </div>
        <div className="mt-3">{children}</div>
      </div>
    </div>
  );
};
export { EmailWindow };
