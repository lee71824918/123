import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// third party
import { motion } from 'framer-motion';

// project-import
import AnimateButton from 'components/@extended/AnimateButton';

// assets
import EyeOutlined from '@ant-design/icons/EyeOutlined';
import headertechimg from 'assets/images/landing/img-headertech.svg';

// ==============================|| LANDING - HEADER PAGE silee ||============================== //

export default function HeaderPage() {
  const theme = useTheme();

  console.log('API_URL:', import.meta.env.VITE_APP_API_URL); //silee

  // 데모 로그인 함수 silee
  const loginAsDemoUser = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/api/login`, {
        // 변수를 사용하여 URL 구성
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: 'demo', password: 'demo' }) // 비밀번호 demo -> sha256 으로 변경해야함
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login successful:', data);
        return data; // 로그인 성공 시 반환된 데이터
      } else {
        throw new Error('Failed to login');
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  // 음성 중지 함수
  const stopSpeaking = () => {
    window.speechSynthesis.cancel();
  };

  // 음성으로 읽어주는 함수
  const speak = (text) => {
    const synth = window.speechSynthesis;
    synth.cancel(); // 현재 재생중인 음성을 취소
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  };

  // 버튼 클릭 이벤트 핸들러
  const handleDemoLoginClick = async () => {
    const loginData = await loginAsDemoUser();
    if (loginData) {
      history.push('/components-overview/buttons'); // 로그인 성공 후 이동할 경로
    }
  };

  return (
    <Container sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <Grid container alignItems="center" justifyContent="space-between" spacing={2} sx={{ pt: { md: 0, xs: 8 }, pb: { md: 0, xs: 5 } }}>
        <Grid item xs={12} lg={5} md={6}>
          <Grid container spacing={2} sx={{ pr: 10, [theme.breakpoints.down('md')]: { pr: 0, textAlign: 'center' } }}>
            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ type: 'spring', stiffness: 150, damping: 30 }}
              >
                <Typography
                  onMouseEnter={() => speak('ISO IEC 25023 기준에 따른 시험 방법의 유효성 검증 소프트웨어')}
                  onMouseLeave={stopSpeaking}
                  variant="h1"
                  color="white"
                  sx={{
                    fontSize: { xs: '1.825rem', sm: '2rem', md: '2.5rem' },
                    fontWeight: 700,
                    lineHeight: { xs: 1.3, sm: 1.3, md: 1.3 }
                  }}
                >
                  <span>ISO/IEC 25023 기준에 따른 시험 방법의 </span>
                  <Box component="span" sx={{ color: 'primary.main' }}>
                    <span>유효성 검증 </span>
                  </Box>
                  <span>소프트웨어</span>
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ type: 'spring', stiffness: 150, damping: 30, delay: 0.2 }}
              >
                <Typography
                  onMouseEnter={() =>
                    speak(
                      '이 프로그램은 ISO IEC 25023의 요구 사항을 준수하여 소프트웨어 시험 방법의 유효성을 검증합니다. 이를 통해 시험 방법의 재현성과 반복성을 보장하며, 고객이 신뢰할 수 있는 제품 품질을 확보할 수 있도록 합니다.'
                    )
                  }
                  variant="h6"
                  color="white"
                  sx={{ fontSize: { xs: '0.875rem', md: '1rem' }, fontWeight: 400, lineHeight: { xs: 1.4, md: 1.4 } }}
                >
                  이 프로그램은 ISO/IEC 25023의 요구 사항을 준수하여 소프트웨어 시험 방법의 유효성을 검증합니다. 이를 통해 시험 방법의
                  재현성과 반복성을 보장하며, 고객이 신뢰할 수 있는 제품 품질을 확보할 수 있도록 합니다.
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12} sx={{ my: 3.25 }}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ type: 'spring', stiffness: 150, damping: 30, delay: 0.4 }}
              >
                <Grid container spacing={2} sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}>
                  <Grid item>
                    <AnimateButton>
                      {/*<Button component={RouterLink} to="/components-overview/buttons" size="large" color="primary" variant="outlined">*/}
                      {/*  둘러보기*/}
                      {/*</Button>*/}
                      <Button
                        onMouseEnter={() => speak('둘러보기')}
                        onMouseLeave={stopSpeaking}
                        onClick={handleDemoLoginClick}
                        size="large"
                        color="primary"
                        variant="outlined"
                      >
                        둘러보기
                      </Button>
                    </AnimateButton>
                  </Grid>
                  <Grid item>
                    <AnimateButton>
                      <Button
                        onMouseEnter={() => speak('로그인')}
                        onMouseLeave={stopSpeaking}
                        component={RouterLink}
                        to="/login"
                        target="_blank"
                        size="large"
                        color="primary"
                        variant="contained"
                        startIcon={<EyeOutlined style={{ fontSize: '1.15rem' }} />}
                      >
                        로그인
                      </Button>
                    </AnimateButton>
                  </Grid>
                </Grid>
              </motion.div>
            </Grid>
            {/*<Grid item xs={12}>*/}
            {/*  <motion.div*/}
            {/*    initial={{ opacity: 0, translateY: 550 }}*/}
            {/*    animate={{ opacity: 1, translateY: 0 }}*/}
            {/*    transition={{ type: 'spring', stiffness: 150, damping: 30, delay: 0.6 }}*/}
            {/*  >*/}
            {/*    <img src={headertechimg} alt="Mantis" style={{ zIndex: 9 }} />*/}
            {/*  </motion.div>*/}
            {/*</Grid>*/}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
