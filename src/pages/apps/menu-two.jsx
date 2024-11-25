import { useMemo, useState } from 'react';

// material-ui
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

// third-party
import { PatternFormat } from 'react-number-format';

// project-import
import Avatar from 'components/@extended/Avatar';
import IconButton from 'components/@extended/IconButton';
import { IndeterminateCheckbox } from 'components/third-party/react-table';

import CustomerModal from 'sections/apps/customer/CustomerModal';
import AlertCustomerDelete from 'sections/apps/customer/AlertCustomerDelete';
import CustomerTable from 'sections/apps/customer/CustomerTable';
import EmptyReactTable from 'pages/tables/react-table/empty';

import { useGetCustomer } from 'api/customer';
import { ImagePath, getImageUrl } from 'utils/getImageUrl';

// assets
import DeleteOutlined from '@ant-design/icons/DeleteOutlined';
import EditOutlined from '@ant-design/icons/EditOutlined';
import EyeOutlined from '@ant-design/icons/EyeOutlined';
import PlusOutlined from '@ant-design/icons/PlusOutlined';
import DownloadOutlined from '@ant-design/icons/DownloadOutlined';

import Grid from '@mui/material/Grid';
import AnalyticEcommerce from '../../components/cards/statistics/AnalyticEcommerce';
import UniqueVisitorCard from '../../sections/dashboard/default/UniqueVisitorCard';
import MainCard from '../../components/MainCard';
import Box from '@mui/material/Box';
import MonthlyBarChart from '../../sections/dashboard/default/MonthlyBarChart';
import OrdersTable from '../../sections/dashboard/default/OrdersTable';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ReportAreaChart from '../../sections/dashboard/default/ReportAreaChart';
import SaleReportCard from '../../sections/dashboard/default/SaleReportCard';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import GiftOutlined from '@ant-design/icons/GiftOutlined';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import MessageOutlined from '@ant-design/icons/MessageOutlined';
import SettingOutlined from '@ant-design/icons/SettingOutlined';
import AvatarGroup from '@mui/material/AvatarGroup';
import avatar1 from '../../assets/images/users/avatar-1.png';
import avatar2 from '../../assets/images/users/avatar-2.png';
import avatar3 from '../../assets/images/users/avatar-3.png';
import avatar4 from '../../assets/images/users/avatar-4.png';
import Button from '@mui/material/Button';
import { FormattedMessage } from 'react-intl';
import QuestionCircleOutlined from '@ant-design/icons/QuestionCircleOutlined';

// avatar style
const avatarSX = {
  width: 36,
  height: 36,
  fontSize: '1rem'
};

// action style
const actionSX = {
  mt: 0.75,
  ml: 1,
  top: 'auto',
  right: 'auto',
  alignSelf: 'flex-start',
  transform: 'none'
};

// ==============================|| CUSTOMER LIST ||============================== //

export default function MenuTwo() {
  const { customersLoading, customers: lists } = useGetCustomer();

  const [open, setOpen] = useState(false);

  const [customerModal, setCustomerModal] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [customerDeleteId, setCustomerDeleteId] = useState('');

  const handleClose = () => {
    setOpen(!open);
  };

  const columns = useMemo(
    () => [
      {
        header: '파일명',
        accessorKey: 'id',
        meta: {
          className: 'cell-center'
        }
      },
      {
        header: '카테고리',
        accessorKey: 'status',
        cell: (cell) => {
          switch (cell.getValue()) {
            case 3:
              return <Chip color="error" label="사람" size="small" variant="light" />;
            case 1:
              return <Chip color="success" label="동물" size="small" variant="light" />;
            case 2:
            default:
              return <Chip color="info" label="기타" size="small" variant="light" />;
          }
        }
      },
      {
        header: '이미지 설명',
        accessorKey: 'name',
        cell: ({ row, getValue }) => <Typography variant="subtitle1">{getValue()}</Typography>
      },
      {
        header: '해상도',
        accessorKey: 'contact',
        cell: ({ getValue }) => <PatternFormat displayType="text" format="+1 (###) ###-####" mask="_" defaultValue={getValue()} />
      },
      {
        header: '크기',
        accessorKey: 'age',
        meta: {
          className: 'cell-right'
        }
      },
      {
        header: '생성자',
        accessorKey: 'country'
      },
      {
        header: '생성일',
        accessorKey: 'country'
      },
      {
        header: '조작',
        meta: {
          className: 'cell-center'
        },
        disableSortBy: true,
        cell: ({ row }) => {
          return (
            <Stack direction="row" alignItems="center" justifyContent="center" spacing={0}>
              <Tooltip title="미리보기">
                <IconButton color={row.getIsExpanded() ? 'error' : 'secondary'}>
                  <EyeOutlined />
                </IconButton>
              </Tooltip>
              <Tooltip title="다운로드">
                <IconButton color="primary">
                  <DownloadOutlined />
                </IconButton>
              </Tooltip>
              <Tooltip title="삭제">
                <IconButton
                  color="error"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpen(true);
                    setCustomerDeleteId(row.original.name);
                  }}
                >
                  <DeleteOutlined />
                </IconButton>
              </Tooltip>
            </Stack>
          );
        }
      }
    ],
    []
  );

  if (customersLoading) return <EmptyReactTable />;

  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* row 1 */}
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Box display="flex" alignItems="center">
          <Typography variant="h5" sx={{ mr: 1 }}>
            <FormattedMessage id="이미지 파일 관리" />
          </Typography>
          <Tooltip title="여기에서 이미지 파일 관리의 기능과 정보를 확인할 수 있습니다.">
            <IconButton sx={{ color: 'grey.600' }}>
              <QuestionCircleOutlined />
            </IconButton>
          </Tooltip>
        </Box>
      </Grid>

      {/* row 2 */}
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <CustomerTable
          {...{
            data: lists,
            columns,
            modalToggler: () => {
              setCustomerModal(true);
              setSelectedCustomer(null);
            }
          }}
        />
      </Grid>
      <AlertCustomerDelete id={Number(customerDeleteId)} title={customerDeleteId} open={open} handleClose={handleClose} />
      <CustomerModal open={customerModal} modalToggler={setCustomerModal} customer={selectedCustomer} />
    </Grid>
  );
}
