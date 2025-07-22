import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface CategoryOption {
    value: string;
    label: string;
  }


const categories: CategoryOption[] = [
    { value: 'all', label: 'All Categories' },
    { value: 'gallery', label: 'Gallery' },
    { value: 'portfolio', label: 'Portfolio' },
    { value: 'team', label: 'Team' }
  ];
  


const GalleryHeader: React.FC<{
    selectedCategory: string;
    onCategoryChange: (value: string) => void;
  }> = ({ selectedCategory, onCategoryChange }) => (
    <div className="flex items-center gap-4 mb-6">
      <span className="text-sm font-medium text-gray-700">Select category</span>
      <Select value={selectedCategory} onValueChange={onCategoryChange}>
        <SelectTrigger className="w-48">
          <SelectValue placeholder="Select a category" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((category) => (
            <SelectItem key={category.value} value={category.value}>
              {category.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );


  export default GalleryHeader;