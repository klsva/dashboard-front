import { useTheme } from '@mui/material';
import { ResponsiveLine } from '@nivo/line';
import { tokens } from '../theme';
import { mockLineData as data } from '../data/mockData';

const LineChart = ({isDashboard = false}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <ResponsiveLine
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
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    xScale={{ type: 'point' }}
    yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: true,
        reverse: false
    }}
    enableSlices="x"
    yFormat=" >-.2f"
    axisTop={null}
    axisRight={null}
    axisBottom={{
        orient: 'bottom',
        tickSize: 5,
        tickPadding: 6,
        tickRotation: 0,
        legend: isDashboard ? undefined : 'transportation',
        legendOffset: 36,
        legendPosition: 'middle'
    }}
    axisLeft={{
        orient: 'left',
        tickValues: 5,
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : 'count',
        legendOffset: -40,
        legendPosition: 'middle'
    }}
    enableGridX={false}
    enableGridY={false}
    colors={[ "#b7ebde", "#70d8bd", "#3da58a"]}
    lineWidth={3}
    enablePoints={false}
    pointSize={10}
    pointColor={{ theme: 'background' }}
    pointBorderWidth={2}
    pointBorderColor={{ from: 'serieColor' }}
    pointLabelYOffset={-12}
    useMesh={true}
    animate={false}
    legends={[
        {
            anchor: 'top-right',
            direction: 'row',
            justify: false,
            itemTextColor: colors.grey[100],
            translateX: 20,
            translateY: -30,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 98,
            itemHeight: 29,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
            effects: [
                {
                    on: 'hover',
                    style: {
                        itemBackground: 'rgba(0, 0, 0, .03)',
                        itemOpacity: 1
                    }
                }
            ]
        }
    ]}
    sliceTooltip={({ slice }) => {
            return (
                <div
                    style={{
                        background: "#3d3d3d",
                        padding: '12px',
                    }}
                >
                    <div>x: {Math.round(slice.id)}</div>
                    {slice.points.map(point => (
                        <div
                            key={point.id}
                            style={{
                                color: point.serieColor,
                                padding: '3px 0',
                            }}
                        >
                            <strong>{point.serieId}</strong> [{point.data.yFormatted}]
                        </div>
                    ))}
                </div>
            )
        }}
/>
  );
}
 
export default LineChart;