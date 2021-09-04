/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Heading from './Heading';
import {Dimensions} from 'react-native';
import {LineChart, PieChart} from 'react-native-chart-kit';

const lineData = [
  Math.random() * 10,
  Math.random() * 10,
  Math.random() * 10,
  Math.random() * 10,
  Math.random() * 10,
];

export const Lines = () => {
  return (
    <>
      <Heading style={{fontSize: 18}}>Bezier Line Chart</Heading>
      <LineChart
        data={{
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
          datasets: [
            {
              data: lineData,
            },
          ],
        }}
        width={Dimensions.get('window').width - 40} // from react-native
        height={220}
        withDots={false}
        withHorizontalLines={false}
        withVerticalLines={false}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: '#E6E7FD',
          backgroundGradientFrom: '#E1F2FB',
          backgroundGradientTo: '#E1F2FB',
          color: () => `#4B6587`,
          labelColor: () => `#4B6587`,
          style: {
            borderRadius: 4,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 4,
          padding: 10,
        }}
      />
    </>
  );
};

const data = [
  {
    name: 'Seoul',
    population: 21500000,
    color: '#A7E9AF',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Toronto',
    population: 2800000,
    color: '#F3DFE3',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Beijing',
    population: 527612,
    color: '#FFB6B9',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'New York',
    population: 8538000,
    color: '#8ED6FF',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Moscow',
    population: 11920000,
    color: '#6E7DA2',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
];

export const Pie = () => {
  return (
    <>
      <Heading style={{fontSize: 18}}>Pie Chart</Heading>
      <PieChart
        data={data}
        width={200} // from react-native
        height={200}
        hasLegend={false}
        chartConfig={{
          backgroundColor: '#26872a',
          backgroundGradientFrom: '#43a047',
          backgroundGradientTo: '#66bb6a',
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        accessor={'population'}
        backgroundColor={'transparent'}
        paddingLeft={'15'}
        center={[30, 10]}
        absolute
      />
    </>
  );
};
