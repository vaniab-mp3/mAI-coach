import { Plus, Dumbbell, Heart, Apple, Save } from 'lucide-react';
import { useState } from 'react';
import React from 'react';

interface Exercise {
  id: number;
  name: string;
  sets: string;
  reps: string;
  weight: string;
  notes: string;
}

export function LogPage() {
  const [exercises, setExercises] = useState<Exercise[]>([
    { id: 1, name: '', sets: '', reps: '', weight: '', notes: '' },
  ]);

  const addExercise = () => {
    setExercises([
      ...exercises,
      { id: Date.now(), name: '', sets: '', reps: '', weight: '', notes: '' },
    ]);
  };

  const removeExercise = (id: number) => {
    setExercises(exercises.filter((ex) => ex.id !== id));
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-[#371A0A] mb-2">Daily Log</h1>
        <p className="text-[#6B5D4F]">Track your workouts, cycle, and nutrition</p>
      </div>

      <div className="space-y-6">
        {/* Weight Lifting Log */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#371A0A]/5">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-[#BA5C12]/20 flex items-center justify-center">
              <Dumbbell className="w-6 h-6 text-[#BA5C12]" />
            </div>
            <div>
              <h2 className="text-[#371A0A]">Weight Lifting Log</h2>
              <p className="text-sm text-[#6B5D4F]">Record your strength training session</p>
            </div>
          </div>

          <div className="space-y-4">
            {exercises.map((exercise, index) => (
              <div
                key={exercise.id}
                className="bg-[#F5EFD8] rounded-2xl p-5 border border-[#371A0A]/5"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-[#371A0A]">Exercise {index + 1}</span>
                  {exercises.length > 1 && (
                    <button
                      onClick={() => removeExercise(exercise.id)}
                      className="text-xs text-[#BA5C12] hover:text-[#371A0A] transition-colors"
                    >
                      Remove
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Exercise name"
                    className="col-span-2 px-4 py-3 rounded-xl bg-white border border-[#371A0A]/10 text-[#371A0A] placeholder-[#6B5D4F] outline-none focus:ring-2 focus:ring-[#9CAE5A]"
                  />
                  <input
                    type="text"
                    placeholder="Sets"
                    className="px-4 py-3 rounded-xl bg-white border border-[#371A0A]/10 text-[#371A0A] placeholder-[#6B5D4F] outline-none focus:ring-2 focus:ring-[#9CAE5A]"
                  />
                  <input
                    type="text"
                    placeholder="Reps per set"
                    className="px-4 py-3 rounded-xl bg-white border border-[#371A0A]/10 text-[#371A0A] placeholder-[#6B5D4F] outline-none focus:ring-2 focus:ring-[#9CAE5A]"
                  />
                  <input
                    type="text"
                    placeholder="Weight (lbs)"
                    className="px-4 py-3 rounded-xl bg-white border border-[#371A0A]/10 text-[#371A0A] placeholder-[#6B5D4F] outline-none focus:ring-2 focus:ring-[#9CAE5A]"
                  />
                  <input
                    type="text"
                    placeholder="Notes (optional)"
                    className="px-4 py-3 rounded-xl bg-white border border-[#371A0A]/10 text-[#371A0A] placeholder-[#6B5D4F] outline-none focus:ring-2 focus:ring-[#9CAE5A]"
                  />
                </div>
              </div>
            ))}

            <button
              onClick={addExercise}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#F5EFD8] text-[#371A0A] hover:bg-[#9CAE5A]/20 transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>Add Exercise</span>
            </button>
          </div>

          <button className="mt-6 flex items-center gap-2 px-6 py-3 rounded-xl bg-[#BA5C12] text-white hover:bg-[#A04E10] transition-colors">
            <Save className="w-4 h-4" />
            <span>Save Workout</span>
          </button>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#371A0A]/5">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-[#BA5C12]/20 flex items-center justify-center">
              <Dumbbell className="w-6 h-6 text-[#BA5C12]" />
            </div>
            <div>
              <h2 className="text-[#371A0A]">Run Log</h2>
              <p className="text-sm text-[#6B5D4F]">Record your run</p>
            </div>
          </div>

          <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">

            <input
              type="text"
              placeholder="Distance (miles)"
              className="px-4 py-3 rounded-xl bg-white border border-[#371A0A]/10 text-[#371A0A] placeholder-[#6B5D4F] outline-none focus:ring-2 focus:ring-[#9CAE5A]"
            />

            <input
              type="text"
              placeholder="Pace (min/mile)"
              className="px-4 py-3 rounded-xl bg-white border border-[#371A0A]/10 text-[#371A0A] placeholder-[#6B5D4F] outline-none focus:ring-2 focus:ring-[#9CAE5A]"
            />

            <input
              type="text"
              placeholder="Duration (minutes)"
              className="px-4 py-3 rounded-xl bg-white border border-[#371A0A]/10 text-[#371A0A] placeholder-[#6B5D4F] outline-none focus:ring-2 focus:ring-[#9CAE5A]"
            />

            <input
              type="text"
              placeholder="Elevation Gain (ft)"
              className="px-4 py-3 rounded-xl bg-white border border-[#371A0A]/10 text-[#371A0A] placeholder-[#6B5D4F] outline-none focus:ring-2 focus:ring-[#9CAE5A]"
            />

            <input
              type="text"
              placeholder="Average Heart Rate"
              className="px-4 py-3 rounded-xl bg-white border border-[#371A0A]/10 text-[#371A0A] placeholder-[#6B5D4F] outline-none focus:ring-2 focus:ring-[#9CAE5A]"
            />

            <input
              type="text"
              placeholder="Max Heart Rate"
              className="px-4 py-3 rounded-xl bg-white border border-[#371A0A]/10 text-[#371A0A] placeholder-[#6B5D4F] outline-none focus:ring-2 focus:ring-[#9CAE5A]"
            />

            <textarea
              placeholder="Run notes (optional)"
              className="col-span-2 px-4 py-3 rounded-xl bg-white border border-[#371A0A]/10 text-[#371A0A] placeholder-[#6B5D4F] outline-none focus:ring-2 focus:ring-[#9CAE5A] min-h-[120px]"
            />

          </div>
        </div>

          <button className="mt-6 flex items-center gap-2 px-6 py-3 rounded-xl bg-[#BA5C12] text-white hover:bg-[#A04E10] transition-colors">
            <Save className="w-4 h-4" />
            <span>Save Workout</span>
          </button>
        </div>
        {/* end of run log*/}

        {/* Period & Cycle Log */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#371A0A]/5">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-[#9CAE5A]/20 flex items-center justify-center">
              <Heart className="w-6 h-6 text-[#9CAE5A]" />
            </div>
            <div>
              <h2 className="text-[#371A0A]">Period & Cycle Tracking</h2>
              <p className="text-sm text-[#6B5D4F]">Log your cycle and how you're feeling</p>
            </div>
          </div>

          <div className="space-y-5">
            <div>
              <label className="block text-sm text-[#371A0A] mb-2">Cycle Day</label>
              <input
                type="number"
                placeholder="Day of cycle"
                className="w-full px-4 py-3 rounded-xl bg-[#F5EFD8] border border-[#371A0A]/10 text-[#371A0A] placeholder-[#6B5D4F] outline-none focus:ring-2 focus:ring-[#9CAE5A]"
              />
            </div>

            <div>
              <label className="block text-sm text-[#371A0A] mb-3">Flow Intensity</label>
              <div className="grid grid-cols-4 gap-3">
                {['None', 'Light', 'Medium', 'Heavy'].map((intensity) => (
                  <button
                    key={intensity}
                    className="px-4 py-3 rounded-xl bg-[#F5EFD8] text-[#371A0A] hover:bg-[#9CAE5A] hover:text-white transition-colors"
                  >
                    {intensity}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm text-[#371A0A] mb-3">Symptoms</label>
              <div className="grid grid-cols-3 gap-3">
                {['Cramps', 'Fatigue', 'Bloating', 'Headache', 'Mood changes', 'Cravings'].map(
                  (symptom) => (
                    <button
                      key={symptom}
                      className="px-4 py-3 rounded-xl bg-[#F5EFD8] text-[#371A0A] hover:bg-[#9CAE5A] hover:text-white transition-colors text-sm"
                    >
                      {symptom}
                    </button>
                  )
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-[#371A0A] mb-3">Mood</label>
                <div className="flex gap-2">
                  {['😔', '😐', '🙂', '😊', '🥰'].map((emoji, index) => (
                    <button
                      key={index}
                      className="flex-1 py-3 rounded-xl bg-[#F5EFD8] hover:bg-[#9CAE5A]/20 transition-colors text-2xl"
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm text-[#371A0A] mb-3">Energy Level</label>
                <div className="grid grid-cols-3 gap-2">
                  {['Low', 'Medium', 'High'].map((level) => (
                    <button
                      key={level}
                      className="px-4 py-3 rounded-xl bg-[#F5EFD8] text-[#371A0A] hover:bg-[#9CAE5A] hover:text-white transition-colors text-sm"
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm text-[#371A0A] mb-2">Notes</label>
              <textarea
                placeholder="How are you feeling today? Any patterns you've noticed?"
                rows={3}
                className="w-full px-4 py-3 rounded-xl bg-[#F5EFD8] border border-[#371A0A]/10 text-[#371A0A] placeholder-[#6B5D4F] outline-none focus:ring-2 focus:ring-[#9CAE5A] resize-none"
              />
            </div>
          </div>

          <button className="mt-6 flex items-center gap-2 px-6 py-3 rounded-xl bg-[#9CAE5A] text-white hover:bg-[#8A9E4A] transition-colors">
            <Save className="w-4 h-4" />
            <span>Save Cycle Log</span>
          </button>
        </div>

        {/* Nutrition Log */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#371A0A]/5">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-[#BA5C12]/20 flex items-center justify-center">
              <Apple className="w-6 h-6 text-[#BA5C12]" />
            </div>
            <div>
              <h2 className="text-[#371A0A]">Nutrition & Food Log</h2>
              <p className="text-sm text-[#6B5D4F]">Track what you're eating and drinking</p>
            </div>
          </div>

          <div className="space-y-5">
            <div>
              <label className="block text-sm text-[#371A0A] mb-3">Meal Type</label>
              <div className="grid grid-cols-4 gap-3">
                {['Breakfast', 'Lunch', 'Dinner', 'Snack'].map((meal) => (
                  <button
                    key={meal}
                    className="px-4 py-3 rounded-xl bg-[#F5EFD8] text-[#371A0A] hover:bg-[#BA5C12] hover:text-white transition-colors"
                  >
                    {meal}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm text-[#371A0A] mb-2">What did you eat?</label>
              <textarea
                placeholder="List foods and ingredients..."
                rows={3}
                className="w-full px-4 py-3 rounded-xl bg-[#F5EFD8] border border-[#371A0A]/10 text-[#371A0A] placeholder-[#6B5D4F] outline-none focus:ring-2 focus:ring-[#9CAE5A] resize-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-[#371A0A] mb-2">Protein (optional)</label>
                <input
                  type="text"
                  placeholder="Approx. grams"
                  className="w-full px-4 py-3 rounded-xl bg-[#F5EFD8] border border-[#371A0A]/10 text-[#371A0A] placeholder-[#6B5D4F] outline-none focus:ring-2 focus:ring-[#9CAE5A]"
                />
              </div>

              <div>
                <label className="block text-sm text-[#371A0A] mb-2">Water Intake</label>
                <input
                  type="text"
                  placeholder="Glasses or oz"
                  className="w-full px-4 py-3 rounded-xl bg-[#F5EFD8] border border-[#371A0A]/10 text-[#371A0A] placeholder-[#6B5D4F] outline-none focus:ring-2 focus:ring-[#9CAE5A]"
                />
              </div>
            </div>
          </div>

          <button className="mt-6 flex items-center gap-2 px-6 py-3 rounded-xl bg-[#BA5C12] text-white hover:bg-[#A04E10] transition-colors">
            <Save className="w-4 h-4" />
            <span>Save Food Log</span>
          </button>
        </div>
      </div>
    </div>
  );
}
