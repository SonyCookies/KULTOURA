"use client"

import React, { useState } from "react"
import {
  LucideArrowUpRight,
  LucideSearch,
  LucideEye,
  LucideEyeOff,
  LucideChevronUp,
  LucideChevronDown,
  LucideTrophy,
  LucideCrown,
  LucideScroll,
  LucideAward,
  LucidePrinter,
  LucidePaintbrush,
  LucideClipboard,
  LucideCoffee,
  LucideGift,
  LucideAlertTriangle,
  LucideTag,
} from "lucide-react"

interface DetailedExpensesProps {
  className?: string
}

interface ExpenseItem {
  category: string
  item: string
  quantity: number
  unitCost: number
  amount: number
}

interface CategoryExpense {
  category: string
  quantity: number
  unitCost: number
  total: number
  items?: ExpenseItem[]
}

export default function DetailedExpenses({ className = "" }: DetailedExpensesProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterCategory] = useState<string | null>(null)
  const [showAllDetails, setShowAllDetails] = useState(false)
  const [expandedCategories, setExpandedCategories] = useState<string[]>([])

  // Detailed expense data
  const expenseData: CategoryExpense[] = [
    {
      category: "Crowns",
      quantity: 2,
      unitCost: 300,
      total: 600,
      items: [
        { category: "Crown", item: "Crown (Mr. Cultural Royalty)", quantity: 1, unitCost: 300, amount: 300 },
        { category: "Crown", item: "Crown (Ms. Cultural Royalty)", quantity: 1, unitCost: 300, amount: 300 },
      ],
    },
    {
      category: "Trophies",
      quantity: 16,
      unitCost: 232.5,
      total: 3720,
      items: [
        { category: "Trophies", item: "Trophy (Champion) - Video", quantity: 1, unitCost: 300, amount: 300 },
        { category: "Trophies", item: "Trophy (1st Place) - Video", quantity: 1, unitCost: 250, amount: 250 },
        { category: "Trophies", item: "Trophy (2nd Place) - Video", quantity: 1, unitCost: 200, amount: 200 },
        { category: "Trophies", item: "Trophy (3rd Place) - Video", quantity: 1, unitCost: 180, amount: 180 },
        { category: "Trophies", item: "Trophy (Champion) - Dance", quantity: 1, unitCost: 300, amount: 300 },
        { category: "Trophies", item: "Trophy (1st Place) - Dance", quantity: 1, unitCost: 250, amount: 250 },
        { category: "Trophies", item: "Trophy (2nd Place) - Dance", quantity: 1, unitCost: 200, amount: 200 },
        { category: "Trophies", item: "Trophy (3rd Place) - Dance", quantity: 1, unitCost: 180, amount: 180 },
        { category: "Trophies", item: "Trophy (Champion) - Museum", quantity: 1, unitCost: 300, amount: 300 },
        { category: "Trophies", item: "Trophy (1st Place) - Museum", quantity: 1, unitCost: 250, amount: 250 },
        { category: "Trophies", item: "Trophy (2nd Place) - Museum", quantity: 1, unitCost: 200, amount: 200 },
        { category: "Trophies", item: "Trophy (3rd Place) - Museum", quantity: 1, unitCost: 180, amount: 180 },
        { category: "Trophies", item: "Trophy (Champion) - Choir", quantity: 1, unitCost: 300, amount: 300 },
        { category: "Trophies", item: "Trophy (1st Place) - Choir", quantity: 1, unitCost: 250, amount: 250 },
        { category: "Trophies", item: "Trophy (2nd Place) - Choir", quantity: 1, unitCost: 200, amount: 200 },
        { category: "Trophies", item: "Trophy (3rd Place) - Choir", quantity: 1, unitCost: 180, amount: 180 },
      ],
    },
    {
      category: "Ready-made Sash",
      quantity: 8,
      unitCost: 180,
      total: 1440,
      items: [
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
      ],
    },
    {
      category: "Plaque",
      quantity: 2,
      unitCost: 200,
      total: 400,
      items: [
        { category: "Plaque", item: "Mr. & Ms. Cultural Royalty Plaque", quantity: 2, unitCost: 200, amount: 400 },
      ],
    },
    {
      category: "Certificate/Printing Costs",
      quantity: 101,
      unitCost: 35.54,
      total: 3590,
      items: [
        {
          category: "Certificate/Printing Costs",
          item: "Certificates for Video Competition",
          quantity: 12,
          unitCost: 15,
          amount: 180,
        },
        {
          category: "Certificate/Printing Costs",
          item: "Certificates for Cultural Royalty",
          quantity: 13,
          unitCost: 15,
          amount: 195,
        },
        {
          category: "Certificate/Printing Costs",
          item: "Certificates for Dance Competition",
          quantity: 12,
          unitCost: 15,
          amount: 180,
        },
        {
          category: "Certificate/Printing Costs",
          item: "Certificates for Mini-museum",
          quantity: 12,
          unitCost: 15,
          amount: 180,
        },
        {
          category: "Certificate/Printing Costs",
          item: "Certificates for Speech Choir",
          quantity: 10,
          unitCost: 15,
          amount: 150,
        },
        {
          category: "Certificate/Printing Costs",
          item: "Certificate Holders",
          quantity: 34,
          unitCost: 45,
          amount: 1530,
        },
        {
          category: "Certificate/Printing Costs",
          item: "Vellum Paper (packs)",
          quantity: 6,
          unitCost: 50,
          amount: 300,
        },
        {
          category: "Certificate/Printing Costs",
          item: "Other Printing Materials",
          quantity: 2,
          unitCost: 437.5,
          amount: 875,
        },
      ],
    },
    {
      category: "Meals, Beverages & Snacks",
      quantity: 102,
      unitCost: 27.82,
      total: 2838,
      items: [
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
      ],
    },
    {
      category: "Accessories and Tokens",
      quantity: 18,
      unitCost: 240,
      total: 4320,
      items: [
        { category: "Accessories and Tokens", item: "Garland/Lei", quantity: 6, unitCost: 200, amount: 1200 },
        { category: "Accessories and Tokens", item: "Polo Shirt", quantity: 6, unitCost: 500, amount: 3000 },
        { category: "Accessories and Tokens", item: "Paper Bag", quantity: 6, unitCost: 20, amount: 120 },
      ],
    },
    {
      category: "Materials for Venue Decoration",
      quantity: 37,
      unitCost: 364.59,
      total: 13490,
      items: [
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
        { category: "Materials for Venue Decoration", item: "Banner Stand", quantity: 8, unitCost: 180, amount: 1440 },
        { category: "Materials for Venue Decoration", item: "Paint", quantity: 4, unitCost: 300, amount: 1200 },
      ],
    },
    {
      category: "Emergency Fund",
      quantity: 4,
      unitCost: 1350.5,
      total: 5402,
      items: [
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
  ]

  // Calculate total for expense data
  const grandTotal = expenseData.reduce((sum, item) => sum + item.total, 0)

  // Filter expense data based on search and category filter
  const filteredExpenses = expenseData.filter((expense) => {
    const matchesSearch = searchQuery === "" || expense.category.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = filterCategory === null || expense.category === filterCategory
    return matchesSearch && matchesCategory
  })

  // Toggle category expansion
  const toggleCategory = (category: string) => {
    if (expandedCategories.includes(category)) {
      setExpandedCategories(expandedCategories.filter((c) => c !== category))
    } else {
      setExpandedCategories([...expandedCategories, category])
    }
  }

  // Toggle all categories
  const toggleAllCategories = () => {
    if (showAllDetails) {
      setExpandedCategories([])
    } else {
      setExpandedCategories(expenseData.map((item) => item.category))
    }
    setShowAllDetails(!showAllDetails)
  }

  return (
    <section
      id="expenses"
      className={`bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 ${className}`}
    >
      <div className="p-6 border-b border-gray-100">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h2 className="text-xl font-bold text-green-800 flex items-center">
            <LucideArrowUpRight className="mr-2 h-5 w-5 text-green-600" />
            Detailed Expenses
          </h2>

          <div className="flex items-center gap-3">
            <div className="relative">
              <LucideSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-md py-1.5 pl-10 pr-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <button
              onClick={toggleAllCategories}
              className="px-3 py-1.5 bg-gray-100 rounded-md text-sm hover:bg-gray-200 transition-all duration-300 flex items-center"
            >
              {showAllDetails ? (
                <>
                  <LucideEyeOff className="h-4 w-4 mr-1.5 text-black" />
                  <span className="text-black">Collapse All</span>
                </>
              ) : (
                <>
                  <LucideEye className="h-4 w-4 mr-1.5 text-black" />
                  <span className="text-black">Expand All</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gradient-to-r from-green-600 to-green-700 text-white">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Category
              </th>
              <th scope="col" className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider">
                Unit Cost (₱)
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider">
                Total (₱)
              </th>
              <th scope="col" className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">
                Details
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredExpenses.map((expense) => (
              <React.Fragment key={expense.category}>
                <tr className="hover:bg-green-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-700 font-medium">
                    <div className="flex items-center">
                      <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-2 text-green-700">
                        <CategoryIcon category={expense.category} />
                      </span>
                      {expense.category}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 text-center">{expense.quantity}</td>
                  <td className="px-6 py-4 text-sm text-gray-700 text-right">{expense.unitCost.toLocaleString()}</td>
                  <td className="px-6 py-4 text-sm font-medium text-green-800 text-right">
                    {expense.total.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => toggleCategory(expense.category)}
                      className={`p-1.5 rounded-full transition-colors ${
                        expandedCategories.includes(expense.category)
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                      }`}
                    >
                      {expandedCategories.includes(expense.category) ? (
                        <LucideChevronUp className="h-4 w-4" />
                      ) : (
                        <LucideChevronDown className="h-4 w-4" />
                      )}
                    </button>
                  </td>
                </tr>
                {/* Expanded details */}
                {expandedCategories.includes(expense.category) && expense.items && (
                  <tr key={`${expense.category}-details`}>
                    <td colSpan={5} className="px-0 py-0 border-t-0">
                      <div className="bg-green-50 p-4">
                        <h4 className="text-sm font-medium text-green-800 mb-3">Detailed Breakdown</h4>
                        <div className="overflow-x-auto">
                          <table className="min-w-full divide-y divide-gray-200 border border-green-100 rounded-lg overflow-hidden">
                            <thead className="bg-green-100">
                              <tr>
                                <th
                                  scope="col"
                                  className="px-4 py-2 text-left text-xs font-medium text-green-800 uppercase tracking-wider"
                                >
                                  Item
                                </th>
                                <th
                                  scope="col"
                                  className="px-4 py-2 text-center text-xs font-medium text-green-800 uppercase tracking-wider"
                                >
                                  Quantity
                                </th>
                                <th
                                  scope="col"
                                  className="px-4 py-2 text-right text-xs font-medium text-green-800 uppercase tracking-wider"
                                >
                                  Unit Cost (₱)
                                </th>
                                <th
                                  scope="col"
                                  className="px-4 py-2 text-right text-xs font-medium text-green-800 uppercase tracking-wider"
                                >
                                  Amount (₱)
                                </th>
                              </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                              {expense.items.map((item, itemIndex) => (
                                <tr key={`${expense.category}-item-${itemIndex}`} className="hover:bg-green-50">
                                  <td className="px-4 py-2 text-sm text-gray-700">{item.item}</td>
                                  <td className="px-4 py-2 text-sm text-gray-700 text-center">{item.quantity}</td>
                                  <td className="px-4 py-2 text-sm text-gray-700 text-right">
                                    {item.unitCost.toLocaleString()}
                                  </td>
                                  <td className="px-4 py-2 text-sm text-gray-700 text-right">
                                    {item.amount.toLocaleString()}
                                  </td>
                                </tr>
                              ))}
                              <tr className="bg-green-100">
                                <td colSpan={3} className="px-4 py-2 text-sm font-medium text-green-800 text-right">
                                  Subtotal:
                                </td>
                                <td className="px-4 py-2 text-sm font-bold text-green-800 text-right">
                                  {expense.total.toLocaleString()}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-gradient-to-r from-green-100 to-blue-100">
              <td colSpan={3} className="px-6 py-3 text-sm font-bold text-green-800 text-right">
                Grand Total
              </td>
              <td className="px-6 py-3 text-sm font-bold text-green-800 text-right">{grandTotal.toLocaleString()}</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="p-4 text-center">
        <span className="inline-block px-4 py-2 bg-green-50 text-green-700 text-sm rounded-full border border-green-100">
          Proposed budget for KULTOURA 2025 - Not yet allocated or spent
        </span>
      </div>
    </section>
  )
}

// Helper function to render category icons
function CategoryIcon({ category }: { category: string }) {
  const iconSize = "h-4 w-4"

  switch (category) {
    case "Trophies":
      return <LucideTrophy className={iconSize} />
    case "Crowns":
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

