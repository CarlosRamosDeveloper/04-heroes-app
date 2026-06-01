import { Outlet } from 'react-router';

export const AdminLayout = () => {
  return (
    <div className="bg bg-blue-600">
      <Outlet />
    </div>
  );
};

export default AdminLayout;
