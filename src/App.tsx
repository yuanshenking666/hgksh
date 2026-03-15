/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  BarChart, Bar, Cell
} from 'recharts';
import { 
  ChevronDown,
  Menu,
  X
} from 'lucide-react';
import { CATEGORIES, MOCK_DATA } from './constants';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);
  const [selectedSubCategory, setSelectedSubCategory] = useState(CATEGORIES[0].subCategories[0]);
  const [selectedMetric, setSelectedMetric] = useState(CATEGORIES[0].metrics[0]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleCategoryChange = (category: typeof CATEGORIES[0]) => {
    setSelectedCategory(category);
    setSelectedSubCategory(category.subCategories[0]);
    setSelectedMetric(category.metrics[0]);
  };

  // Get data based on selected metric and sub-category
  const chartData = MOCK_DATA[selectedMetric.id]?.[selectedSubCategory.id] || [];

  return (
    <div className="min-h-screen bg-white text-[#333] font-sans flex flex-col">
      {/* Top Navigation Bar (Blue/Red strip) */}
      <div className="h-2 w-full flex">
        <div className="flex-1 bg-[#3F5EB5]" />
        <div className="flex-1 bg-[#E74C3C]" />
      </div>
      
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar (Main Categories) */}
        <aside className={cn(
          "w-64 border-r border-slate-200 flex flex-col bg-[#F8F9FB] transition-all duration-300",
          !isSidebarOpen && "-ml-64"
        )}>
          <div className="p-6 border-b border-slate-200 bg-white">
            <h2 className="text-xl font-bold text-[#3F5EB5] leading-tight mb-2">
              全人群心理健康<br />科学主题数据库
            </h2>
            <div className="inline-block px-2 py-0.5 bg-[#F1F3F8] rounded text-[10px] font-bold text-[#3F5EB5] uppercase tracking-wider">
              青少年专题 · 2024
            </div>
          </div>
          <nav className="py-4">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat)}
                className={cn(
                  "w-full text-left px-6 py-4 text-sm font-medium transition-all relative",
                  selectedCategory.id === cat.id 
                    ? "bg-[#EBF0FF] text-[#3F5EB5]" 
                    : "text-[#666] hover:bg-slate-100"
                )}
              >
                {cat.label}
                {selectedCategory.id === cat.id && (
                  <div className="absolute right-0 top-0 h-full w-1 bg-[#3F5EB5]" />
                )}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col overflow-y-auto bg-white">
          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="lg:hidden p-4 self-start"
          >
            {isSidebarOpen ? <X /> : <Menu />}
          </button>

          <div className="max-w-6xl mx-auto w-full p-8 lg:p-12">
            {/* Description Section */}
            <section className="mb-10">
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-bold text-[#3F5EB5] mb-3 flex items-center">
                    <div className="w-1 h-5 bg-[#3F5EB5] mr-2" />
                    指标说明
                  </h3>
                  <p className="text-[#555] leading-relaxed text-base">
                    {selectedCategory.description}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#3F5EB5] mb-3 flex items-center">
                    <div className="w-1 h-5 bg-[#3F5EB5] mr-2" />
                    计算方法
                  </h3>
                  <div className="whitespace-pre-line text-[#555] leading-relaxed text-base bg-[#F8F9FB] p-4 rounded-md border-l-4 border-[#3F5EB5]">
                    {selectedCategory.formula}
                  </div>
                </div>
              </div>
            </section>

            {/* Sub-category Tabs */}
            <section className="mb-6">
              <div className="flex flex-wrap bg-[#F1F3F8] rounded-md p-1">
                {selectedCategory.subCategories.map((sub) => (
                  <button
                    key={sub.id}
                    onClick={() => setSelectedSubCategory(sub)}
                    className={cn(
                      "flex-1 min-w-[100px] py-2.5 px-4 text-sm font-medium rounded transition-all",
                      selectedSubCategory.id === sub.id
                        ? "bg-[#3F5EB5] text-white shadow-sm"
                        : "text-[#333] hover:bg-slate-200/50"
                    )}
                  >
                    {sub.label}
                  </button>
                ))}
              </div>
            </section>

            {/* Metric Dropdown */}
            <section className="mb-6">
              <div className="relative inline-block w-64">
                <select
                  value={selectedMetric.id}
                  onChange={(e) => setSelectedMetric(selectedCategory.metrics.find(m => m.id === e.target.value)!)}
                  className="w-full appearance-none bg-white border border-slate-200 rounded-md px-4 py-2 text-sm font-medium text-[#E67E22] focus:outline-none focus:ring-1 focus:ring-blue-500/20 transition-all cursor-pointer"
                >
                  {selectedCategory.metrics.map((metric) => (
                    <option key={metric.id} value={metric.id}>
                      {metric.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
            </section>

            {/* Visualization Area */}
            <section className="bg-[#F9FAFB] rounded-xl p-10 min-h-[600px] border border-slate-100 shadow-inner">
              <div className="mb-8 flex items-center justify-between">
                <h4 className="text-xl font-bold text-[#333]">
                  {selectedCategory.label} - {selectedSubCategory.label} ({selectedMetric.label})
                </h4>
                <div className="flex items-center space-x-2 text-sm text-slate-500">
                  <div className="w-3 h-3 bg-[#3F5EB5] rounded-full" />
                  <span>数值 (%)</span>
                </div>
              </div>
              <div className="h-[450px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  {selectedSubCategory.id === 'yearly' ? (
                    <LineChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748B', fontSize: 12}} dy={10} />
                      <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748B', fontSize: 12}} unit="%" />
                      <Tooltip 
                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                      />
                      <Line type="monotone" dataKey="value" stroke="#3F5EB5" strokeWidth={4} dot={{ r: 6, fill: '#3F5EB5', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 8 }} />
                    </LineChart>
                  ) : (
                    <BarChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748B', fontSize: 12}} dy={10} />
                      <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748B', fontSize: 12}} unit="%" />
                      <Tooltip 
                        cursor={{fill: '#F1F5F9'}}
                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                      />
                      <Bar dataKey="value" fill="#3F5EB5" radius={[4, 4, 0, 0]} barSize={40}>
                        {chartData.map((entry: any, index: number) => (
                          <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#3F5EB5' : '#5C7CFA'} />
                        ))}
                      </Bar>
                    </BarChart>
                  )}
                </ResponsiveContainer>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
