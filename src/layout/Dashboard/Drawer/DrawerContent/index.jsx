import useMediaQuery from '@mui/material/useMediaQuery';

// project import
import NavUser from './NavUser';
import NavCard from './NavCard';
import Navigation from './Navigation';
import SimpleBar from 'components/third-party/SimpleBar';
import { useGetMenuMaster } from 'api/menu';

// ==============================|| DRAWER CONTENT ||============================== //

export default function DrawerContent() {
  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster.isDashboardDrawerOpened;
  const downLG = useMediaQuery((theme) => theme.breakpoints.down('lg'));

  return (
    <>
      <SimpleBar sx={{ '& .simplebar-content': { display: 'flex', flexDirection: 'column' } }}>
        <Navigation />
        {/*{drawerOpen && !downLG && <NavCard />}*/}
        {drawerOpen && !downLG && <NavCard />}
      </SimpleBar>
      {/*silee 왼쪽 메뉴 하단 유저 정보 표시 삭제*/}
      {/*<NavUser />*/}
    </>
  );
}
