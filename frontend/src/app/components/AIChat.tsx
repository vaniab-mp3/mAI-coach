import { MessageCircle, Send } from 'lucide-react';
import { useState } from 'react';
import React from 'react';

const sampleQuestions = [
  "Why was my run slower yesterday?",
  "Should I train today or rest?",
  "How does my cycle affect my training?",
  "What's causing my low HRV?",
];

export function AIChat() {
  const [message, setMessage] = useState('');

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#371A0A]/5">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#9CAE5A] to-[#BA5C12] flex items-center justify-center">
          <MessageCircle className="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 className="text-[#371A0A]">Ask Your AI Health Assistant</h2>
          <p className="text-sm text-[#6B5D4F]">Get personalized insights about your health data</p>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-sm text-[#6B5D4F] mb-3">Try asking:</p>
        <div className="grid grid-cols-2 gap-2">
          {sampleQuestions.map((question, index) => (
            <button
              key={index}
              onClick={() => setMessage(question)}
              className="text-left text-sm px-4 py-2.5 rounded-xl bg-[#F5EFD8] text-[#371A0A] hover:bg-[#9CAE5A]/20 transition-colors"
            >
              {question}
            </button>
          ))}
        </div>
      </div>

      <div className="relative">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask anything about your health patterns..."
          className="w-full px-5 py-4 pr-12 rounded-2xl bg-[#F5EFD8] text-[#371A0A] placeholder-[#6B5D4F] outline-none focus:ring-2 focus:ring-[#9CAE5A] transition-all"
        />
        <button
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-[#9CAE5A] flex items-center justify-center text-white hover:bg-[#8A9E4A] transition-colors"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
