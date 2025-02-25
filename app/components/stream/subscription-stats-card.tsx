'use client';

import { useState, useEffect } from 'react';
// import { Button } from '@/components/ui/button';
import { Heart, Users, TrendingUp, Star, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';

interface SubscriptionStatsCardProps {
  subscribedPercentage?: number;
  nonSubscribedPercentage?: number;
  isVisible?: boolean;
  onClose?: () => void;
}

export default function SubscriptionStatsCard({
  subscribedPercentage = 2.2,
  nonSubscribedPercentage = 97.8,
  isVisible = true,
  onClose
}: SubscriptionStatsCardProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setShow(true), 100);
      return () => clearTimeout(timer);
    }
    setShow(false);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className={cn(
      "fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-50 transition-opacity duration-300",
      show ? "opacity-100" : "opacity-0"
    )}>
      <div className={cn(
        "bg-gradient-to-br from-[#1C1C27] to-[#252533] border border-[#2D2D3D] rounded-2xl p-8 max-w-2xl w-full mx-4 relative overflow-hidden transition-all duration-500 transform",
        show ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      )}>
        {/* Decorative Elements */}
        <div className="absolute top-4 right-4 animate-bounce">
          <Sparkles className="h-6 w-6 text-[#6366F1] opacity-60" />
        </div>
        <div className="absolute bottom-4 left-4 animate-bounce delay-150">
          <Sparkles className="h-6 w-6 text-[#818CF8] opacity-60" />
        </div>

        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#6366F1] to-[#818CF8] mb-2">
            Stream Statistics
          </h2>
          <p className="text-[#A1A1AA] text-lg">
            Support the stream by becoming a subscriber!
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Non-Subscribers */}
          <div className="group bg-[#1C1C27]/50 border border-[#2D2D3D] rounded-xl p-6 transition-all duration-300 hover:border-red-500/50 hover:scale-[1.02] active:scale-[0.98]">
            <div className="flex items-center justify-between mb-4">
              <div className="animate-spin-slow">
                <Users className="h-6 w-6 text-[#A1A1AA]" />
              </div>
              <span className="text-sm text-[#A1A1AA]">Non-Subscribers</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-[#F8F8F8]">{nonSubscribedPercentage}%</span>
                <TrendingUp className="h-5 w-5 text-red-500 animate-pulse" />
              </div>
              <div className="w-full bg-[#252533] rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-red-500 to-red-600 h-2 rounded-full transition-all duration-1000 ease-in-out"
                  style={{ width: `${nonSubscribedPercentage}%` }}
                />
              </div>
            </div>
          </div>

          {/* Subscribers */}
          <div className="group bg-[#1C1C27]/50 border border-[#2D2D3D] rounded-xl p-6 transition-all duration-300 hover:border-[#6366F1]/50 hover:scale-[1.02] active:scale-[0.98]">
            <div className="flex items-center justify-between mb-4">
              <div className="animate-spin-slow">
                <Star className="h-6 w-6 text-[#6366F1]" />
              </div>
              <span className="text-sm text-[#A1A1AA]">Subscribers</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-[#F8F8F8]">{subscribedPercentage}%</span>
                <Heart className="h-5 w-5 text-[#6366F1] animate-pulse" />
              </div>
              <div className="w-full bg-[#252533] rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-[#6366F1] to-[#818CF8] h-2 rounded-full transition-all duration-1000 ease-in-out"
                  style={{ width: `${subscribedPercentage}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center space-y-6">
          <div className="group bg-[#1C1C27]/50 border border-[#2D2D3D] rounded-xl p-6 transition-all duration-300 hover:scale-[1.02]">
            <p className="text-lg text-[#F8F8F8] mb-2">
              Did you know? <span className="text-[#6366F1] animate-pulse">{nonSubscribedPercentage}%</span> of viewers haven't subscribed yet!
            </p>
            <p className="text-[#A1A1AA]">
              Support the stream and get access to exclusive emotes, badges, and ad-free viewing.
            </p>
          </div>

          <div className="flex items-center justify-center space-x-4">
            <div className="transition-transform duration-200 hover:scale-105 active:scale-95">
              <Button
                size="lg"
                className="bg-[#6366F1] hover:bg-[#4F46E5] text-white px-8 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                Subscribe Now
              </Button>
            </div>
            {onClose && (
              <div className="transition-transform duration-200 hover:scale-105 active:scale-95">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#2D2D3D] hover:bg-[#252533] text-[#A1A1AA]"
                  onClick={onClose}
                >
                  Maybe Later
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
