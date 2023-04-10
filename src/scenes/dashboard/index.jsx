import Header from "../../components/Header";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from '../../theme';
import { mockTransactions } from '../../data/mockData';
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import PointOfSaleIcon  from "@mui/icons-material/PointOfSale";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TrafficIcon from "@mui/icons-material/Traffic";
import LineChart from '../../components/LineChart';
import BarChart from '../../components/BarChart';
import MapChart from '../../components/MapChart';
import StatBox from '../../components/StatBox';
import ProgressCircle from '../../components/ProgressCircle';


const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)
  return <Box m="20px">
      <Box
        display="flex"
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Header title={'СТАТИСТИКА'} subtitle={'Монитор целевых показателей'} />
        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700], 
              color: colors.grey[100], 
              fontSize: "14px", 
              fontWeight: "bold", 
              padding: "10px 20px" 
            }}
          >
            <DownloadIcon sx={{ mr: "10px"}}/>
            Скачать отчет
          </Button>
        </Box>
      </Box>
      {/*grid */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/*row 1*/}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,361"
            subtitle="Кол-во отправленных писем"
            progress="0.75"
            increase="+14%"
            icon={<EmailIcon sx={{color: colors.greenAccent[600], fontSize: "26px"}}/>}
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="425,781"
            subtitle="Текущие продажи"
            progress="0.5"
            increase="+2%"
            icon={<PointOfSaleIcon sx={{color: colors.greenAccent[600], fontSize: "26px"}}/>}
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="45,311"
            subtitle="Кол-во новых клиентов"
            progress="0.30"
            increase="+21%"
            icon={<PersonAddIcon sx={{color: colors.greenAccent[600], fontSize: "26px"}}/>}
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1,456,789"
            subtitle="Входящий трафик"
            progress="0.40"
            increase="+12%"
            icon={<TrafficIcon sx={{color: colors.greenAccent[600], fontSize: "26px"}}/>}
          />
        </Box>
      
      {/*row 2*/}
      <Box
        gridColumn="span 8"
        gridRow="span 2"
        backgroundColor={colors.primary[400]}
      >
        <Box
          mt="25px"
          p="0 30px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
              Полученный доход
            </Typography>
            <Typography variant="h3" fontWeight="bold" color={colors.greenAccent[500]}>
              $45,456,789
            </Typography>
          </Box>
          <Box>
            <IconButton>
              <DownloadIcon sx={{fontSize: "26px", color: colors.greenAccent[500]}} />
            </IconButton>
          </Box>
        </Box>

        <Box height="250px" mt="-20px">
          <LineChart isDashboard={true} />
        </Box>
      </Box>

      <Box
        gridColumn="span 4"
        gridRow="span 2"
        backgroundColor={colors.primary[400]}
        overflow="auto"
      >
        <Box 
          display="flex"
          justifyContent="space-between"
          alignitems="center"
          borderBottom={`4px solid ${colors.primary[500]}`}
          color={colors.grey[100]}
          p="15px"
        >
          <Typography varisnt="h5" color={colors.grey[100]} fontWeight="600">
            Недавние сделки
          </Typography>
        </Box>
        {mockTransactions.map((t, i) => (
          <Box
            key={`${t.txId}-${i}`}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            p="15px"
          >
            <Box>
            <Typography varisnt="h5" color={colors.greenAccent[500]} fontWeight="600">
              {t.txId}
            </Typography>
            <Typography color={colors.grey[100]} fontWeight="600">
              {t.user}
            </Typography>
            </Box>
            <Box color={colors.grey[100]}>
              {t.date}
            </Box>
            <Box
              backgroundColor={colors.greenAccent[500]}
              p="15px"
              borderRadius="4px"
            >
              {t.cost}
            </Box>
          </Box>
        ))}
      </Box>

      {/*row 3 */}
      <Box
        gridColumn="span 4"
        gridRow="span 2"
        backgroundColor={colors.primary[400]}
        p="30px"
      >
        <Typography varisnt="h5" color={colors.greenAccent[500]} fontWeight="600">
          Кампания
        </Typography>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          mt="25px"
        >
          <ProgressCircle size="125" />
          <Typography variant="h5" color={colors.greenAccent[500]} sx={{mt: "15px"}}>
            $45,123 Полученный доход
          </Typography>
          <Typography>
            включает дополнительные расходы
          </Typography>
        </Box>
      </Box>
      <Box
        gridColumn="span 4"
        gridRow="span 2"
        backgroundColor={colors.primary[400]}
      >
        <Typography varisnt="h5" color={colors.greenAccent[500]} fontWeight="600" sx={{p: "30px 30px 0 30px"}}>
          Количество продаж
        </Typography>
        <Box
          height="250px"
          mt="-20px"
        >
          <BarChart isDashboard={true} />
        </Box>
      </Box>
      <Box
        gridColumn="span 4"
        gridRow="span 2"
        backgroundColor={colors.primary[400]}
        p="30px"
      >
        <Typography varisnt="h5" color={colors.greenAccent[500]} fontWeight="600" sx={{mb: "15px"}}>
          Трафик по странам
        </Typography>
        <Box
          height="200px"
        >
          <MapChart isDashboard={true} />
        </Box>
      </Box>

      {/* */}
    </Box>
  </Box>
}
 
export default Dashboard;