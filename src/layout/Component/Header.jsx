import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project import
import Logo from 'components/logo';
import IconButton from 'components/@extended/IconButton';
import AnimateButton from 'components/@extended/AnimateButton';

import { APP_DEFAULT_PATH, ThemeMode } from 'config';
import useAuth from 'hooks/useAuth';
import { handlerComponentDrawer, useGetMenuMaster } from 'api/menu';

// assets
import MenuOutlined from '@ant-design/icons/MenuOutlined';

// ==============================|| COMPONENTS - APP BAR ||============================== //

export default function Header() {
  const theme = useTheme();
  const { isLoggedIn } = useAuth();
  const { menuMaster } = useGetMenuMaster();

  const downMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppBar sx={{ bgcolor: theme.palette.mode === ThemeMode.DARK ? 'grey.50' : 'grey.800', color: 'text.primary', boxShadow: 'none' }}>
      <Container disableGutters={downMD}>
        <Toolbar sx={{ px: { xs: 1.5, md: 0, lg: 0 }, py: 2 }}>
          <Stack direction="row" sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }} alignItems="center">
            <Typography sx={{ textAlign: 'left', display: 'inline-block' }}>
              <Logo reverse to="/" />
            </Typography>
            <Chip
              label={import.meta.env.VITE_APP_VERSION}
              variant="outlined"
              size="small"
              color="secondary"
              sx={{ mt: 0.5, ml: 1, fontSize: '0.725rem', height: 20, '& .MuiChip-label': { px: 0.5 } }}
            />
          </Stack>
          {/*<Stack*/}
          {/*  direction="row"*/}
          {/*  sx={{ '& .header-link': { px: 1, '&:hover': { color: 'primary.main' } }, display: { xs: 'none', md: 'block' } }}*/}
          {/*  spacing={2}*/}
          {/*>*/}
          {/*  <Link className="header-link" color="white" component={RouterLink} to="/login" target="_blank" underline="none">*/}
          {/*    Dashboard*/}
          {/*  </Link>*/}
          {/*  <Link className="header-link" color="primary" component={RouterLink} to="/components-overview/buttons" underline="none">*/}
          {/*    Components*/}
          {/*  </Link>*/}
          {/*  <Link className="header-link" color="white" href="https://codedthemes.gitbook.io/mantis/" target="_blank" underline="none">*/}
          {/*    Documentation*/}
          {/*  </Link>*/}
          {/*  <Box sx={{ display: 'inline-block' }}>*/}
          {/*    <AnimateButton>*/}
          {/*      <Button*/}
          {/*        component={Link}*/}
          {/*        href="https://mui.com/store/items/mantis-react-admin-dashboard-template/"*/}
          {/*        disableElevation*/}
          {/*        color="primary"*/}
          {/*        variant="contained"*/}
          {/*      >*/}
          {/*        Purchase Now*/}
          {/*      </Button>*/}
          {/*    </AnimateButton>*/}
          {/*  </Box>*/}
          {/*</Stack>*/}
          <Box sx={{ width: '100%', alignItems: 'center', justifyContent: 'space-between', display: { xs: 'flex', md: 'none' } }}>
            <Typography sx={{ textAlign: 'left', display: 'inline-block' }}>
              <Logo reverse to="/" />
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <Button
                variant="outlined"
                size="small"
                color="warning"
                component={RouterLink}
                to={isLoggedIn ? APP_DEFAULT_PATH : '/login'}
                sx={{ mt: 0.5, height: 28 }}
              >
                {isLoggedIn ? 'Dashboard' : 'Login'}
              </Button>

              <IconButton
                color="secondary"
                onClick={() => handlerComponentDrawer(!menuMaster.isComponentDrawerOpened)}
                sx={{ '&:hover': { bgcolor: theme.palette.mode === ThemeMode.DARK ? 'secondary.lighter' : 'secondary.dark' } }}
              >
                <MenuOutlined style={{ color: theme.palette.mode === ThemeMode.DARK ? 'inherit' : theme.palette.grey[100] }} />
              </IconButton>
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
