type Document = { name: string }; // Adjust fields as needed

type DocumentCardProps = {
  title: string;
  documents: Document[];
};

function DocumentCard({ title, documents }: DocumentCardProps) {
  return (
    <div className="shadow rounded-lg  p-5 border  border-gray-300">
      <h1 className="text-xl sm:text-lg lg:text-xl font-bold  mb-2 sm:mb-4 leading-tight sm:leading-snug lg:leading-normal">{title}</h1>
      <div>
        {documents?.map((document, index) => {
          return (
            <div className='flex items-center gap-4 space-y-2' key={index}>
              <img src="/images/pdf.svg" alt="" className="h-7 w-7" />
              <p>{document.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default DocumentCard
