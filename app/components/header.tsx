import Image from "next/image"

export default function Header() {
  return (
    <header className="relative z-10 bg-gradient-to-r from-green-800 via-green-700 to-green-800 text-white py-8 px-4 md:px-6 shadow-lg">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0 flex items-center">
            <div className="w-20 h-20 mr-4 rounded-full overflow-hidden bg-white p-1 shadow-md">
              <Image
                src="/images/kultoura-logo.png"
                alt="KULTOURA Logo"
                width={80}
                height={80}
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-green-50">KULTOURA 2025</h1>
              <p className="text-green-200 mt-1">Celebrating the Rich Culture and Heritage of Oriental Mindoro</p>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-green-100 text-sm md:text-base italic">
              "Tracing Roots, Bridging Generations: Weaving Oriental Mindoro's Living Heritage"
            </p>
            <p className="text-green-200 text-xs mt-1">Mindoro State University – Calapan City Campus</p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 via-red-500 to-orange-400"></div>
    </header>
  )
}

