"use client"

import React from "react"
import { LucideTrophy, LucideCrown, LucideScroll, LucideAward, LucidePrinter, LucidePaintbrush, LucideClipboard, LucideCoffee, LucideGift, LucideAlertTriangle, LucideTag, LucideChevronDown, LucideChevronUp, LucidePieChart } from 'lucide-react'

interface EventBreakdownProps {
  title: string
  eventId: string
  className?: string
}

interface ExpenseItem {
  category: string
  item: string
  quantity: number
  unitCost: number
  amount: number
}

interface EventData {
  budget: number
  expenses: ExpenseItem[]
}

export default function EventBreakdown({ title, eventId, className = "" }: EventBreakdownProps) {
  const [isExpanded, setIsExpanded] = React.useState(true)
  const eventData = getEventData(eventId)
  const totalBudget = eventData.budget

  // Group expenses by category
  const groupedExpenses: Record<string, ExpenseItem[]> = {}
  eventData.expenses.forEach((expense) => {
    if (!groupedExpenses[expense.category]) {
      groupedExpenses[expense.category] = []
    }
    groupedExpenses[expense.category].push(expense)
  })

  // Calculate category totals for the pie chart visualization
  const categoryTotals = Object.keys(groupedExpenses).map((category) => {
    const total = groupedExpenses[category].reduce((sum, item) => sum + item.amount, 0)
    return { category, total }
  })

  return (
    <div
      className={`bg-white p-6 rounded-2xl shadow-lg border border-green-100 ${className} relative overflow-hidden transition-all duration-300 hover:shadow-xl`}
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-bl-full opacity-70"></div>
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-50 rounded-tr-full opacity-70"></div>

      {/* Decorative accent line */}
      <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-green-500 via-green-300 to-transparent opacity-40"></div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 relative z-10">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-600 to-green-700 flex items-center justify-center mr-3 shadow-sm">
            <LucideClipboard className="h-5 w-5 text-white" />
          </div>
          <h3 className="text-xl font-bold text-green-800">{title}</h3>
        </div>
        <div className="mt-2 md:mt-0 flex items-center space-x-3">
          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
            Budget: ₱{totalBudget.toLocaleString()}
          </span>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1 rounded-full bg-green-50 hover:bg-green-100 transition-colors"
            aria-label={isExpanded ? "Collapse" : "Expand"}
          >
            {isExpanded ? (
              <LucideChevronUp className="h-4 w-4 text-green-700" />
            ) : (
              <LucideChevronDown className="h-4 w-4 text-green-700" />
            )}
          </button>
        </div>
      </div>

      {isExpanded && (
        <>
          {/* Visual budget breakdown by category */}
          {categoryTotals.length > 1 && (
            <div className="mb-6 p-4 bg-green-50 rounded-lg border border-green-100">
              <div className="flex items-center mb-2">
                <LucidePieChart className="h-4 w-4 text-green-700 mr-2" />
                <h4 className="text-sm font-medium text-green-800">Budget Distribution</h4>
              </div>
              <div className="flex h-6 w-full rounded-md overflow-hidden">
                {categoryTotals.map((cat, index) => {
                  const percentage = (cat.total / totalBudget) * 100
                  const colors = [
                    "bg-green-500",
                    "bg-blue-500",
                    "bg-orange-500",
                    "bg-purple-500",
                    "bg-yellow-500",
                    "bg-red-500",
                    "bg-indigo-500",
                    "bg-pink-500",
                    "bg-teal-500",
                  ]
                  const color = colors[index % colors.length]

                  return (
                    <div key={index} className={`${color} relative group`} style={{ width: `${percentage}%` }}>
                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                      <div className="opacity-0 group-hover:opacity-100 absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap transition-opacity z-10">
                        {cat.category}: ₱{cat.total.toLocaleString()} ({percentage.toFixed(1)}%)
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className="mt-2 grid grid-cols-2 md:grid-cols-3 gap-2">
                {categoryTotals.map((cat, index) => {
                  const colors = [
                    "bg-green-500",
                    "bg-blue-500",
                    "bg-orange-500",
                    "bg-purple-500",
                    "bg-yellow-500",
                    "bg-red-500",
                    "bg-indigo-500",
                    "bg-pink-500",
                    "bg-teal-500",
                  ]
                  const color = colors[index % colors.length]

                  return (
                    <div key={index} className="flex items-center">
                      <div className={`w-3 h-3 ${color} rounded-sm mr-2`}></div>
                      <span className="text-xs text-gray-700 truncate">{cat.category}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          <div className="overflow-x-auto relative z-10 rounded-xl shadow-sm border border-green-100">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gradient-to-r from-green-600 to-green-700 text-white">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Category
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">
                    Item
                  </th>
                  <th scope="col" className="px-4 py-3 text-center text-xs font-medium uppercase tracking-wider">
                    Quantity
                  </th>
                  <th scope="col" className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider">
                    Unit Cost (₱)
                  </th>
                  <th scope="col" className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider">
                    Total (₱)
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {Object.keys(groupedExpenses).map((category) => {
                  const categoryExpenses = groupedExpenses[category]
                  const categoryTotal = categoryExpenses.reduce((sum, item) => sum + item.amount, 0)

                  return (
                    <React.Fragment key={category}>
                      {categoryExpenses.map((expense, index) => (
                        <tr key={`${category}-${index}`} className="hover:bg-green-50 transition-colors">
                          {index === 0 ? (
                            <td
                              className="px-4 py-3 text-sm font-medium text-gray-700"
                              rowSpan={categoryExpenses.length}
                            >
                              <div className="flex items-center">
                                <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-2 text-green-700">
                                  <CategoryIcon category={category} />
                                </span>
                                {category}
                              </div>
                            </td>
                          ) : null}
                          <td className="px-4 py-3 text-sm text-gray-700">{expense.item}</td>
                          <td className="px-4 py-3 text-sm text-gray-700 text-center">{expense.quantity}</td>
                          <td className="px-4 py-3 text-sm text-gray-700 text-right">
                            {expense.unitCost.toLocaleString()}
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-700 text-right">
                            {expense.amount.toLocaleString()}
                          </td>
                        </tr>
                      ))}
                      <tr className="bg-green-50">
                        <td colSpan={4} className="px-4 py-2 text-sm font-medium text-gray-700 text-right">
                          {category} Subtotal:
                        </td>
                        <td className="px-4 py-2 text-sm font-bold text-green-800 text-right">
                          {categoryTotal.toLocaleString()}
                        </td>
                      </tr>
                    </React.Fragment>
                  )
                })}
              </tbody>
              <tfoot>
                <tr className="bg-gradient-to-r from-green-100 to-blue-100">
                  <td colSpan={4} className="px-4 py-3 text-sm font-bold text-green-800 text-right">
                    Total Budget:
                  </td>
                  <td className="px-4 py-3 text-sm font-bold text-green-800 text-right">
                    {totalBudget.toLocaleString()}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </>
      )}
    </div>
  )
}

function CategoryIcon({ category }: { category: string }) {
  const iconSize = "h-4 w-4"

  switch (category) {
    case "Trophies":
      return <LucideTrophy className={iconSize} />
    case "Crown":
      return <LucideCrown className={iconSize} />
    case "Ready-made Sash":
      return <LucideScroll className={iconSize} />
    case "Plaque":
      return <LucideAward className={iconSize} />
    case "Certificate/Printing Costs":
      return <LucidePrinter className={iconSize} />
    case "Materials for Venue Decoration":
      return <LucidePaintbrush className={iconSize} />
    case "Printing & Registration":
      return <LucideClipboard className={iconSize} />
    case "Meals, Beverages & Snacks":
      return <LucideCoffee className={iconSize} />
    case "Accessories and Tokens":
      return <LucideGift className={iconSize} />
    case "Emergency Fund":
      return <LucideAlertTriangle className={iconSize} />
    default:
      return <LucideTag className={iconSize} />
  }
}

// Update the getEventData function to use the correct data from the attachment

function getEventData(id: string): EventData {
  // Updated data based on the attachment
  const data: Record<string, EventData> = {
    video: {
      budget: 1400,
      expenses: [
        { category: "Trophies", item: "Trophy (Champion)", quantity: 1, unitCost: 300, amount: 300 },
        { category: "Trophies", item: "Trophy (1st Place)", quantity: 1, unitCost: 250, amount: 250 },
        { category: "Trophies", item: "Trophy (2nd Place)", quantity: 1, unitCost: 200, amount: 200 },
        { category: "Trophies", item: "Trophy (3rd Place)", quantity: 1, unitCost: 180, amount: 180 },
        {
          category: "Certificate/Printing Costs",
          item: "Certificate (Champion)",
          quantity: 1,
          unitCost: 15,
          amount: 15,
        },
        {
          category: "Certificate/Printing Costs",
          item: "Certificate (1st Place)",
          quantity: 1,
          unitCost: 15,
          amount: 15,
        },
        {
          category: "Certificate/Printing Costs",
          item: "Certificate (2nd Place)",
          quantity: 1,
          unitCost: 15,
          amount: 15,
        },
        {
          category: "Certificate/Printing Costs",
          item: "Certificate (3rd Place)",
          quantity: 1,
          unitCost: 15,
          amount: 15,
        },
        {
          category: "Certificate/Printing Costs",
          item: "Certificates (Special Awards)",
          quantity: 3,
          unitCost: 15,
          amount: 45,
        },
        {
          category: "Certificate/Printing Costs",
          item: "Certificates Holders",
          quantity: 7,
          unitCost: 45,
          amount: 315,
        },
        {
          category: "Certificate/Printing Costs",
          item: "Vellum Paper (pack)",
          quantity: 1,
          unitCost: 50,
          amount: 50,
        },
      ],
    },
    royalty: {
      budget: 3320,
      expenses: [
        { category: "Crown", item: "Crown (Mr. Cultural Royalty)", quantity: 1, unitCost: 300, amount: 300 },
        { category: "Crown", item: "Crown (Ms. Cultural Royalty)", quantity: 1, unitCost: 300, amount: 300 },
        {
          category: "Ready-made Sash",
          item: "Sash (Mr. & Ms. Cultural Royalty)",
          quantity: 2,
          unitCost: 180,
          amount: 360,
        },
        { category: "Ready-made Sash", item: "Sash (1st Runner Up)", quantity: 2, unitCost: 180, amount: 360 },
        { category: "Ready-made Sash", item: "Sash (2nd Runner Up)", quantity: 2, unitCost: 180, amount: 360 },
        { category: "Ready-made Sash", item: "Sash (3rd Runner Up)", quantity: 2, unitCost: 180, amount: 360 },
        { category: "Plaque", item: "Mr. & Ms. Cultural Royalty Plaque", quantity: 2, unitCost: 200, amount: 400 },
        {
          category: "Certificate/Printing Costs",
          item: "Certificate (Mr. & Ms. Cultural Royalty)",
          quantity: 2,
          unitCost: 15,
          amount: 30,
        },
        {
          category: "Certificate/Printing Costs",
          item: "Certificate (1st Runner Up)",
          quantity: 2,
          unitCost: 15,
          amount: 30,
        },
        {
          category: "Certificate/Printing Costs",
          item: "Certificate (2nd Runner Up)",
          quantity: 2,
          unitCost: 15,
          amount: 30,
        },
        {
          category: "Certificate/Printing Costs",
          item: "Certificate (3rd Runner Up)",
          quantity: 2,
          unitCost: 15,
          amount: 30,
        },
        {
          category: "Certificate/Printing Costs",
          item: "Certificates (Special Awards)",
          quantity: 5,
          unitCost: 15,
          amount: 75,
        },
        {
          category: "Certificate/Printing Costs",
          item: "Certificates Holders",
          quantity: 13,
          unitCost: 45,
          amount: 585,
        },
        {
          category: "Certificate/Printing Costs",
          item: "Vellum Paper (pack)",
          quantity: 2,
          unitCost: 50,
          amount: 100,
        },
      ],
    },
    dance: {
      budget: 1400,
      expenses: [
        { category: "Trophies", item: "Trophy (Champion)", quantity: 1, unitCost: 300, amount: 300 },
        { category: "Trophies", item: "Trophy (1st Place)", quantity: 1, unitCost: 250, amount: 250 },
        { category: "Trophies", item: "Trophy (2nd Place)", quantity: 1, unitCost: 200, amount: 200 },
        { category: "Trophies", item: "Trophy (3rd Place)", quantity: 1, unitCost: 180, amount: 180 },
        {
          category: "Certificate/Printing Costs",
          item: "Certificate (Champion)",
          quantity: 1,
          unitCost: 15,
          amount: 15,
        },
        {
          category: "Certificate/Printing Costs",
          item: "Certificate (1st Place)",
          quantity: 1,
          unitCost: 15,
          amount: 15,
        },
        {
          category: "Certificate/Printing Costs",
          item: "Certificate (2nd Place)",
          quantity: 1,
          unitCost: 15,
          amount: 15,
        },
        {
          category: "Certificate/Printing Costs",
          item: "Certificate (3rd Place)",
          quantity: 1,
          unitCost: 15,
          amount: 15,
        },
        {
          category: "Certificate/Printing Costs",
          item: "Certificates (Special Awards)",
          quantity: 3,
          unitCost: 15,
          amount: 45,
        },
        {
          category: "Certificate/Printing Costs",
          item: "Certificates Holders",
          quantity: 7,
          unitCost: 45,
          amount: 315,
        },
        {
          category: "Certificate/Printing Costs",
          item: "Vellum Paper (pack)",
          quantity: 1,
          unitCost: 50,
          amount: 50,
        },
      ],
    },
    museum: {
      budget: 1460,
      expenses: [
        { category: "Trophies", item: "Trophy (Champion)", quantity: 1, unitCost: 300, amount: 300 },
        { category: "Trophies", item: "Trophy (1st Place)", quantity: 1, unitCost: 250, amount: 250 },
        { category: "Trophies", item: "Trophy (2nd Place)", quantity: 1, unitCost: 200, amount: 200 },
        { category: "Trophies", item: "Trophy (3rd Place)", quantity: 1, unitCost: 180, amount: 180 },
        {
          category: "Certificate/Printing Costs",
          item: "Certificate (Champion)",
          quantity: 1,
          unitCost: 15,
          amount: 15,
        },
        {
          category: "Certificate/Printing Costs",
          item: "Certificate (1st Place)",
          quantity: 1,
          unitCost: 15,
          amount: 15,
        },
        {
          category: "Certificate/Printing Costs",
          item: "Certificate (2nd Place)",
          quantity: 1,
          unitCost: 15,
          amount: 15,
        },
        {
          category: "Certificate/Printing Costs",
          item: "Certificate (3rd Place)",
          quantity: 1,
          unitCost: 15,
          amount: 15,
        },
        {
          category: "Certificate/Printing Costs",
          item: "Certificates (Special Awards)",
          quantity: 4,
          unitCost: 15,
          amount: 60,
        },
        {
          category: "Certificate/Printing Costs",
          item: "Certificates Holders",
          quantity: 8,
          unitCost: 45,
          amount: 360,
        },
        {
          category: "Certificate/Printing Costs",
          item: "Vellum Paper (pack)",
          quantity: 1,
          unitCost: 50,
          amount: 50,
        },
      ],
    },
    choir: {
      budget: 1340,
      expenses: [
        { category: "Trophies", item: "Trophy (Champion)", quantity: 1, unitCost: 300, amount: 300 },
        { category: "Trophies", item: "Trophy (1st Place)", quantity: 1, unitCost: 250, amount: 250 },
        { category: "Trophies", item: "Trophy (2nd Place)", quantity: 1, unitCost: 200, amount: 200 },
        { category: "Trophies", item: "Trophy (3rd Place)", quantity: 1, unitCost: 180, amount: 180 },
        {
          category: "Certificate/Printing Costs",
          item: "Certificate (Champion)",
          quantity: 1,
          unitCost: 15,
          amount: 15,
        },
        {
          category: "Certificate/Printing Costs",
          item: "Certificate (1st Place)",
          quantity: 1,
          unitCost: 15,
          amount: 15,
        },
        {
          category: "Certificate/Printing Costs",
          item: "Certificate (2nd Place)",
          quantity: 1,
          unitCost: 15,
          amount: 15,
        },
        {
          category: "Certificate/Printing Costs",
          item: "Certificate (3rd Place)",
          quantity: 1,
          unitCost: 15,
          amount: 15,
        },
        {
          category: "Certificate/Printing Costs",
          item: "Certificates (Special Awards)",
          quantity: 2,
          unitCost: 15,
          amount: 30,
        },
        {
          category: "Certificate/Printing Costs",
          item: "Certificates Holders",
          quantity: 6,
          unitCost: 45,
          amount: 270,
        },
        {
          category: "Certificate/Printing Costs",
          item: "Vellum Paper (pack)",
          quantity: 1,
          unitCost: 50,
          amount: 50,
        },
      ],
    },
    venue: {
      budget: 13120,
      expenses: [
        {
          category: "Materials for Venue Decoration",
          item: "Styrofoam Sheets",
          quantity: 10,
          unitCost: 100,
          amount: 1000,
        },
        { category: "Materials for Venue Decoration", item: "Cutter", quantity: 1, unitCost: 35, amount: 35 },
        {
          category: "Materials for Venue Decoration",
          item: "Markers (Black/Colored)",
          quantity: 1,
          unitCost: 35,
          amount: 35,
        },
        { category: "Materials for Venue Decoration", item: "Glue Gun", quantity: 1, unitCost: 100, amount: 100 },
        {
          category: "Materials for Venue Decoration",
          item: "Glue Sticks (50pcs)",
          quantity: 2,
          unitCost: 90,
          amount: 180,
        },
        {
          category: "Materials for Venue Decoration",
          item: "Plywood (for stage setup)",
          quantity: 4,
          unitCost: 1500,
          amount: 6000,
        },
        {
          category: "Materials for Venue Decoration",
          item: "Tarpaulin (Event Banner)",
          quantity: 1,
          unitCost: 1500,
          amount: 1500,
        },
        {
          category: "Materials for Venue Decoration",
          item: "Candidate Banner",
          quantity: 8,
          unitCost: 250,
          amount: 2000,
        },
        {
          category: "Materials for Venue Decoration",
          item: "Banner Stand",
          quantity: 8,
          unitCost: 180,
          amount: 1440,
        },
        { category: "Materials for Venue Decoration", item: "Paint", quantity: 4, unitCost: 300, amount: 1200 },
        { category: "Printing & Registration", item: "Attendance Sheets", quantity: 16, unitCost: 5, amount: 80 },
        {
          category: "Printing & Registration",
          item: "Folders (for documents)",
          quantity: 30,
          unitCost: 10,
          amount: 300,
        },
        {
          category: "Printing & Registration",
          item: "Pencils (for judging)",
          quantity: 30,
          unitCost: 10,
          amount: 300,
        },
        { category: "Printing & Registration", item: "Score Sheets", quantity: 30, unitCost: 5, amount: 150 },
      ],
    },
    judges: {
      budget: 7158,
      expenses: [
        {
          category: "Meals, Beverages & Snacks",
          item: "1 Pc Chickenjoy with Burger Steak & Half Jolly Spaghetti and Drink Super Meal",
          quantity: 6,
          unitCost: 212,
          amount: 1272,
        },
        {
          category: "Meals, Beverages & Snacks",
          item: "Cookies & Cream Sundae",
          quantity: 6,
          unitCost: 59,
          amount: 354,
        },
        {
          category: "Meals, Beverages & Snacks",
          item: "Bottled Water (500ml)",
          quantity: 12,
          unitCost: 20,
          amount: 240,
        },
        {
          category: "Meals, Beverages & Snacks",
          item: "Crunchy Chicken Sandwich with Fries and Drink",
          quantity: 6,
          unitCost: 127,
          amount: 762,
        },
        { category: "Meals, Beverages & Snacks", item: "Biscuit", quantity: 12, unitCost: 10, amount: 120 },
        { category: "Meals, Beverages & Snacks", item: "Candies", quantity: 60, unitCost: 1.5, amount: 90 },
        { category: "Accessories and Tokens", item: "Garland/Lei", quantity: 6, unitCost: 200, amount: 1200 },
        { category: "Accessories and Tokens", item: "Polo Shirt", quantity: 6, unitCost: 500, amount: 3000 },
        { category: "Accessories and Tokens", item: "Paper Bag", quantity: 6, unitCost: 20, amount: 120 },
      ],
    },
    emergency: {
      budget: 5402,
      expenses: [
        {
          category: "Emergency Fund",
          item: "Additional Printing Costs (Certificates, Sashes, etc.)",
          quantity: 1,
          unitCost: 800,
          amount: 800,
        },
        {
          category: "Emergency Fund",
          item: "Food & Beverages (Extra for Judges/VIPs)",
          quantity: 1,
          unitCost: 1800,
          amount: 1800,
        },
        {
          category: "Emergency Fund",
          item: "Unexpected Venue Expenses (Repairs, Decorations, etc.)",
          quantity: 1,
          unitCost: 2002,
          amount: 2002,
        },
        {
          category: "Emergency Fund",
          item: "Miscellaneous (Transportation, Additional Materials)",
          quantity: 1,
          unitCost: 800,
          amount: 800,
        },
      ],
    },
  }

  return data[id] || { budget: 0, expenses: [] }
}
