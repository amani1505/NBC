import Button from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

function CareersPageSection() {
  return (
  <div className="container mx-auto px-4 py-8">

      <Button size="md" variant="primary" className="mb-6" icon={ChevronDown} iconPosition="right">
      Careers
    </Button>

  <Button variant="outline" className="ml-4" icon={ChevronDown} iconPosition="right">
      Careers
    </Button>

  </div>
  )
}

export default CareersPageSection
