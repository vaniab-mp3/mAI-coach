import { Brain, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';
import React from 'react';

const insights = [
  {
    type: 'trend',
    icon: TrendingUp,
    color: '#9CAE5A',
    title: 'Sleep-Performance Correlation Detected',
    description: 'Your running pace improves by an average of 18 seconds per mile when you get 8+ hours of sleep. Consider prioritizing rest this week.',
    confidence: 'High confidence',
  },
  {
    type: 'recommendation',
    icon: Brain,
    color: '#BA5C12',
    title: 'Optimal Training Window',
    description: 'Based on your cycle phase and recovery metrics, the next 5 days are ideal for strength training and progressive overload.',
    confidence: 'AI-powered',
  },
  {
    type: 'warning',
    icon: AlertCircle,
    color: '#BA5C12',
    title: 'HRV Trending Lower',
    description: 'Your HRV has decreased 8% over the past 3 days. This may indicate accumulated stress. Consider a rest day or active recovery.',
    confidence: 'Action needed',
  },
  {
    type: 'positive',
    icon: CheckCircle,
    color: '#9CAE5A',
    title: 'Consistency Milestone',
    description: 'You\'ve maintained your workout routine for 28 consecutive days. Your cardiovascular endurance has improved by 12%.',
    confidence: 'Milestone',
  },
];

export function AIInsightsFeed() {
  return (
    <div>
      <h2 className="text-[#371A0A] mb-6">AI-Powered Insights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {insights.map((insight, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-sm border border-[#371A0A]/5 hover:shadow-md transition-all hover:translate-y-[-2px]"
          >
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${insight.color}20` }}
              >
                <insight.icon className="w-6 h-6" style={{ color: insight.color }} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-[#371A0A]">{insight.title}</h3>
                </div>
                <p className="text-[#6B5D4F] leading-relaxed mb-3">
                  {insight.description}
                </p>
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs"
                  style={{
                    backgroundColor: `${insight.color}15`,
                    color: insight.color
                  }}
                >
                  {insight.confidence}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
