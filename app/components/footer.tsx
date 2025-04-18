import Image from "next/image"

export default function Footer() {
  return (
    <footer className="relative z-10 bg-gradient-to-r from-green-800 via-green-700 to-green-800 text-white py-8 px-4 md:px-6 mt-12">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-red-500 to-orange-400"></div>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center">
              <Image
                src="/images/kultoura-logo.png"
                alt="KULTOURA Logo"
                width={40}
                height={40}
                className="rounded-full mr-3"
              />
              <span className="text-xl font-bold text-green-100">KULTOURA</span>
            </div>
            <p className="text-green-200 text-sm mt-1">Celebrating the Rich Culture and Heritage of Oriental Mindoro</p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-green-100">© 2025 KULTOURA - Mindoro State University</p>
            <p className="text-green-300 text-xs mt-1">
              In accordance with CHED Memorandum Order No. 63, Series of 2017
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

