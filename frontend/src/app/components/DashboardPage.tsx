import { DailyReadiness } from './DailyReadiness';
import { WeeklySnapshot } from './WeeklySnapshot';
import { AIInsightsFeed } from './AIInsightsFeed';
import { RecoverySleep } from './RecoverySleep';
import { CycleInsights } from './CycleInsights';
import { RunningAnalytics } from './RunningAnalytics';
import { WeightliftingAnalytics } from './WeightliftingAnalytics';
import { NutritionRecommendations } from './NutritionRecommendations';
import React from 'react';

export function DashboardPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-8">
      <div className="space-y-8">
        <DailyReadiness />

        <WeeklySnapshot />

        <AIInsightsFeed />

        <RecoverySleep />

        <CycleInsights />

        <div className="grid grid-cols-1 gap-8">
          <RunningAnalytics />
          <WeightliftingAnalytics />
        </div>

        <NutritionRecommendations />
      </div>
    </main>
  );
}
