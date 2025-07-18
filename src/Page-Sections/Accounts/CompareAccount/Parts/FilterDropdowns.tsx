import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  import type { FilterOptions } from "@/types/accounts";
  
  interface FilterDropdownsProps {
    filters: FilterOptions;
    onFiltersChange: (filters: FilterOptions) => void;
  }
  
  export function FilterDropdowns({ filters, onFiltersChange }: FilterDropdownsProps) {


    return (
   <>

   <div className="flex gap-4">
        <Select
          value={filters.category}
          onValueChange={(value) =>
            onFiltersChange({ ...filters, category: value as FilterOptions['category'] })
          }
        >
          <SelectTrigger className="w-[180px] bg-white border-gray-300">
            <SelectValue placeholder="Personal Banking" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem value="all">All Banking</SelectItem>
            <SelectItem value="personal">Personal Banking</SelectItem>
            <SelectItem value="business">Business Banking</SelectItem>
          </SelectContent>
        </Select>
  
        <Select
          value={filters.customerType}
          onValueChange={(value) =>
            onFiltersChange({ ...filters, customerType: value as FilterOptions['customerType'] })
          }
        >
          <SelectTrigger className="w-[150px] bg-white border-gray-300">
            <SelectValue placeholder="Individual" />
          
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="individual">Individual</SelectItem>
            <SelectItem value="corporate">Corporate</SelectItem>
          </SelectContent>
        </Select>
      </div>
   </>
    );
  }