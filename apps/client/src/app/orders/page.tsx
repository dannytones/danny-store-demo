const OrdersPage = async () => {
  return (
    <div className="max-w-5xl mx-auto p-6 md:p-12  selection:bg-neutral-200 text-neutral-900">
      {/* Концентрований Header */}
      <header className="mb-2 md:mb-4">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1 h-1 bg-neutral-900" />
          <span className="text-xs font-medium uppercase tracking-widest text-neutral-500">
            Internal / Logs
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-light tracking-tight ">
          Purchases
        </h1>
      </header>
    </div>
  );
};

export default OrdersPage;
