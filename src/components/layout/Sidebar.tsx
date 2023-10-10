const Sidebar = () => {
  return (
    <aside className="bg-white h-screen sticky left-0 overflow-y-auto px-[22px] pt-[32px] max-w-[252px]">
      <img src="/images/Logo.png" alt="logo" className="mb-[60px]" />
      <div className="w-full h-[44px] px-[20px]   flex gap-[12px] py-[10px] text-secondary-default bg-[#F5F5F7] rounded-[10px] ">
        <img src="/icons/sidebar/category.png" alt="" />
        <p className="font-[600]">Overview</p>
      </div>
    </aside>
  );
};

export default Sidebar;
