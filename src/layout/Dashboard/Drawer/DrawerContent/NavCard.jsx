// material-ui
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project import
import MainCard from 'components/MainCard';

// assets
import avatar from 'assets/images/users/avatar-group.png';
import AnimateButton from 'components/@extended/AnimateButton';

// ==============================|| DRAWER CONTENT - NAVIGATION CARD ||============================== //

export default function NavCard() {
  return (
    <></>
    // silee 왼쪽 메뉴 아래 카드 정보 삭제
    // <MainCard sx={{ bgcolor: 'grey.50', m: 3 }}>
    //   <Stack alignItems="center" spacing={2.5}>
    //     <CardMedia component="img" image={avatar} />
    //     <Stack alignItems="center">
    //       <Typography variant="h5">Help?</Typography>
    //       <Typography variant="h6" color="secondary">
    //         Get to resolve query
    //       </Typography>
    //     </Stack>
    //     <AnimateButton>
    //       <Button variant="shadow" size="small" component={Link} href="https://codedthemes.support-hub.io/" target="_blank">
    //         Support
    //       </Button>
    //     </AnimateButton>
    //   </Stack>
    // </MainCard>
  );
}
