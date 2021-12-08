import { useState, useRef, useEffect } from 'react';
import { Select, MenuItem } from '@mui/material';
import {
  KeyboardArrowDownOutlined,
  AccessTimeOutlined,
  LocalLibraryOutlined,
  CategoryOutlined,
} from '@mui/icons-material';
import * as echarts from 'echarts/core';
import {
  TitleComponent,
  GridComponent,
  MarkLineComponent,
} from 'echarts/components';
import { LineChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import './index.css';

echarts.use([
  TitleComponent,
  GridComponent,
  MarkLineComponent,
  LineChart,
  CanvasRenderer,
  UniversalTransition,
]);

const Content = () => {
  let [innerWdith, setInnerWidth] = useState<number>();

  let myChart = useRef<echarts.ECharts | null>(null);

  let chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.onresize = () => setInnerWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    myChart.current?.resize({
      width: 'auto',
      height: 'auto',
    });
  }, [innerWdith]);

  useEffect(() => {
    myChart.current = echarts.init(chartRef.current as HTMLDivElement);

    (myChart.current as echarts.ECharts).setOption({
      title: {
        text: 'Score Records',
        textStyle: {
          color: '#000',
        },
      },
      xAxis: [
        {
          type: 'category',
          offset: 40,
          boundaryGap: false,
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
        },
        {
          type: 'category',
          position: 'bottom',
          boundaryGap: false,
          data: ['3.80', '3.93', '3.89', '3.90', '4.00'],
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            fontFamily: 'Roboto',
            fontSize: 22,
            fontWeight: 'bolder',
            color: '#000',
          },
        },
      ],
      yAxis: {
        type: 'value',
        show: false,
        min: 3.5,
        max: 4,
      },
      series: [
        {
          data: [
            ['1st Semester', 3.8],
            ['2st Semester', 3.93],
            ['3rd Semester', 3.89],
            ['4th Semester', 3.9],
            ['5th Semester', 4.0],
          ],
          type: 'line',
          smooth: true,
          areaStyle: {
            color: {
              type: 'radial',
              x: 0.5,
              y: -3,
              r: 3.8,
              colorStops: [
                {
                  offset: 1,
                  color: '#fff',
                },
                {
                  offset: 0.9,
                  color: '#dae4f8',
                },
                {
                  offset: 0,
                  color: '#548de9',
                },
              ],
            },
          },
          markLine: {
            symbol: ['none', 'none'],
            label: { show: false },
            lineStyle: { color: '#aaa' },
            data: [
              { xAxis: 0 },
              { xAxis: 1 },
              { xAxis: 2 },
              { xAxis: 3 },
              { xAxis: 4 },
            ],
          },
        },
      ],
    });
  }, []);

  return (
    <>
      <div className="wd-flex wd-justify-between wd-items-center">
        <span className="wd-font-bold wd-text-xl">Summary Report</span>
        <div>
          <Select
            className="!wd-rounded-xl wd-h-10 wd-w-40"
            defaultValue="0"
            IconComponent={KeyboardArrowDownOutlined}>
            <MenuItem value="0">6th Semester</MenuItem>
            <MenuItem value="1">7th Semester</MenuItem>
            <MenuItem value="2">8th Semester</MenuItem>
            <MenuItem value="3">9th Semester</MenuItem>
          </Select>
        </div>
      </div>
      <div className="wd-flex wd-justify-center wd-items-center wd-mt-10 wd-rounded-xl wd-bg-blue-500 wd-from-blue-400 wd-bg-gradient-to-t wd-h-200px">
        <div className="divider wd-h-full wd-flex-1 wd-flex wd-justify-between wd-items-center">
          <div className="wd-w-2/5 wd-h-full wd-flex wd-justify-center wd-items-center">
            <div className="wd-flex wd-justify-center wd-items-center wd-bg-light-50 wd-rounded-1/2 wd-leading-0 wd-p-1">
              <AccessTimeOutlined className="!wd-text-4xl wd-text-cyan-300" />
            </div>
          </div>
          <div className="wd-w-full wd-flex wd-flex-col wd-justify-center wd-items-start wd-text-light-50">
            <div className="wd-h-30">
              <p>Attendance</p>
              <div className="wd-mt-2 wd-mb-1">
                <span className="wd-text-4xl wd-font-bold">89</span>
                <span className="wd-mx-1">/</span>
                <div className="wd-text-lg wd-inline-block wd-relative">
                  89
                  <div className="wd-absolute wd--top-4 wd--right-13 wd-px-2 wd-rounded-xl wd-bg-light-50 wd-text-sm wd-text-yellow-300">
                    100%
                  </div>
                </div>
              </div>
              <div>
                <p className="wd-text-xs wd-font-light">
                  Great,you always attending class, keep it up!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="divider wd-h-full wd-flex-1 wd-flex wd-justify-between wd-items-center">
          <div className="wd-w-2/5 wd-h-full wd-flex wd-justify-center wd-items-center">
            <div className="wd-flex wd-justify-center wd-items-center wd-bg-light-50 wd-rounded-1/2 wd-leading-0 wd-p-1">
              <LocalLibraryOutlined className="!wd-text-4xl wd-text-yellow-300" />
            </div>
          </div>
          <div className="wd-w-full wd-flex wd-flex-col wd-justify-center wd-items-start wd-text-light-50">
            <div className="wd-h-30">
              <p>Task</p>
              <div className="wd-mt-2 wd-mb-1">
                <span className="wd-text-4xl wd-font-bold">134</span>
                <span className="wd-mx-1">/</span>
                <div className="wd-text-lg wd-inline-block wd-relative">
                  140
                  <div className="wd-absolute wd--top-4 wd--right-13 wd-px-2 wd-rounded-xl wd-bg-light-50 wd-text-sm wd-text-yellow-300">
                    100%
                  </div>
                </div>
              </div>
              <div>
                <p className="wd-text-xs wd-font-light">
                  Don't forget to turn in your task
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="divider wd-h-full wd-flex-1 wd-flex wd-justify-between wd-items-center">
          <div className="wd-w-2/5 wd-h-full wd-flex wd-justify-center wd-items-center">
            <div className="wd-flex wd-justify-center wd-items-center wd-bg-light-50 wd-rounded-1/2 wd-leading-0 wd-p-1">
              <CategoryOutlined className="!wd-text-4xl wd-text-red-400" />
            </div>
          </div>
          <div className="wd-w-full wd-flex wd-flex-col wd-justify-center wd-items-start wd-text-light-50">
            <div className="wd-h-30">
              <p>Subject</p>
              <div className="wd-mt-2 wd-mb-1">
                <span className="wd-text-4xl wd-font-bold">12</span>
                <span className="wd-mx-1">/</span>
                <div className="wd-text-lg wd-inline-block wd-relative">
                  15
                  <div className="wd-absolute wd--top-4 wd--right-13 wd-px-2 wd-rounded-xl wd-bg-light-50 wd-text-sm wd-text-yellow-300">
                    100%
                  </div>
                </div>
              </div>
              <div>
                <p className="wd-text-xs wd-font-light">
                  You take 12 subjects at this semester
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wd-flex wd-flex-row wd-justify-center wd-items-center wd-pt-10 wd-h-100">
        <div
          className="wd-flex-2 wd-h-full wd-min-w-3/5 wd-p-5 wd-border-gray-100 wd-border-1 wd-bg-white wd-rounded-xl wd-shadow-lg wd-shadow-dark-50"
          ref={chartRef}></div>
        <div className="wd-flex-1 wd-h-full wd-rounded-xl wd-bg-blue-400 wd-p-10 wd-text-light-50 wd-ml-10">
          <div>
            <p className="wd-text-4xl wd-font-bold">GPA</p>
            <p className="wd-text-xs wd-font-thin">Grade Point Average</p>
          </div>
          <div className="wd-mt-10">
            <p className="wd-text-7xl wd-font-bold">3.93</p>
            <p className="wd-text-xs wd-font-thin wd-mt-4">
              Top 10 students in campus
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Content;
