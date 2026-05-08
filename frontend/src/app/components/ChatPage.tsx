import { Send, Sparkles } from 'lucide-react';
import { useState } from 'react';
import React from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const suggestedPrompts = [
  "Why is my HRV low?",
  "How should I train today?",
  "How does my cycle affect performance?",
  "Summarize my week",
  "Why was my run slower yesterday?",
  "Should I take a rest day?",
];

const initialMessages: Message[] = [
  {
    role: 'assistant',
    content: "Hi! I'm mAI, your AI health coach. I can help you understand your health patterns, answer questions about your training, cycle, recovery, and provide personalized recommendations. What would you like to know?",
  },
];

export function ChatPage() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const newUserMessage: Message = {
      role: 'user',
      content: inputValue,
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setInputValue('');

    setTimeout(() => {
      const assistantResponse: Message = {
        role: 'assistant',
        content: "I'm analyzing your health data to provide a personalized response. This is a demo interface - in production, I would connect to your complete health history and provide detailed insights based on your specific patterns and goals.",
      };
      setMessages((prev) => [...prev, assistantResponse]);
    }, 800);
  };

  const handlePromptClick = (prompt: string) => {
    setInputValue(prompt);
  };

  return (
    <div className="h-[calc(100vh-88px)] flex flex-col max-w-4xl mx-auto px-6">
      <div className="py-6 border-b border-[#371A0A]/10">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#9CAE5A] to-[#BA5C12] flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-[#371A0A]">mAI Coach</h1>
            <p className="text-sm text-[#6B5D4F]">Ask me anything about your health and wellness</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto py-6 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-5 py-4 ${
                message.role === 'user'
                  ? 'bg-[#9CAE5A] text-white'
                  : 'bg-white text-[#371A0A] shadow-sm border border-[#371A0A]/5'
              }`}
            >
              {message.role === 'assistant' && (
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-[#9CAE5A]" />
                  <span className="text-xs text-[#6B5D4F]">mAI</span>
                </div>
              )}
              <p className="leading-relaxed">{message.content}</p>
            </div>
          </div>
        ))}
      </div>

      {messages.length === 1 && (
        <div className="pb-4">
          <p className="text-sm text-[#6B5D4F] mb-3">Suggested questions:</p>
          <div className="grid grid-cols-2 gap-2">
            {suggestedPrompts.map((prompt, index) => (
              <button
                key={index}
                onClick={() => handlePromptClick(prompt)}
                className="text-left text-sm px-4 py-3 rounded-xl bg-white border border-[#371A0A]/5 text-[#371A0A] hover:bg-[#9CAE5A]/10 hover:border-[#9CAE5A]/20 transition-all"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="py-4 border-t border-[#371A0A]/10">
        <div className="relative">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about your health patterns, training, recovery..."
            className="w-full px-5 py-4 pr-14 rounded-2xl bg-white border border-[#371A0A]/10 text-[#371A0A] placeholder-[#6B5D4F] outline-none focus:ring-2 focus:ring-[#9CAE5A] transition-all"
          />
          <button
            onClick={handleSend}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-[#9CAE5A] flex items-center justify-center text-white hover:bg-[#8A9E4A] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!inputValue.trim()}
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
