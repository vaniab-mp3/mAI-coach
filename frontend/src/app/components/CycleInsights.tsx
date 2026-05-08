import { Calendar, TrendingUp } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import React from 'react';

const cyclePhases = [
  { phase: 'Menstrual', day: 1, complete: true },
  { phase: 'Follicular', day: 8, complete: true },
  { phase: 'Ovulatory', day: 14, complete: false },
  { phase: 'Luteal', day: 21, complete: false },
];

const symptomData = [
  { symptom: 'Energy', level: 85 },
  { symptom: 'Mood', level: 78 },
  { symptom: 'Strength', level: 82 },
  { symptom: 'Focus', level: 88 },
];

export function CycleInsights() {
  return (
    <div>
      <h2 className="text-[#371A0A] mb-6">Cycle & Hormonal Insights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#371A0A]/5">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-[#9CAE5A]/20 flex items-center justify-center">
              <Calendar className="w-5 h-5 text-[#9CAE5A]" />
            </div>
            <div>
              <h3 className="text-[#371A0A]">Cycle Tracking</h3>
              <p className="text-sm text-[#6B5D4F]">Day 8 of 28</p>
            </div>
          </div>

          <div className="space-y-3">
            {cyclePhases.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div
                  className={`w-3 h-3 rounded-full ${
                    item.complete ? 'bg-[#9CAE5A]' : 'bg-[#F5EFD8]'
                  }`}
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className={`${item.complete ? 'text-[#371A0A]' : 'text-[#6B5D4F]'}`}>
                      {item.phase}
                    </span>
                    <span className="text-sm text-[#6B5D4F]">Day {item.day}</span>
                  </div>
                  {index === 1 && (
                    <div className="mt-2 text-sm text-[#9CAE5A] bg-[#9CAE5A]/10 px-3 py-1.5 rounded-lg inline-block">
                      Current phase - optimal for high intensity
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#371A0A]/5">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-[#BA5C12]/20 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-[#BA5C12]" />
            </div>
            <div>
              <h3 className="text-[#371A0A]">Current Symptoms</h3>
              <p className="text-sm text-[#6B5D4F]">Follicular phase metrics</p>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={symptomData} layout="vertical">
              <XAxis type="number" domain={[0, 100]} hide />
              <YAxis dataKey="symptom" type="category" width={70} style={{ fontSize: '13px' }} stroke="#6B5D4F" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid rgba(55, 26, 10, 0.1)',
                  borderRadius: '12px',
                  padding: '8px 12px'
                }}
              />
              <Bar key="symptom-bar" dataKey="level" fill="#9CAE5A" radius={[0, 8, 8, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mt-4 bg-gradient-to-r from-[#9CAE5A]/10 to-[#BA5C12]/10 rounded-2xl p-6 border border-[#9CAE5A]/20">
        <h3 className="text-[#371A0A] mb-3">Performance-Cycle Correlation</h3>
        <p className="text-[#6B5D4F] leading-relaxed">
          During your follicular phase, your running pace averages 12 seconds faster per mile, and your strength training volume increases by 15%. Your body is primed for progressive overload and PR attempts.
        </p>
      </div>
    </div>
  );
}
