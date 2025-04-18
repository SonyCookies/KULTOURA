import { LucideBanknote, LucideArrowUpRight, LucideChevronRight } from 'lucide-react'

export default function BudgetOverview() {
// Budget proposal data - not yet spent
const totalBudget = 35800
const studentPopulation = 358
const individualContribution = 100

// Calculate percentages for the visual budget breakdown
const expenseCategories = [
  { name: "Venue Materials", amount: 13490, color: "bg-green-500" },
  { name: "Emergency Fund", amount: 5402, color: "bg-orange-500" },
  { name: "Tokens", amount: 4320, color: "bg-blue-500" },
  { name: "Printing Costs", amount: 3590, color: "bg-purple-500" },
  { name: "Trophies & Awards", amount: 6160, color: "bg-yellow-500" },
  { name: "Food & Beverages", amount: 2838, color: "bg-red-500" },
]

const totalAmount = expenseCategories.reduce((sum, category) => sum + category.amount, 0)

return (
  <div className="mt-8 relative">
    {/* Background decorative elements */}
    <div className="absolute -top-10 -left-10 w-20 h-20 bg-green-500 rounded-full opacity-10 blur-xl animate-pulse"></div>
    <div
      className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500 rounded-full opacity-10 blur-xl animate-pulse"
      style={{ animationDelay: "1s" }}
    ></div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Main budget card */}
      <div className="lg:col-span-2 overflow-hidden rounded-2xl bg-white shadow-lg relative border border-green-100">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-green-300 to-green-500"></div>

        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-green-800 flex items-center">
              <LucideBanknote className="mr-2 h-6 w-6 text-green-600" />
              Budget Overview
            </h2>
            <div className="text-3xl font-bold text-green-700">₱{totalBudget.toLocaleString()}</div>
          </div>

          {/* Visual budget breakdown */}
          <div className="mb-8">
            <div className="flex h-8 w-full rounded-lg overflow-hidden">
              {expenseCategories.map((category, index) => {
                const percentage = (category.amount / totalAmount) * 100
                return (
                  <div key={index} className={`${category.color} relative group`} style={{ width: `${percentage}%` }}>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                    <div className="opacity-0 group-hover:opacity-100 absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap transition-opacity z-10">
                      {category.name}: ₱{category.amount.toLocaleString()} ({percentage.toFixed(1)}%)
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="mt-2 flex justify-between text-xs text-gray-500">
              <span>0%</span>
              <span>100%</span>
            </div>
          </div>

          {/* Legend */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
            {expenseCategories.map((category, index) => (
              <div key={index} className="flex items-center">
                <div className={`w-3 h-3 ${category.color} rounded-sm mr-2`}></div>
                <span className="text-sm text-gray-700 truncate">{category.name}</span>
              </div>
            ))}
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-green-50 rounded-lg p-4 border border-green-100">
              <div className="text-sm text-green-700 mb-1">Total Budget</div>
              <div className="text-2xl font-bold text-green-800">₱{totalBudget.toLocaleString()}</div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
              <div className="text-sm text-blue-700 mb-1">Students</div>
              <div className="text-2xl font-bold text-blue-800">{studentPopulation}</div>
            </div>

            <div className="bg-orange-50 rounded-lg p-4 border border-orange-100">
              <div className="text-sm text-orange-700 mb-1">Per Student</div>
              <div className="text-2xl font-bold text-orange-800">₱{individualContribution}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Top expenses card */}
      <div className="overflow-hidden rounded-2xl bg-white shadow-lg relative border border-green-100">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-orange-300 to-orange-400"></div>

        <div className="p-6">
          <h3 className="text-lg font-bold text-green-800 mb-4 flex items-center">
            <LucideArrowUpRight className="mr-2 h-5 w-5 text-orange-500" />
            Top Expenses
          </h3>

          <div className="space-y-4">
            {expenseCategories.slice(0, 4).map((category, index) => {
              const percentage = (category.amount / totalAmount) * 100
              return (
                <div key={index} className="relative">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-gray-700">{category.name}</span>
                    <span className="text-gray-600">₱{category.amount.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2.5">
                    <div className={`${category.color} h-2.5 rounded-full`} style={{ width: `${percentage}%` }}></div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-6 pt-4 border-t border-gray-100">
            <div className="text-sm text-gray-500 mb-2">Budget Status</div>
            <div className="flex items-center justify-between">
              <span className="text-green-600 font-medium">Proposed</span>
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Not yet allocated</span>
            </div>
          </div>

          <a
            href="#expenses"
            className="mt-4 flex items-center text-green-600 text-sm font-medium hover:text-green-700 transition-colors"
          >
            View detailed breakdown
            <LucideChevronRight className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  </div>
)
}

