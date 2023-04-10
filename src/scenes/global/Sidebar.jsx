import { useState } from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
//import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { tokens } from '../../theme';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlinedIcon from '@mui/icons-material/PieChartOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';

const Item = ({title, to, icon, selected, setSelected}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem 
      active={selected === title}
      style={{color: colors.grey[100]}}
      onClick={() => setSelected(title)}
      icon={icon}
      component={<Link to={to}/>}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  )
}

const SidebarCustom = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { collapseSidebar } = useProSidebar();
  const [ isCollapse, setIsCollaps ] = useState(false)

  const [selected, setSelected] = useState('Dashboard'); 
  function collapse(){
    collapseSidebar()
    setIsCollaps(!isCollapse)

  }
  
  return (
      <Sidebar backgroundColor={colors.primary[400]}>
        <Menu iconShape="square"
          menuItemStyles={{
            button: ({ level, active }) => {
              if (level === 0) {
                return {
                  backgroundColor: active ? "#6870fa" : undefined,
                  color: colors.grey[100],
                  "&:hover": {
                     color: "#868dfb !important",
                     backgroundColor: "transparent !important"
                   },
                };
              }
            },
          }}
        >
          <MenuItem 
            onClick={() => collapse()}
            icon={isCollapse ? <MenuOutlinedIcon /> : undefined} 
            style={{
              margin: "10px 0",
              color: colors.grey[100]
            }}
          >
          {!isCollapse && (
            <Box
              display={'flex'}
              justifyContent="space-between"
              alignItems={'center'}
              ml="15px"
            >
              <Typography variant="h3" color={colors.grey[100]}>
                DASHBOARD
              </Typography>
              <IconButton>
                <MenuOutlinedIcon />
              </IconButton>
            </Box>
          )}            
          </MenuItem>

          {/*user*/}
          {!isCollapse && (
            <Box mb="25px">
              <Box display={'flex'} justifyContent="center" alignItems={'center'}>
                <img 
                  alt="avatar"
                  width="100px"
                  height="100px"
                  src="../../assets/user.png"
                  style={{cursor: "pointer", borderRadius: "50%"}}
                />
              </Box>
              <Box textAlign={'center'}>
                <Typography variant="h2" color={colors.grey[100]} fontWeight="bold" sx={{m: "10px 0 0 0"}}>Анна Петрова</Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>Администратор</Typography>
              </Box>
            </Box>
          )}           

          {/*menu*/}
          <Box>
            <Item
              title="Статистика"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            {!isCollapse && (
              <Typography variant="h6" color={colors.grey[300]} sx={{m: "15px 0 5px 20px"}}>
                Данные
              </Typography>
            )}
            <Item
              title="Сотрудники"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Клиенты"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Счета"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            {!isCollapse && (
              <Typography variant="h6" color={colors.grey[300]} sx={{m: "15px 0 5px 20px"}}>
                Страницы
              </Typography>
            )}
            <Item
              title="Новый клиент"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Календарь"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ"
              to="/faq"
              icon={<HelpOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            {!isCollapse && (
              <Typography variant="h6" color={colors.grey[300]} sx={{m: "15px 0 5px 20px"}}>
                Диаграммы
              </Typography>
            )}
            <Item
              title="Гистограмма"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Круговая диаграмма"
              to="/pie"
              icon={<PieChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="График"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Карта"
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </Sidebar>
  )
}
 
export default SidebarCustom;