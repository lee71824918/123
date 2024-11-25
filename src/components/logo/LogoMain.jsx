import PropTypes from 'prop-types';
// material-ui
import { useTheme } from '@mui/material/styles';

// project-import
import { ThemeMode } from 'config';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

export default function LogoMain({ reverse }) {
  const theme = useTheme();
  return (
    /**
     * if you want to use image instead of svg uncomment following, and comment out <svg> element.
     *
     * <img src={theme.palette.mode === ThemeMode.DARK ? logoDark : logo} alt="Mantis" width="100" />
     *
     */
    <>
      {/* 아이콘 영역 */}
      <svg width="200" height="60" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* 수정된 아이콘 영역 */}
        <g transform="translate(10, 15)">
          {/* 코드 조각 */}
          <rect x="0" y="0" width="30" height="30" rx="5" fill={theme.palette.primary.light} />
          <line x1="6" y1="10" x2="24" y2="10" stroke={theme.palette.primary.dark} strokeWidth="2" />
          <line x1="6" y1="18" x2="18" y2="18" stroke={theme.palette.primary.dark} strokeWidth="2" />
          <line x1="6" y1="26" x2="16" y2="26" stroke={theme.palette.primary.dark} strokeWidth="2" />

          {/* 확대경 */}
          <circle cx="33" cy="15" r="10" stroke={theme.palette.primary.main} strokeWidth="2" fill="none" />
          <line x1="41" y1="21" x2="48" y2="28" stroke={theme.palette.primary.main} strokeWidth="2" />
        </g>

        {/* 텍스트 영역 */}
        <text
          x="70"
          y="38"
          fontSize="24"
          fontWeight="bold"
          fill={theme.palette.mode === ThemeMode.DARK || reverse ? theme.palette.common.white : theme.palette.common.black}
        >
          SoftMetric
        </text>

        {/* 그라데이션 정의 */}
        <defs>
          <linearGradient id="paint0_linear" x1="8.62526" y1="14.0888" x2="5.56709" y2="17.1469" gradientUnits="userSpaceOnUse">
            <stop stopColor={theme.palette.primary.darker} />
            <stop offset="0.9637" stopColor={theme.palette.primary.dark} stopOpacity="0" />
          </linearGradient>
          <linearGradient id="paint1_linear" x1="26.2675" y1="14.1279" x2="28.7404" y2="16.938" gradientUnits="userSpaceOnUse">
            <stop stopColor={theme.palette.primary.darker} />
            <stop offset="1" stopColor={theme.palette.primary.dark} stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
}

LogoMain.propTypes = { reverse: PropTypes.bool };
