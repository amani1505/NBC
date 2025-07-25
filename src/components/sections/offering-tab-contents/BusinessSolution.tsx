import { slugify } from '@/lib/utils';
import PressReleaseCard from '@/Page-Sections/AboutPageSection/Parts/News/PressReleaseCard';
import { motion } from 'framer-motion';

interface BusinessSolutionInterface {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
  featured?: boolean;
  href: string;
  compareLink: string;
}

function BusinessSolutionContent({items}: { items: BusinessSolutionInterface[] }) {
return (
    <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {items.map((item: BusinessSolutionInterface, index: number) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
        >
          <PressReleaseCard
            image={item?.image}
            title={item?.title}
            description={item?.description}
            learnMoreLink={`/way-to-bank/${slugify(item.title)}`}
          
          />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default BusinessSolutionContent
