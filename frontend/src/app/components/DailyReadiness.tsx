import { Heart, Moon, Sparkles } from 'lucide-react';
import React from 'react';

export function DailyReadiness() {
  return (
    <div className="bg-gradient-to-br from-white to-[#F5EFD8] rounded-3xl p-8 shadow-sm border border-[#371A0A]/5">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-[#371A0A] mb-1">Daily Readiness</h2>
          <p className="text-[#6B5D4F]">Thursday, May 7, 2026</p>
        </div>
        <div className="text-right">
          <div className="text-5xl font-['Momo'] text-[#9CAE5A] mb-1">87</div>
          <p className="text-sm text-[#6B5D4F]">Optimal</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white/60 rounded-2xl p-4 border border-[#371A0A]/5">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-full bg-[#9CAE5A]/20 flex items-center justify-center">
              <Heart className="w-4 h-4 text-[#9CAE5A]" />
            </div>
            <span className="text-sm text-[#6B5D4F]">Recovery</span>
          </div>
          <div className="text-2xl text-[#371A0A]">92%</div>
        </div>

        <div className="bg-white/60 rounded-2xl p-4 border border-[#371A0A]/5">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-full bg-[#BA5C12]/20 flex items-center justify-center">
              <Moon className="w-4 h-4 text-[#BA5C12]" />
            </div>
            <span className="text-sm text-[#6B5D4F]">Sleep Quality</span>
          </div>
          <div className="text-2xl text-[#371A0A]">8.2h</div>
        </div>

        <div className="bg-white/60 rounded-2xl p-4 border border-[#371A0A]/5">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-full bg-[#9CAE5A]/20 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-[#9CAE5A]" />
            </div>
            <span className="text-sm text-[#6B5D4F]">Cycle Phase</span>
          </div>
          <div className="text-lg text-[#371A0A]">Follicular</div>
        </div>
      </div>

      <div className="bg-[#9CAE5A]/10 rounded-2xl p-5 border border-[#9CAE5A]/20">
        <div className="flex gap-3">
          <Sparkles className="w-5 h-5 text-[#9CAE5A] flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="text-[#371A0A] mb-2">AI Wellness Summary</h3>
            <p className="text-[#371A0A] leading-relaxed mb-3">
              Your body is in an excellent recovery state today. Sleep quality was exceptional with 92 minutes of deep sleep. Your current follicular phase supports higher intensity training.
            </p>
            <div className="inline-flex items-center gap-2 bg-[#9CAE5A] text-white px-4 py-2 rounded-full text-sm">
              <span>Recommendation: High-intensity interval training</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
