// LandingPage.js
import React from "react";
import { Target, CheckCircle, Flame } from "lucide-react";

function LandingPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">
          Your Friendly Neighborhood Hero
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Whether you need a hand with a task or want to offer your skills, HERO
          is here to bring people together and foster meaningful relationships.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <Target className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Accept Tasks</h3>
            <p className="text-gray-600">
              Choose from available tasks that match your skills.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Foster Peace</h3>
            <p className="text-gray-600">
              By promoting collaboration and kindness, HERO helps create a
              peaceful, thriving environment for everyone.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <Flame className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Gain Aura</h3>
            <p className="text-gray-600">
              Complete tasks & earn Aura Points that build your reputation and
              credibility.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default LandingPage;
