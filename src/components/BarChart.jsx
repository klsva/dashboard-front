import { useTheme } from '@mui/material';
import { ResponsiveBar } from '@nivo/bar';
import { tokens } from '../theme';
import { mockBarData as data } from '../data/mockData';


const BarChart = ( {isDashboard = false} ) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)
  return (
    <ResponsiveBar
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
        keys={[
            'hot dog',
            'burger',
            'sandwich',
            'kebab',
            'fries',
            'donut'
        ]}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 100, left: 60 }}
        padding={0.25}
        innerPadding={1}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        //colors={{ scheme: 'greens' }}
        colors={["#dbf5ee", "#b7ebde", "#94e2cd", "#70d8bd", "#4cceac", "#3da58a", "#2e7c67", "#1e5245", "#0f2922"]}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'fries'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'sandwich'
                },
                id: 'lines'
            }
        ]}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 0,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDashboard ? undefined : 'country',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDashboard ? undefined : 'food',
            legendPosition: 'middle',
            legendOffset: -47
        }}
        enableGridY={false}
        labelSkipWidth={12}
        labelSkipHeight={15}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    '1.6'
                ]
            ]
        }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 68,
                itemsSpacing: 2,
                itemWidth: 100,
                itemTextColor: colors.grey[100],
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            backgroundColor: colors.grey[500],
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        tooltip={({ id, value, color }) => (
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
        
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
    />
  );
}
 
export default BarChart;