import { User, ChevronDown, ChevronUp, Dumbbell, Apple, Calendar } from 'lucide-react';
import { useState } from 'react';
import React from 'react';

interface LogEntry {
  date: string;
  meals: Array<{
    type: string;
    foods: string;
    protein?: string;
    hydration?: string;
  }>;
  workouts: Array<{
    exercise: string;
    sets: string;
    reps: string;
    weight: string;
    notes?: string;
  }>;
}

const mockLogHistory: LogEntry[] = [
  {
    date: 'May 7, 2026',
    meals: [
      { type: 'Breakfast', foods: 'Greek yogurt, berries, granola', protein: '28g', hydration: '16 oz' },
      { type: 'Lunch', foods: 'Grilled chicken salad, quinoa, avocado', protein: '42g', hydration: '20 oz' },
      { type: 'Dinner', foods: 'Salmon, roasted vegetables, sweet potato', protein: '38g', hydration: '16 oz' },
    ],
    workouts: [
      { exercise: 'Back Squat', sets: '4', reps: '8', weight: '135', notes: 'Felt strong' },
      { exercise: 'Romanian Deadlift', sets: '3', reps: '10', weight: '95' },
      { exercise: 'Leg Press', sets: '3', reps: '12', weight: '180' },
    ],
  },
  {
    date: 'May 6, 2026',
    meals: [
      { type: 'Breakfast', foods: 'Oatmeal with almond butter, banana', protein: '18g', hydration: '12 oz' },
      { type: 'Lunch', foods: 'Turkey wrap, hummus, vegetables', protein: '32g', hydration: '20 oz' },
    ],
    workouts: [
      { exercise: 'Bench Press', sets: '4', reps: '8', weight: '85' },
      { exercise: 'Overhead Press', sets: '3', reps: '10', weight: '55' },
      { exercise: 'Lat Pulldown', sets: '3', reps: '12', weight: '70' },
    ],
  },
  {
    date: 'May 5, 2026',
    meals: [
      { type: 'Breakfast', foods: 'Scrambled eggs, spinach, whole wheat toast', protein: '24g', hydration: '16 oz' },
      { type: 'Snack', foods: 'Protein smoothie with berries', protein: '30g', hydration: '12 oz' },
      { type: 'Dinner', foods: 'Stir-fry tofu, brown rice, broccoli', protein: '28g', hydration: '20 oz' },
    ],
    workouts: [],
  },
];

export function ProfilePage() {
  const [expandedDates, setExpandedDates] = useState<Set<string>>(new Set());

  const toggleDate = (date: string) => {
    const newExpanded = new Set(expandedDates);
    if (newExpanded.has(date)) {
      newExpanded.delete(date);
    } else {
      newExpanded.add(date);
    }
    setExpandedDates(newExpanded);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-[#371A0A] mb-2">Profile</h1>
        <p className="text-[#6B5D4F]">Your personal wellness journey</p>
      </div>

      <div className="space-y-8">
        {/* Personal Information Section */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#371A0A]/5">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-[#9CAE5A]/20 flex items-center justify-center">
              <User className="w-6 h-6 text-[#9CAE5A]" />
            </div>
            <div>
              <h2 className="text-[#371A0A]">Personal Information</h2>
              <p className="text-sm text-[#6B5D4F]">Update your profile details</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-[#371A0A] mb-2">Name</label>
              <input
                type="text"
                placeholder="Your name"
                defaultValue="Sarah Johnson"
                className="w-full px-4 py-3 rounded-xl bg-[#F5EFD8] border border-[#371A0A]/10 text-[#371A0A] placeholder-[#6B5D4F] outline-none focus:ring-2 focus:ring-[#9CAE5A]"
              />
            </div>

            <div>
              <label className="block text-sm text-[#371A0A] mb-2">Age</label>
              <input
                type="number"
                placeholder="Age"
                defaultValue="28"
                className="w-full px-4 py-3 rounded-xl bg-[#F5EFD8] border border-[#371A0A]/10 text-[#371A0A] placeholder-[#6B5D4F] outline-none focus:ring-2 focus:ring-[#9CAE5A]"
              />
            </div>

            <div>
              <label className="block text-sm text-[#371A0A] mb-2">Height</label>
              <input
                type="text"
                placeholder="e.g., 5'6''"
                defaultValue="5'6&quot;"
                className="w-full px-4 py-3 rounded-xl bg-[#F5EFD8] border border-[#371A0A]/10 text-[#371A0A] placeholder-[#6B5D4F] outline-none focus:ring-2 focus:ring-[#9CAE5A]"
              />
            </div>

            <div>
              <label className="block text-sm text-[#371A0A] mb-2">Weight</label>
              <input
                type="text"
                placeholder="e.g., 145 lbs"
                defaultValue="145 lbs"
                className="w-full px-4 py-3 rounded-xl bg-[#F5EFD8] border border-[#371A0A]/10 text-[#371A0A] placeholder-[#6B5D4F] outline-none focus:ring-2 focus:ring-[#9CAE5A]"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm text-[#371A0A] mb-2">Fitness Goal</label>
            <div className="bg-gradient-to-br from-[#9CAE5A]/5 to-[#BA5C12]/5 rounded-2xl p-1 border border-[#9CAE5A]/20">
              <textarea
                placeholder="Describe your fitness goals and what you'd like to achieve..."
                rows={4}
                defaultValue="I want to improve endurance, build strength, reduce stress, and maintain consistent recovery while balancing my cycle health. My focus is on sustainable progress and holistic wellness."
                className="w-full px-4 py-3 rounded-xl bg-white border-0 text-[#371A0A] placeholder-[#6B5D4F] outline-none focus:ring-2 focus:ring-[#9CAE5A] resize-none"
              />
            </div>
            <p className="text-xs text-[#6B5D4F] mt-2 italic">
              This goal influences your AI-powered recommendations and insights
            </p>
          </div>

          <button className="mt-6 px-6 py-3 rounded-xl bg-[#9CAE5A] text-white hover:bg-[#8A9E4A] transition-colors">
            Save Changes
          </button>
        </div>

        {/* Logged Data History Section */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#371A0A]/5">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-[#BA5C12]/20 flex items-center justify-center">
              <Calendar className="w-6 h-6 text-[#BA5C12]" />
            </div>
            <div>
              <h2 className="text-[#371A0A]">Logged Data History</h2>
              <p className="text-sm text-[#6B5D4F]">Review your nutrition and training logs</p>
            </div>
          </div>

          <div className="space-y-3">
            {mockLogHistory.map((entry, index) => (
              <div key={index} className="border border-[#371A0A]/10 rounded-2xl overflow-hidden">
                <button
                  onClick={() => toggleDate(entry.date)}
                  className="w-full px-6 py-4 bg-[#F5EFD8] hover:bg-[#F5EFD8]/80 transition-colors flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[#371A0A]">{entry.date}</span>
                    <div className="flex gap-2">
                      {entry.meals.length > 0 && (
                        <span className="px-2 py-1 rounded-lg bg-white text-xs text-[#6B5D4F]">
                          {entry.meals.length} meals
                        </span>
                      )}
                      {entry.workouts.length > 0 && (
                        <span className="px-2 py-1 rounded-lg bg-white text-xs text-[#6B5D4F]">
                          {entry.workouts.length} exercises
                        </span>
                      )}
                    </div>
                  </div>
                  {expandedDates.has(entry.date) ? (
                    <ChevronUp className="w-5 h-5 text-[#6B5D4F]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#6B5D4F]" />
                  )}
                </button>

                {expandedDates.has(entry.date) && (
                  <div className="p-6 space-y-6">
                    {/* Meals Section */}
                    {entry.meals.length > 0 && (
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <Apple className="w-5 h-5 text-[#BA5C12]" />
                          <h3 className="text-[#371A0A]">Nutrition</h3>
                        </div>
                        <div className="space-y-3">
                          {entry.meals.map((meal, mealIndex) => (
                            <div
                              key={mealIndex}
                              className="bg-white rounded-xl p-4 border border-[#371A0A]/5"
                            >
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-sm text-[#BA5C12]">{meal.type}</span>
                                {meal.protein && (
                                  <span className="text-xs text-[#6B5D4F]">
                                    Protein: {meal.protein}
                                  </span>
                                )}
                              </div>
                              <p className="text-[#371A0A] mb-1">{meal.foods}</p>
                              {meal.hydration && (
                                <p className="text-xs text-[#6B5D4F]">
                                  Hydration: {meal.hydration}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Workouts Section */}
                    {entry.workouts.length > 0 && (
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <Dumbbell className="w-5 h-5 text-[#9CAE5A]" />
                          <h3 className="text-[#371A0A]">Strength Training</h3>
                        </div>
                        <div className="space-y-3">
                          {entry.workouts.map((workout, workoutIndex) => (
                            <div
                              key={workoutIndex}
                              className="bg-white rounded-xl p-4 border border-[#371A0A]/5"
                            >
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-[#371A0A]">{workout.exercise}</span>
                                <span className="text-xs text-[#6B5D4F]">
                                  {workout.sets} × {workout.reps} @ {workout.weight} lbs
                                </span>
                              </div>
                              {workout.notes && (
                                <p className="text-xs text-[#6B5D4F] italic">{workout.notes}</p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
