import { useState } from "react";
import FullCalendar from '@fullcalendar/react';
import { formatDate } from '@fullcalendar/core';
import ruLocale from "@fullcalendar/core/locales/ru"
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from "@fullcalendar/interaction";
import { Box, List, ListItem, ListItemText, Typography, useTheme } from '@mui/material';
import Header from "../../components/Header";
import { tokens } from "../../theme";

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selected) => {
    const title = prompt('Введите название и описание вашего события.')
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if(title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay
      })
    }
  };

  const handleEventClick = (selected) => {
    if (window.confirm(`Вы хотите удалить событие '${selected.event.title}'?`)){
      selected.event.remove();
    }
  };


  return <Box m="20px">
    <Header title='КАЛЕНДАРЬ' subtitle={'Интерактивный календарь с возможностью добавитть, переместить или удалить событие.'} />
    <Box display="flex" justifyContent={'space-between'}>
      {/*calendar sidebar*/}
      <Box 
        flex="1 1 20%" 
        backgroundColor={colors.primary[400]}
        p="15px"
        borderRadius="4px"
      >
        <Typography varisnt="h5">События</Typography>
        <List>
          {currentEvents.map((event) => (
            <ListItem
              key={event.id}
              sx={{
                backgroundColor: colors.greenAccent[500],
                margin: "10px 0",
                borderRadius: "2px"  
              }}
            >
              <ListItemText
                primary={event.title}
                secondary={
                  <Typography>
                    {formatDate(event.start, {
                      year: "numeric",
                      month: "short",
                      day: "numeric"
                    })}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </Box>

      {/*calendar */}
      <Box flex="1 1 100%" ml="15px">
        <FullCalendar 
          height={'75vh'}
          plugins={[
            dayGridPlugin,
            timeGridPlugin,
            interactionPlugin,
            listPlugin
          ]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth"
          }}
          firstDay={1}
          locale={ruLocale}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          select={handleDateClick}
          eventClick={handleEventClick}
          eventsSet={(events) => setCurrentEvents(events)}
          initialEvents={[
            {id: "123", title: "Встеча с поставщиком ООО 'Рога и копыта'", date: "2023-04-12"},
            {id: "223", title: "Звонок по поводу поставки контейнеров", date: "2023-04-04"},
            {id: "323", title: "Совещание с отделом маркетинга", date: "2023-04-15"},
            {id: "423", title: "Сдать отчет руководителю", date: "2023-04-10"},
          ]}
        />
      </Box>
    </Box>
  </Box>
}
 
export default Calendar;