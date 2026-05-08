import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

import React from 'react';
const sleepData = [
  { day: 'Mon', hours: 7.2, quality: 75 },
  { day: 'Tue', hours: 8.1, quality: 88 },
  { day: 'Wed', hours: 7.8, quality: 82 },
  { day: 'Thu', hours: 8.2, quality: 92 },
  { day: 'Fri', hours: 7.5, quality: 79 },
  { day: 'Sat', hours: 8.4, quality: 94 },
  { day: 'Sun', hours: 7.9, quality: 85 },
];

const hrvData = [
  { day: 'Mon', hrv: 52 },
  { day: 'Tue', hrv: 55 },
  { day: 'Wed', hrv: 53 },
  { day: 'Thu', hrv: 58 },
  { day: 'Fri', hrv: 56 },
  { day: 'Sat', hrv: 61 },
  { day: 'Sun', hrv: 59 },
];

export function RecoverySleep() {
  return (
    <div>
      <h2 className="text-[#371A0A] mb-6">Recovery & Sleep Analytics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#371A0A]/5">
          <div className="mb-4">
            <h3 className="text-[#371A0A] mb-1">Sleep Duration & Quality</h3>
            <p className="text-sm text-[#6B5D4F]">Last 7 days</p>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={sleepData}>
              <defs>
                <linearGradient id="sleepGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#9CAE5A" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#9CAE5A" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="day" stroke="#6B5D4F" style={{ fontSize: '12px' }} />
              <YAxis stroke="#6B5D4F" style={{ fontSize: '12px' }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid rgba(55, 26, 10, 0.1)',
                  borderRadius: '12px',
                  padding: '8px 12px'
                }}
              />
              <Area
                key="sleep-area"
                type="monotone"
                dataKey="hours"
                stroke="#9CAE5A"
                strokeWidth={2}
                fill="url(#sleepGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#371A0A]/5">
          <div className="mb-4">
            <h3 className="text-[#371A0A] mb-1">Heart Rate Variability (HRV)</h3>
            <p className="text-sm text-[#6B5D4F]">Recovery trend</p>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={hrvData}>
              <XAxis dataKey="day" stroke="#6B5D4F" style={{ fontSize: '12px' }} />
              <YAxis stroke="#6B5D4F" style={{ fontSize: '12px' }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid rgba(55, 26, 10, 0.1)',
                  borderRadius: '12px',
                  padding: '8px 12px'
                }}
              />
              <Line
                key="hrv-line"
                type="monotone"
                dataKey="hrv"
                stroke="#BA5C12"
                strokeWidth={3}
                dot={{ fill: '#BA5C12', r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#371A0A]/5">
          <div className="text-sm text-[#6B5D4F] mb-1">Deep Sleep</div>
          <div className="text-2xl text-[#371A0A]">92 min</div>
          <div className="text-xs text-[#9CAE5A] mt-1">+18% vs avg</div>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#371A0A]/5">
          <div className="text-sm text-[#6B5D4F] mb-1">REM Sleep</div>
          <div className="text-2xl text-[#371A0A]">118 min</div>
          <div className="text-xs text-[#9CAE5A] mt-1">Optimal</div>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#371A0A]/5">
          <div className="text-sm text-[#6B5D4F] mb-1">Resting HR</div>
          <div className="text-2xl text-[#371A0A]">54 bpm</div>
          <div className="text-xs text-[#6B5D4F] mt-1">Excellent</div>
        </div>
      </div>
    </div>
  );
}
