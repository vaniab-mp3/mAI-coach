import { Footprints, Flame, Clock, Heart, Moon, Activity, TrendingUp } from 'lucide-react';
import React from 'react';

const stats = [
  { icon: Footprints, label: 'Steps', value: '68,432', unit: 'this week', color: '#9CAE5A' },
  { icon: Flame, label: 'Calories', value: '2,247', unit: 'avg/day', color: '#BA5C12' },
  { icon: Clock, label: 'Active Minutes', value: '312', unit: 'this week', color: '#9CAE5A' },
  { icon: Heart, label: 'Avg Heart Rate', value: '62', unit: 'bpm', color: '#BA5C12' },
  { icon: Moon, label: 'Sleep Average', value: '7.8h', unit: 'per night', color: '#9CAE5A' },
  { icon: Activity, label: 'HRV', value: '58ms', unit: '+12% vs last week', color: '#9CAE5A' },
  { icon: TrendingUp, label: 'Running', value: '18.3', unit: 'miles', color: '#BA5C12' },
];

export function WeeklySnapshot() {
  return (
    <div>
      <h2 className="text-[#371A0A] mb-6">Weekly Health Snapshot</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-[#371A0A]/5 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${stat.color}20` }}
              >
                <stat.icon className="w-5 h-5" style={{ color: stat.color }} />
              </div>
              <span className="text-sm text-[#6B5D4F]">{stat.label}</span>
            </div>
            <div className="text-3xl text-[#371A0A] mb-1">{stat.value}</div>
            <div className="text-xs text-[#6B5D4F]">{stat.unit}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
