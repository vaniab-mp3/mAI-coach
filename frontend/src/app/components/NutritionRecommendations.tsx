import { Apple, Coffee, Leaf, Sparkles } from 'lucide-react';
import React from 'react';

const recommendations = [
  {
    icon: Apple,
    color: '#BA5C12',
    title: 'Post-Workout Recovery',
    description: 'High protein intake recommended within 2 hours',
    suggestion: 'Greek yogurt with berries, or a protein smoothie',
  },
  {
    icon: Leaf,
    color: '#9CAE5A',
    title: 'Cycle Phase Nutrition',
    description: 'Increase iron-rich foods during follicular phase',
    suggestion: 'Spinach, lentils, lean red meat',
  },
  {
    icon: Coffee,
    color: '#BA5C12',
    title: 'Energy Optimization',
    description: 'Based on your sleep quality, limit caffeine after 2pm',
    suggestion: 'Switch to herbal tea in the afternoon',
  },
  {
    icon: Sparkles,
    color: '#9CAE5A',
    title: 'Hydration Goal',
    description: 'Target 2.8L today based on training load',
    suggestion: 'Add electrolytes to your water',
  },
];

export function NutritionRecommendations() {
  return (
    <div>
      <h2 className="text-[#371A0A] mb-6">Personalized Nutrition</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {recommendations.map((rec, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-5 shadow-sm border border-[#371A0A]/5 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${rec.color}20` }}
              >
                <rec.icon className="w-6 h-6" style={{ color: rec.color }} />
              </div>
              <div className="flex-1">
                <h3 className="text-[#371A0A] mb-1">{rec.title}</h3>
                <p className="text-sm text-[#6B5D4F] mb-2">{rec.description}</p>
                <div
                  className="text-sm px-3 py-2 rounded-lg"
                  style={{
                    backgroundColor: `${rec.color}10`,
                    color: '#371A0A'
                  }}
                >
                  {rec.suggestion}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
