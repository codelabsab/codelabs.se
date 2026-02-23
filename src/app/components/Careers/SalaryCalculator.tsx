"use client";

import React, { useState } from "react";

export default function SalaryCalculator() {
    const [hourlyRate, setHourlyRate] = useState<number>(1000);
    const [utilization, setUtilization] = useState<number>(90);

    // Constants
    const hoursPerMonth = 160;

    // Calculations
    const totalInvoiced = Math.round(hourlyRate * (hoursPerMonth * (utilization / 100)));
    const consultantPool = Math.round(totalInvoiced * 0.8);
    const companyShare = Math.round(totalInvoiced * 0.2);
    const grossSalary = Math.round(consultantPool / 1.3592);

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat("sv-SE", {
            style: "currency",
            currency: "SEK",
            maximumFractionDigits: 0,
        }).format(value);
    };

    return (
        <section id="salary-calculator" className="py-24 bg-gray-50 text-gray-900 border-t border-gray-100">
            <div className="max-w-5xl mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold tracking-tight mb-4">
                        Calculate your salary
                    </h2>
                    <p className="text-lg text-gray-600">
                        With us, you keep 80% of what you bring in. Use the calculator below to see how much you could earn each month.
                    </p>
                </div>

                <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-8 md:p-12 mb-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-16">
                        {/* Input Sliders */}
                        <div className="space-y-10">
                            {/* Hourly Rate Slider */}
                            <div>
                                <div className="flex justify-between items-center mb-4">
                                    <label htmlFor="hourly-rate" className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                                        Hourly Rate
                                    </label>
                                    <span className="text-2xl font-bold text-blue-600">
                                        {hourlyRate} SEK/h
                                    </span>
                                </div>
                                <input
                                    id="hourly-rate"
                                    type="range"
                                    min="800"
                                    max="1200"
                                    step="50"
                                    value={hourlyRate}
                                    onChange={(e) => setHourlyRate(Number(e.target.value))}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                                />
                                <div className="flex justify-between text-xs text-gray-400 mt-2">
                                    <span>800 SEK</span>
                                    <span>1200 SEK</span>
                                </div>
                            </div>

                            {/* Utilization Rate Slider */}
                            <div>
                                <div className="flex justify-between items-center mb-4">
                                    <label htmlFor="utilization" className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                                        Utilization Rate
                                    </label>
                                    <span className="text-2xl font-bold text-blue-600">
                                        {utilization}%
                                    </span>
                                </div>
                                <input
                                    id="utilization"
                                    type="range"
                                    min="0"
                                    max="100"
                                    step="5"
                                    value={utilization}
                                    onChange={(e) => setUtilization(Number(e.target.value))}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                                />
                                <div className="flex justify-between text-xs text-gray-400 mt-2">
                                    <span>0%</span>
                                    <span>100%</span>
                                </div>
                            </div>
                        </div>

                        {/* Main Result */}
                        <div className="flex flex-col justify-center bg-blue-50/50 rounded-2xl p-8 border border-blue-100">
                            <span className="text-sm font-medium text-blue-600 uppercase tracking-wider mb-2">
                                Your Gross Salary
                            </span>
                            <div className="text-5xl md:text-6xl font-extrabold text-blue-900 mb-2">
                                {formatCurrency(grossSalary)}
                            </div>
                            <p className="text-sm text-blue-700/80">
                                Salary before tax per month
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-gray-100">
                        {/* Consultant Pool */}
                        <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                            <span className="text-sm font-medium text-gray-500 uppercase tracking-wider block mb-2">
                                Your Total Pool (80%)
                            </span>
                            <div className="text-3xl font-bold text-gray-900">
                                {formatCurrency(consultantPool)}
                            </div>
                        </div>

                        {/* Total Invoiced */}
                        <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                            <span className="text-sm font-medium text-gray-500 uppercase tracking-wider block mb-2">
                                Invoiced to Client
                            </span>
                            <div className="text-3xl font-bold text-gray-900">
                                {formatCurrency(totalInvoiced)}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center max-w-3xl mx-auto space-y-2">
                    <p className="text-sm text-gray-500">
                        * Employer contributions (31.42%) and occupational pension (4.5%) are already paid from your pool in the gross salary (divided by 1.3592).
                    </p>
                    <p className="text-sm text-gray-500 font-medium">
                        You will also receive a starting salary during bench time by agreement, so you can feel secure.
                    </p>
                </div>
            </div>
        </section>
    );
}
