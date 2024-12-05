import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/">About</Link>
      <main>
        <Outlet />
      </main>
      ;
    </>
  );
}

export default MainLayout;
