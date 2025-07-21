import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { motion } from 'framer-motion';
const FilterSection = () => {
    return (
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-6 sm:mb-8 lg:mb-10 flex flex-col sm:flex-row items-center justify-between gap-4"
    >
      <div>
        <h2 className="text-lg sm:text-3xl lg:text-xl font-bold text-nbc-dark-950 mb-2 sm:mb-4">
      Filter By
        </h2>
        {/* <p className="text-sm sm:text-base text-[#262556] max-w-prose">
          Explore how you can benefit from these
        </p> */}
      </div>
      <div className="w-full sm:w-auto">
        <Select>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="News Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">All News</SelectItem>
            <SelectItem value="dark">Recent News</SelectItem>
            <SelectItem value="system">Updated News</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </motion.div>
    );
  };
  
  export default FilterSection;