import { useTheme } from '@mui/material';
import { ResponsiveChoropleth } from '@nivo/geo'
import { tokens } from '../theme';
import { mockGeographyData as data } from '../data/mockData';
import { geoFeatures } from '../data/mockGeoFeatures';

const MapChart = ({isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)
  return (
    <ResponsiveChoropleth
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
        tooltip={e => {
          return (
            <div
              style={{
                padding: 12,  
                color: e.feature.color,                 
                background: "#3d3d3d",
              }}
            >
              {e.feature.properties.name}:{" "}
              {e.feature.value
                ? e.feature.value.toLocaleString()
                : "No data"}
            </div>
          );
        }}
        features={geoFeatures.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        domain={[ 0, 1000000 ]}
        colors={["#dbf5ee", "#b7ebde", "#94e2cd", "#70d8bd", "#4cceac", "#3da58a", "#2e7c67", "#1e5245", "#0f2922"]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionScale={isDashboard ? 40 : 150}
        projectionTranslation={isDashboard ? [0.49, 0.6 ] : [ 0.5, 0.5 ]}
        projectionRotation={[ 0, 0, 0 ]}
        borderWidth={1.5}
        borderColor="#ffffff"      
        legends={
          !isDashboard ? [{
            anchor: 'bottom-left',
            direction: 'column',
            justify: true,
            translateX: 20,
            translateY: -100,
            itemsSpacing: 0,
            itemWidth: 94,
            itemHeight: 18,
            itemDirection: 'left-to-right',
            itemTextColor: colors.grey[100],
            itemOpacity: 0.85,
            symbolSize: 18,
            effects: [
                {
                    on: 'hover',
                    style: {
                        itemTextColor: '#ffffff',
                        itemOpacity: 1
                    }
                }
            ]
          }] : undefined
        }
   
       
    />
  );
}
 
export default MapChart;