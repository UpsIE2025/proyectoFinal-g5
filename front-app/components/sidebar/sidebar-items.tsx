import NavCollapse from '@/components/sidebar/nav-collapse';
import NavGroup from '@/components/sidebar/nav-group';
import NavItem from '@/components/sidebar/nav-item';
import Menuitems from '@/data/sidebar-items';
import { toggleMobileSidebar } from '@/redux/customizerSlice';
import { AppState } from '@/redux/store';
import { Box, List, useMediaQuery } from '@mui/material';
import { usePathname } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';

const SidebarItems = () => {
  const pathname = usePathname();
  const pathDirect = pathname;
  const pathWithoutLastPart = pathname.slice(0, pathname.lastIndexOf('/'));
  const customizer = useSelector((state: AppState) => state.customizer);
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up('lg'));
  const hideMenu: any = lgUp ? customizer.isCollapse && !customizer.isSidebarHover : '';
  const dispatch = useDispatch();
  return (
    <Box sx={{ px: 3 }}>
      <List sx={{ pt: 0 }} className="sidebarNav">
        {Menuitems.map((item: any) => {
          if (item.subheader) {
            return <NavGroup item={item} hideMenu={hideMenu} key={item.subheader} />;
          } else if (item.children) {
            return (
              <NavCollapse
                menu={item}
                pathDirect={pathDirect}
                hideMenu={hideMenu}
                pathWithoutLastPart={pathWithoutLastPart}
                level={1}
                key={item.id}
                onClick={() => dispatch(toggleMobileSidebar())}
              />
            );
          } else {
            return (
              <NavItem
                item={item}
                key={item.id}
                pathDirect={pathDirect}
                hideMenu={hideMenu}
                onClick={() => dispatch(toggleMobileSidebar())}
              />
            );
          }
        })}
      </List>
    </Box>
  );
};
export default SidebarItems;
