import SolutionCard from "./SolutionCard"
import { motion } from 'framer-motion';

function PersonalSolution() {
  const solutions = [
    {
      id: "1",
      title: "NBC Bank Honors Yanga SC as 2024/25 NBC Premier League Champions",
      description:
        "Yesterday, we proudly handed over the 2024/25 NBC Premier League trophy to Young Africans SC after their",
      image: "/images/news1.jpg",
      category: "CUSTOMER STORIES",
      date: "Continue Reading →",
    },
    {
      id: "2",
      title: "NBC and GSM Partner",
      description: "Learn the essential steps to turn your product idea",
      image: "/images/news2.jpg",
      category: "INVESTMENT",
      date: "Continue Reading →",
      featured: false,
    },
    {
      id: "3",
      title: "Mbogo Ranches & NBC",
      description: "Learn valuable techniques and strategies to manage",
      image: "/images/news3.jpg",
      category: "",
      date: "Continue Reading →",
      featured: false,
    },
    {
      id: "4",
      title: "NBC Bank Presents BMW X1 Car Prize to Winner of ",
      description: "Learn valuable techniques and strategies to manage",
      image: "/images/news4.jpg",
      category: "BEYOND BANKING",
      date: "Continue Reading →",
      featured: false,
    },
  ];






  return (
    <motion.div 
    key="personal"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    
    
    className="grid grid-cols-3 gap-5">{
      solutions.map((solution) => (
        <SolutionCard
          key={solution.id}
          image={solution.image}
          title={solution.title}
          description={solution.description}
        />
      ))
      
      }
  
    </motion.div>
  )
}

export default PersonalSolution
