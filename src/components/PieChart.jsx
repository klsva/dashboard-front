import { useTheme } from '@mui/material';
import { ResponsivePie } from '@nivo/pie';
import { tokens } from '../theme';
import { mockPieData as data } from '../data/mockData';

const PieChart = ({isDashboard = false}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)
  return (
    <ResponsivePie
      data={data}
      theme={{
          axis: {
            domain: {
              line: {
                stroke: colors.grey[100]
              }
            },
            legend: {
              text: {
                fill: colors.grey[100]
              }
            },
            ticks: {
              line: {
                stroke: colors.grey[100],
                strokeWidth: 1
              },
              text: {
                fill: colors.grey[100],
              }
            },
          }
        }}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      sortByValue={true}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      colors={["#dbf5ee", "#b7ebde", "#94e2cd", "#70d8bd", "#4cceac", "#3da58a", "#2e7c67", "#1e5245", "#0f2922"]}
      borderWidth={1}
      borderColor={{
          from: 'color',
          modifiers: [
              [
                  'darker',
                  0.2
              ]
          ]
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor={colors.grey[100]}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: 'color' }}
      enableArcLabels={false}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
          from: 'color',
          modifiers: [
              [
                  'darker',
                  2
              ]
          ]
      }}
      legends={[
          {
              anchor: 'bottom',
              direction: 'row',
              justify: false,
              translateX: 0,
              translateY: 56,
              itemsSpacing: 0,
              itemWidth: 100,
              itemHeight: 18,
              itemTextColor: colors.grey[100],
              itemDirection: 'left-to-right',
              itemOpacity: 1,
              symbolSize: 18,
              symbolShape: 'circle',
              effects: [
                  {
                      on: 'hover',
                      style: {
                          itemTextColor: colors.grey[100]
                      }
                  }
              ]
          }
      ]}
      tooltip={({ datum: { id, value, color } }) => (
            <div
                style={{
                    padding: 12,
                    color,
                    background: "#3d3d3d",
                }}
            >
                <strong>
                    {id}: {value}
                </strong>
            </div>
        )}
  />
  );
}
 
export default PieChart;