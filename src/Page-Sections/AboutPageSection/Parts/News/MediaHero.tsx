import { Badge } from "@/components/ui/badge"

function MediaHero() {
  return (
    <>
      <p className="text-gray-400">Latest Webinar/ Live Session</p>

    <div className="py-7">
    <div
      className={`flex bg-white border border-gray-300 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex-col md:flex-row`}
    >
      {/* Image Container */}
      <div
        className={`relative w-full md:w-1/2 h-48 sm:h-64 md:h-full overflow-hidden`}
      >
        <img
          src={`/images/news1.jpg`}
          alt={`news`}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      {/* Content */}
      <div
        className={`p-4 sm:p-6 space-y-4 w-fullmd:w-1/2 flex flex-col `}
      >
        <div>
          <span className="text-xs mr-3">{'13 January 2025'}</span>
          <Badge variant="outline" className="rounded-full border-gray-300 ">
      
            { "Badge"}
        
        </Badge>
        </div>
       
        <h3 className="text-base sm:text-lg font-semibold text-foreground leading-tight">
          {`Effective product marketing techniques for small businesses`}
        </h3>
        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed line-clamp-2">
          {`Learn the essential steps to turn your product idea into a thriving business.`}
        </p>
      </div>
    </div>
    </div>



    </>
  )
}

export default MediaHero
