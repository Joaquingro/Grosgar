import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div className="bg-neutral-200 min-h-screen flex justify-center p-6">
      <Outlet />
    </div>
  );
};
