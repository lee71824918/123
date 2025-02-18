import PropTypes from 'prop-types';
import { Link, matchPath, useLocation } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

// project import
import { handlerComponentDrawer } from 'api/menu';
import { ThemeMode } from 'config';

export default function NavItem({ item }) {
  const theme = useTheme();
  const { pathname } = useLocation();

  const downMD = useMediaQuery(theme.breakpoints.down('md'));

  let itemTarget = '_self';
  if (item.target) {
    itemTarget = '_blank';
  }

  const itemHandler = () => {
    downMD && handlerComponentDrawer(false);
  };

  const textColor = theme.palette.mode === ThemeMode.DARK ? 'grey.400' : 'text.primary';
  const iconSelectedColor = theme.palette.mode === ThemeMode.DARK ? 'text.primary' : 'primary.main';

  const isSelectedItem = !!matchPath({ path: item.url, end: false }, pathname);

  return (
    <ListItemButton
      component={Link}
      to={item.url}
      target={itemTarget}
      disabled={item.disabled}
      onClick={() => itemHandler(item.id)}
      selected={isSelectedItem}
      sx={{
        pl: 4,
        py: 1,
        mb: 0.5,
        '&:hover': { bgcolor: theme.palette.mode === ThemeMode.DARK ? 'divider' : 'primary.lighter' },
        '&.Mui-selected': {
          bgcolor: theme.palette.mode === ThemeMode.DARK ? 'divider' : 'primary.lighter',
          borderRight: '2px solid',
          borderColor: 'primary.main',
          '&:hover': { bgcolor: theme.palette.mode === ThemeMode.DARK ? 'divider' : 'primary.lighter' }
        }
      }}
    >
      <ListItemText
        primary={
          <Typography variant="h6" sx={{ color: isSelectedItem ? iconSelectedColor : textColor }}>
            {item.title}
          </Typography>
        }
      />
      {item.chip && (
        <Chip
          color={item.chip.color}
          variant={item.chip.variant}
          size={item.chip.size}
          label={item.chip.label}
          avatar={item.chip.avatar && <Avatar>{item.chip.avatar}</Avatar>}
        />
      )}
    </ListItemButton>
  );
}

NavItem.propTypes = { item: PropTypes.any };
