import Sidebar from "./Sidebar";

const Layout = ({ children }: any) => {
  return (
    <div className="max-width flex min-h-screen ">
      <Sidebar />
      <div className="hide-scrollbar relative max-h-screen w-full overflow-y-scroll">
        {children}
      </div>
    </div>
  );
};

export default Layout;
