import { Dumbbell, TrendingUp, Target, Calendar } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import React from 'react';

const volumeData = [
  { id: 1, week: 'Week 1', volume: 12500 },
  { id: 2, week: 'Week 2', volume: 14200 },
  { id: 3, week: 'Week 3', volume: 13800 },
  { id: 4, week: 'Week 4', volume: 15600 },
];

const muscleGroups = [
  { id: 1, group: 'Lower', sets: 24 },
  { id: 2, group: 'Upper', sets: 18 },
  { id: 3, group: 'Core', sets: 12 },
];

export function WeightliftingAnalytics() {
  return (
    <div>
      <h2 className="text-[#371A0A] mb-6">Weightlifting Analytics</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-[#371A0A]/5">
          <div className="mb-4">
            <h3 className="text-[#371A0A] mb-1">Weekly Volume Progression</h3>
            <p className="text-sm text-[#6B5D4F]">Total weight lifted (lbs)</p>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={volumeData}>
              <XAxis dataKey="week" stroke="#6B5D4F" style={{ fontSize: '12px' }} />
              <YAxis
                stroke="#6B5D4F"
                style={{ fontSize: '12px' }}
                tickFormatter={(value) => `${(value / 1000).toFixed(1)}k`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid rgba(55, 26, 10, 0.1)',
                  borderRadius: '12px',
                  padding: '8px 12px'
                }}
                formatter={(value: number) => [`${value.toLocaleString()} lbs`, 'Volume']}
              />
              <Bar key="volume-bar" dataKey="volume" fill="#9CAE5A" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#371A0A]/5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-[#9CAE5A]/20 flex items-center justify-center">
                <Dumbbell className="w-5 h-5 text-[#9CAE5A]" />
              </div>
              <span className="text-sm text-[#6B5D4F]">Total Volume</span>
            </div>
            <div className="text-3xl text-[#371A0A]">15.6k</div>
            <div className="text-xs text-[#9CAE5A] mt-1">+12% vs last week</div>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#371A0A]/5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-[#BA5C12]/20 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-[#BA5C12]" />
              </div>
              <span className="text-sm text-[#6B5D4F]">Workouts</span>
            </div>
            <div className="text-3xl text-[#371A0A]">4</div>
            <div className="text-xs text-[#6B5D4F] mt-1">this week</div>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#371A0A]/5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-[#9CAE5A]/20 flex items-center justify-center">
                <Target className="w-5 h-5 text-[#9CAE5A]" />
              </div>
              <span className="text-sm text-[#6B5D4F]">Frequency</span>
            </div>
            <div className="text-3xl text-[#371A0A]">5.2</div>
            <div className="text-xs text-[#6B5D4F] mt-1">days/week avg</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#371A0A]/5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-[#BA5C12]/20 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-[#BA5C12]" />
            </div>
            <div>
              <h3 className="text-[#371A0A]">Muscle Group Focus</h3>
              <p className="text-sm text-[#6B5D4F]">Sets per muscle group this week</p>
            </div>
          </div>
          <div className="space-y-3">
            {muscleGroups.map((group) => (
              <div key={group.id} className="flex items-center gap-3">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-[#371A0A]">{group.group}</span>
                    <span className="text-sm text-[#6B5D4F]">{group.sets} sets</span>
                  </div>
                  <div className="h-2 bg-[#F5EFD8] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#9CAE5A] rounded-full"
                      style={{ width: `${(group.sets / 24) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#9CAE5A]/10 to-[#BA5C12]/10 rounded-2xl p-6 border border-[#9CAE5A]/20">
          <h3 className="text-[#371A0A] mb-3">AI Strength Insights</h3>
          <div className="space-y-3">
            <p className="text-[#371A0A] leading-relaxed text-sm">
              Your lower body volume has increased 18% over the last 2 weeks. This aligns well with your current follicular phase.
            </p>
            <p className="text-[#371A0A] leading-relaxed text-sm">
              Recovery metrics suggest prioritizing lighter upper-body training today. Consider bodyweight or mobility work.
            </p>
            <p className="text-[#371A0A] leading-relaxed text-sm">
              Your squat progression is tracking 8% ahead of expected gains. Great consistency!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
