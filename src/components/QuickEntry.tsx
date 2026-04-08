const QuickEntry = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F8F9FA] p-6 font-sans antialiased text-[#191C1E]">
      <div className="card w-full max-w-120 bg-white p-10 shadow-ambient rounded-2xl">
        <h2 className="mb-10 text-[2rem] font-bold tracking-tight">
          Quick Entry
        </h2>

        <div className="flex flex-col gap-8">
          <section className="flex flex-col gap-4">
            <label className="text-[0.7rem] font-black uppercase tracking-widest text-[#41484D]">
              Transaction Type
            </label>
            <div className="join w-full bg-[#F0F1F2] p-1 rounded-lg">
              <input
                className="join-item btn flex-1 border-none bg-linear-to-br from-[#006591] to-[#0ea5e9] text-sm font-bold text-white shadow-sm hover:opacity-90"
                type="radio"
                name="transactionType"
                aria-label="Expense"
                defaultChecked
              />
              <input
                className="join-item btn flex-1 border-none bg-transparent text-sm font-bold text-[#41484D] hover:bg-[#E1E3E4]"
                type="radio"
                name="transactionType"
                aria-label="Income"
              />
            </div>
          </section>

          <section className="flex flex-col gap-4">
            <label className="text-[0.7rem] font-black uppercase tracking-widest text-[#41484D]">
              Amount (PLN)
            </label>
            <input
              type="text"
              placeholder="0.00"
              className="input h-24 w-full border-none bg-[#F0F1F2] text-[2.5rem] font-mono transition-all focus:bg-white focus:outline-[#006591]/20 focus:outline-[3px]"
            />
          </section>

          <section className="flex flex-col gap-4">
            <label className="text-[0.7rem] font-black uppercase tracking-widest text-[#41484D]">
              Category
            </label>
            <select className="select w-full border-none bg-[#F0F1F2] text-md font-medium transition-all focus:bg-white focus:outline-[#006591]/20">
              <option disabled selected>
                Dining & Drinks
              </option>
              <option>Housing</option>
              <option>Transportation</option>
              <option>Entertainment</option>
            </select>
          </section>

          <button className="btn mt-4 h-16 border-none bg-linear-to-br from-[#006591] to-[#0ea5e9] text-lg font-bold text-white shadow-lg transition-transform active:scale-95">
            Record Transaction
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickEntry;
