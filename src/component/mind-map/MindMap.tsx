import React from 'react';
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import HighchartsNetworkgraph from "highcharts/modules/networkgraph";
import { TLink } from "../type/TLink";

HighchartsNetworkgraph(Highcharts);

const options = (mindMap: TLink[]): Highcharts.Options => ({
  chart: {
    type: 'networkgraph',
    height: '50%',
    marginTop: 80
  },
  title: {
    style: {
      display: 'none'
    }
  },
  plotOptions: {
    networkgraph: {
      keys: ['from', 'to'],
      layoutAlgorithm: {
        enableSimulation: true,
        integration: 'verlet',
        linkLength: 200
      }
    }
  },
  series: [
    {
      color: '#A53E32',
      link: {
        width: 2,
        color: '#A53E32',
        dashStyle: 'dash'
      },
      marker: {
        radius: 50,
        fillColor: '#FFFFFF',
        lineWidth: 2,
        lineColor: '#A53E32'
      },
      dataLabels: {
        rotation: 0,
        useHTML: true,
        linkTextPath: {
          enabled: false
        },
        linkFormat: '',
        enabled: true,
      },
      data: mindMap,
      type: "networkgraph"
    }
  ],
  credits: {
    enabled: false
  }
});

interface MindMapProps {
  mindMap: TLink[];
}

export const MindMap: React.FC<MindMapProps> = ({
  mindMap
}) => {
  return (
    <div className="mt-[50px]">
      <HighchartsReact
        highcharts={Highcharts}
        options={options(mindMap)}
      />
    </div>
  );
};