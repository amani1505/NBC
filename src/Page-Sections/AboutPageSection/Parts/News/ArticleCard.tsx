interface ArticleCardProps {
    image: string;
    date: string;
    title: string;
    description: string;
    badgeText?: string;
  }
  
  const ArticleCard = ({ image, date, title, description, badgeText }: ArticleCardProps) => {
    return (
      <div className="bg-white p-2 mb-4 border rounded-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 inline-block">
        <img src={image} alt={title} className="w-full h-32 object-cover mb-2" />
        <div className="text-sm text-gray-500">{date} {badgeText && <span>{badgeText}</span>}</div>
        <h3 className="text-md font-semibold">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    );
  };
  
  export default ArticleCard;