import { Menu } from "antd"
import routes from "./routes";
import { useLocation, useNavigate } from "ice";

const Nav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <Menu
      mode="inline"
      onClick={e=>navigate(e.key)}
      defaultSelectedKeys={[location.pathname]}
      items={routes}
    />
  )
}
export default Nav