import { Activity, TrendingUp, Zap } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import React from 'react';

const paceData = [
  { week: 'Week 1', pace: 9.2 },
  { week: 'Week 2', pace: 9.0 },
  { week: 'Week 3', pace: 8.8 },
  { week: 'Week 4', pace: 8.6 },
];

export function RunningAnalytics() {
  return (
    <div>
      <h2 className="text-[#371A0A] mb-6">Running & Training Analytics</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-[#371A0A]/5">
          <div className="mb-4">
            <h3 className="text-[#371A0A] mb-1">Average Pace Trend</h3>
            <p className="text-sm text-[#6B5D4F]">Past 4 weeks</p>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={paceData}>
              <XAxis dataKey="week" stroke="#6B5D4F" style={{ fontSize: '12px' }} />
              <YAxis
                stroke="#6B5D4F"
                style={{ fontSize: '12px' }}
                domain={[8, 10]}
                tickFormatter={(value) => `${value} min/mi`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid rgba(55, 26, 10, 0.1)',
                  borderRadius: '12px',
                  padding: '8px 12px'
                }}
                formatter={(value: number) => [`${value} min/mi`, 'Pace']}
              />
              <Line
                key="pace-line"
                type="monotone"
                dataKey="pace"
                stroke="#BA5C12"
                strokeWidth={3}
                dot={{ fill: '#BA5C12', r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#371A0A]/5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-[#BA5C12]/20 flex items-center justify-center">
                <Activity className="w-5 h-5 text-[#BA5C12]" />
              </div>
              <span className="text-sm text-[#6B5D4F]">Total Mileage</span>
            </div>
            <div className="text-3xl text-[#371A0A]">18.3 mi</div>
            <div className="text-xs text-[#9CAE5A] mt-1">+2.1 mi vs last week</div>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#371A0A]/5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-[#9CAE5A]/20 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-[#9CAE5A]" />
              </div>
              <span className="text-sm text-[#6B5D4F]">Best Pace</span>
            </div>
            <div className="text-3xl text-[#371A0A]">7:42</div>
            <div className="text-xs text-[#6B5D4F] mt-1">per mile</div>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#371A0A]/5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-[#BA5C12]/20 flex items-center justify-center">
                <Zap className="w-5 h-5 text-[#BA5C12]" />
              </div>
              <span className="text-sm text-[#6B5D4F]">VO2 Max</span>
            </div>
            <div className="text-3xl text-[#371A0A]">48</div>
            <div className="text-xs text-[#9CAE5A] mt-1">+3 vs last month</div>
          </div>
        </div>
      </div>
    </div>
  );
}
