import { motion } from "framer-motion";
import { slugify } from "@/lib/utils";
import PressReleaseCard from "@/Page-Sections/AboutPageSection/Parts/News/PressReleaseCard";

interface AccountInterface {
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

function AccountContent({items}: { items: AccountInterface[] }) {
  return (
    <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {items.map((item: AccountInterface, index: number) => (
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
            learnMoreLink={`/accounts/${slugify(item.title)}`}
            compareLink={`/compare-account/${slugify(item.title)}`}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default AccountContent;
