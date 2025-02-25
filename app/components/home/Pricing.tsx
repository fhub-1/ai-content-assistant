import Link from 'next/link';
import { Check } from 'lucide-react';

type PlanFeature = {
  text: string;
  included: boolean;
};

type PricingPlan = {
  name: string;
  price: string;
  description: string;
  features: PlanFeature[];
  buttonText: string;
  popular?: boolean;
};

function PricingCard({ plan }: { plan: PricingPlan }) {
  return (
    <div className={`relative p-8 bg-zinc-900 rounded-2xl border ${
      plan.popular ? 'border-indigo-500' : 'border-zinc-800'
    }`}>
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className="px-4 py-1 bg-indigo-500 rounded-full text-sm font-medium text-white">
            Most Popular
          </div>
        </div>
      )}
      
      <div className="text-center mb-8">
        <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
        <div className="mb-3">
          <span className="text-4xl font-bold text-white">{plan.price}</span>
          {plan.price !== 'Free' && <span className="text-zinc-400">/month</span>}
        </div>
        <p className="text-zinc-400">{plan.description}</p>
      </div>

      <ul className="space-y-4 mb-8">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-3">
            <Check className={`w-5 h-5 ${feature.included ? 'text-indigo-400' : 'text-zinc-600'}`} />
            <span className={feature.included ? 'text-zinc-300' : 'text-zinc-500'}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      <Link
        href="/dashboard"
        className={`block w-full py-3 px-6 text-center rounded-lg font-medium transition-all ${
          plan.popular
            ? 'bg-indigo-600 text-white hover:bg-indigo-500'
            : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
        }`}
      >
        {plan.buttonText}
      </Link>
    </div>
  );
}

export default function Pricing() {
  const plans: PricingPlan[] = [
    {
      name: 'Free',
      price: 'Free',
      description: 'Perfect for trying out our AI content tools',
      buttonText: 'Get Started',
      features: [
        { text: '10 AI generations per month', included: true },
        { text: 'Basic video script templates', included: true },
        { text: 'Simple podcast outlines', included: true },
        { text: 'Community support', included: true },
        { text: 'Advanced templates', included: false },
        { text: 'Priority support', included: false },
      ],
    },
    {
      name: 'Pro',
      price: '$29',
      description: 'For serious content creators',
      buttonText: 'Start Pro Trial',
      popular: true,
      features: [
        { text: 'Unlimited AI generations', included: true },
        { text: 'All video script templates', included: true },
        { text: 'Advanced podcast features', included: true },
        { text: 'Priority support', included: true },
        { text: 'Custom templates', included: true },
        { text: 'Analytics dashboard', included: true },
      ],
    },
    {
      name: 'Team',
      price: '$99',
      description: 'For content teams and agencies',
      buttonText: 'Contact Sales',
      features: [
        { text: 'Everything in Pro', included: true },
        { text: 'Team collaboration', included: true },
        { text: 'Advanced analytics', included: true },
        { text: 'Custom AI training', included: true },
        { text: 'Dedicated support', included: true },
        { text: 'API access', included: true },
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-zinc-950 to-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Choose the perfect plan for your content creation needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
