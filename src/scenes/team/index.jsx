import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from '../../data/mockData';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import SecurityIcon from '@mui/icons-material/Security';
import Header from "../../components/Header";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    {field: "id", headerName: "ID"},
    {
      field: "name", 
      headerName: "ФИО", 
      flex:1, 
      cellClassName: "name-column--cell"
    },
    {
      field: "age", 
      headerName: "Возраст", 
      type: "number", 
      headerAlighn: "left", 
      alighn: "left", 
      cellClassName: "name-column--cell"
    },
    {
      field: "phone", 
      headerName: "Телефон", 
      flex: 1
    },
    {
      field: "email", 
      headerName: "Email", 
      flex: 1
    },
    {
      field: "access", 
      headerName: "Доступ", 
      flex: 1,
      renderCell: ({row: {access}}) => {
        return <Box width="60%"
          m="0 auto"
          p="5px"
          display={'flex'}
          justifyContent="center"
          backgroundColor={
            access === "admin"
            ? colors.greenAccent[600]
            : colors.greenAccent[700]
          }
          borderRadius="4px"
        >
          {access === "admin" && <AdminPanelSettingsIcon />}
          {access === "manager" && <SecurityIcon />}
          {access === "user" && <LockOpenIcon />}
          <Typography color={colors.grey[100]} sx={{ml: "5px"}}>
            {access}
          </Typography>
        </Box>
      }
    },

  ]
  return (
    <Box m="20px">
      <Header title="СОТРУДНИКИ" subtitle={'Управление сотрудниками'} />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: 'none',
          },
          "& .MuiDataGrid-cell": {
            borderBottom: 'none'
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300]
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: 'none'
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400]
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: 'none',
            backgroundColor: colors.blueAccent[700]
          }
          }}
      >
        <DataGrid 
          rows={mockDataTeam}
          columns={columns}
        />
      </Box>
    </Box>
  );
}
 
export default Team;