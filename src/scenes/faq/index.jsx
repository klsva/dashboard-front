import { Box, useTheme, Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import Header from '../../components/Header';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tokens } from '../../theme';

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return <Box m="20px">
    <Header title='FAQ' subtitle='Frequently Asked Questions Page' />
    <Accordion sx={{
          backgroundColor: colors.primary[400]
        }}>
      <AccordionSummary 
        expandIcon={<ExpandMoreIcon />}
        sx={{
          backgroundColor: colors.blueAccent[700]
        }}
      >
        <Typography variant="h5" color={colors.grey[100]}>
          Часто задаваемые вопрос
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        Также как сплочённость команды профессионалов требует определения 
        и уточнения как самодостаточных, так и внешне зависимых концептуальных 
        решений. А ещё базовые сценарии поведения пользователей, которые представляют 
        собой яркий пример континентально-европейского типа политической культуры, 
        будут подвергнуты целой серии независимых исследований. Вот вам яркий 
        пример современных тенденций — базовый вектор развития создаёт предпосылки 
        для анализа существующих паттернов поведения.                 
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion sx={{
          backgroundColor: colors.primary[400]
        }}>
      <AccordionSummary 
        expandIcon={<ExpandMoreIcon />}
        sx={{
          backgroundColor: colors.blueAccent[700]
        }}
      >
        <Typography variant="h5" color={colors.grey[100]}>
          Другой часто задаваемые вопрос
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        Также как сплочённость команды профессионалов требует определения 
        и уточнения как самодостаточных, так и внешне зависимых концептуальных 
        решений. А ещё базовые сценарии поведения пользователей, которые представляют 
        собой яркий пример континентально-европейского типа политической культуры, 
        будут подвергнуты целой серии независимых исследований. Вот вам яркий 
        пример современных тенденций — базовый вектор развития создаёт предпосылки 
        для анализа существующих паттернов поведения.                 
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion sx={{
          backgroundColor: colors.primary[400]
        }}>
      <AccordionSummary 
        expandIcon={<ExpandMoreIcon />}
        sx={{
          backgroundColor: colors.blueAccent[700]
        }}
      >
        <Typography variant="h5" color={colors.grey[100]}>
          Важный вопрос
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        Также как сплочённость команды профессионалов требует определения 
        и уточнения как самодостаточных, так и внешне зависимых концептуальных 
        решений. А ещё базовые сценарии поведения пользователей, которые представляют 
        собой яркий пример континентально-европейского типа политической культуры, 
        будут подвергнуты целой серии независимых исследований. Вот вам яркий 
        пример современных тенденций — базовый вектор развития создаёт предпосылки 
        для анализа существующих паттернов поведения.                 
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion sx={{
          backgroundColor: colors.primary[400]
        }}>
      <AccordionSummary 
        expandIcon={<ExpandMoreIcon />}
        sx={{
          backgroundColor: colors.blueAccent[700]
        }}
      >
        <Typography variant="h5" color={colors.grey[100]}>
          Просто вопрос
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        Также как сплочённость команды профессионалов требует определения 
        и уточнения как самодостаточных, так и внешне зависимых концептуальных 
        решений. А ещё базовые сценарии поведения пользователей, которые представляют 
        собой яркий пример континентально-европейского типа политической культуры, 
        будут подвергнуты целой серии независимых исследований. Вот вам яркий 
        пример современных тенденций — базовый вектор развития создаёт предпосылки 
        для анализа существующих паттернов поведения.                 
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion sx={{
          backgroundColor: colors.primary[400]
        }}>
      <AccordionSummary 
        expandIcon={<ExpandMoreIcon />}
        sx={{
          backgroundColor: colors.blueAccent[700]
        }}
      >
        <Typography variant="h5" color={colors.grey[100]}>
          Вопрос на который не ответить
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        Также как сплочённость команды профессионалов требует определения 
        и уточнения как самодостаточных, так и внешне зависимых концептуальных 
        решений. А ещё базовые сценарии поведения пользователей, которые представляют 
        собой яркий пример континентально-европейского типа политической культуры, 
        будут подвергнуты целой серии независимых исследований. Вот вам яркий 
        пример современных тенденций — базовый вектор развития создаёт предпосылки 
        для анализа существующих паттернов поведения.              
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion sx={{
          backgroundColor: colors.primary[400]
        }}>
      <AccordionSummary 
        expandIcon={<ExpandMoreIcon />}
        sx={{
          backgroundColor: colors.blueAccent[700]
        }}
      >
        <Typography variant="h5" color={colors.grey[100]}>
          Ваш вопрос
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        Также как сплочённость команды профессионалов требует определения 
        и уточнения как самодостаточных, так и внешне зависимых концептуальных 
        решений. А ещё базовые сценарии поведения пользователей, которые представляют 
        собой яркий пример континентально-европейского типа политической культуры, 
        будут подвергнуты целой серии независимых исследований. Вот вам яркий 
        пример современных тенденций — базовый вектор развития создаёт предпосылки 
        для анализа существующих паттернов поведения.                 
        </Typography>
      </AccordionDetails>
    </Accordion>
   
  </Box>
}
 
export default FAQ;

