import { useParams } from "react-router-dom";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { deslugify } from "@/lib/utils";
import SingleNewsPageSection from "@/Page-Sections/SingleNewsPageSection"

function SingleNews() {
  const { newsName } = useParams();
  const readableTitle = newsName ? deslugify(newsName) : "News & Insight";

  useDocumentTitle(`NBC | ${readableTitle}`);



  return (
  <>
  <SingleNewsPageSection />
  </>
  )
}

export default SingleNews
