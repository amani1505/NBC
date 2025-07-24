import RecentProductSection, {
  type Product,
} from "@/components/sections/RecentProductSection";

function SingleNewsPageSection() {
  const recentNews: Product[] = [
    {
      id: "1",
      title: "Effective product marketing techniques for small businesses",
      description:
        "Explore cost-effective marketing strategies to promote your product busi...",
      image: "/images/recent-product.jpg",
      buttonText: "Learn more",
    },
    {
      id: "2",
      title: "Digital transformation strategies for modern enterprises",
      description:
        "Discover how to leverage technology to streamline your business operations...",
      image: "/images/recent-product.jpg",
      buttonText: "Explore now",
    },
    {
      id: "3",
      title: "Customer retention best practices",
      description:
        "Learn proven techniques to keep your customers engaged and loyal...",
      image: "/images/recent-product.jpg",
      buttonText: "Get started",
    },
    {
      id: "4",
      title: "Social media marketing mastery",
      description:
        "Master the art of social media marketing to grow your online presence...",
      image: "/images/recent-product.jpg",
      buttonText: "Learn more",
    },
    {
      id: "5",
      title: "Email marketing automation",
      description:
        "Automate your email campaigns for better engagement and conversions...",
      image: "/images/recent-product.jpg",
      buttonText: "Discover",
    },
  ];

  return (
    <>
      <div className="h-[100vh] relative">
        <div className="h-[60vh] bg-nbc-dark-700 ">
          <div className="flex flex-col  items-center h-full  container mx-auto pt-10 ">
            <div className=" w-1/2 text-center">
              <h1 className="text-[48px] text-white font-semibold">
                Streamline your project management with protask
              </h1>
            </div>
            <div className="text-center mt-4 text-white text-[18px]">
              <p>Stay ahead of the curve with our latest blog releases</p>
            </div>
            <div className=" mt-4 text-white text-[18px] flex gap-3 items-center">
              <div>
                <img
                  src="/images/author.png"
                  alt=""
                  className="h-16 w-16 rounded-full"
                />
              </div>
              <div>
                <h1 className="font-[600]">Breanna Butler</h1>
                <p className="text-sm">Project Manager</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[40vh] ">
          <div className="flex justify-center absolute top-[68%] left-1/2 -translate-x-1/2 -translate-y-1/2 ">
            <div>
              <img src="/images/single-news.jpg" alt="" className="w-[90%]" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-10 max-w-[70rem]">
        <h1 className="text-xl sm:text-3xl lg:text-3xl font-bold  mb-2 sm:mb-4 leading-tight sm:leading-snug lg:leading-normal text-nbc-dark-950">
          Introduction
        </h1>
        <div className=" text-gray-700 mb-6 space-y-5 ">
          <p>
            In the fast-paced world of project management, staying organized,
            collaborative, and efficient is vital. Yet, many teams continue to
            struggle with disjointed tools, missed deadlines, and communication
            bottlenecks. That's where ProTask comes in. Our all-in-one project
            management solution is designed to revolutionize the way your team
            works, making collaboration a breeze and boosting productivity.
          </p>
          <p>
            Regrettably, numerous teams grapple with the persistent challenges
            of working with fragmented tools that hamper cohesion, missing
            critical deadlines that disrupt project trajectories, and enduring
            the frustration of communication bottlenecks that impede the flow of
            ideas and decisions. This is where ProTask emerges as the beacon of
            hope and change.
          </p>
          <div>
            <img src="/images/news-2.jpg" alt="" className="rounded-lg" />
            <p className="mt-2 ">Photo by LinkedIn Sales Navigator</p>
          </div>
          <p>
            Our all-encompassing project management solution is meticulously
            crafted to transcend the limitations that have long plagued project
            teams, offering a transformative approach that turns collaboration
            into an effortless synergy and elevates productivity to new heights.
          </p>

          <div className="border-l-2 border-gray-400 pl-4 ">
            <p className="text-xl font-semibold italic">
              "The product's remarkable flexibility and customization options
              have seamlessly aligned with our unique needs. It's like it was
              tailor-made for our specific requirements. Our efficiency and
              productivity have soared since adopting it."
            </p>
            <p className="mt-4">Breanna Butler, Project Manager</p>
          </div>

          <p>
            With ProTask at your disposal, collaboration flows effortlessly, and
            productivity reaches new zeniths. It's not merely a tool; it's a
            catalyst for innovation, a driving force behind your team's
            triumphant journey through the intricacies of modern project
            management.
          </p>
          <div>
            <h1 className="text-lg sm:text-2xl lg:text-2xl font-bold  mb-2 sm:mb-4 leading-tight sm:leading-snug lg:leading-normal ">
              The challenges of traditional project management
            </h1>
            <div className="space-y-4">
              <p>
                Navigating the traditional project management landscape can
                often feel like a Herculean task, riddled with multifarious
                challenges that seem to mount at every turn. The reliance on an
                array of tools and spreadsheets scattered across various
                platforms, coupled with the endless labyrinth of email threads,
                exacerbates the already complex process of project coordination.
              </p>
              <p>
                As the chaos intensifies, so too do the repercussions, cascading
                like a domino effect: missed deadlines become the norm, team
                members grapple with mounting frustration, and the overall
                quality of projects suffers an alarming decline. It's a
                conundrum that haunts many teams and organizations, leaving them
                yearning for a solution that can bring order to the chaos and
                restore efficiency and quality to project management processes
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-lg sm:text-2xl lg:text-2xl font-bold  mb-2 sm:mb-4 leading-tight sm:leading-snug lg:leading-normal ">
              Introducing protask: Your project management game changer
            </h1>
            <div className="space-y-4">
              <p>
                ProTask transcends the boundaries of a mere project management
                tool; it serves as a vibrant and interactive workspace,
                fostering a sense of unity and shared purpose among team
                members. Within the digital realm of ProTask, you'll discover a
                treasure trove of features that elevate your team's
                collaborative potential to unprecedented heights.
              </p>
              <p>
                With real-time collaboration seamlessly integrated into the
                platform, your team members can effortlessly synchronize their
                efforts, bridging geographical divides and enhancing their
                collective productivity.
              </p>
            </div>
          </div>
          <div>
            <img src="/images/news-3.jpg" alt="" className="rounded-lg" />
            <p className="mt-2 ">Photo by LinkedIn Sales Navigator</p>
          </div>

          <div>
            <h1 className="text-lg sm:text-2xl lg:text-2xl font-bold  mb-2 sm:mb-4 leading-tight sm:leading-snug lg:leading-normal">
              Key benefits and features
            </h1>
            <ul className="list-decimal pl-5 space-y-2">
              <li>
                Visualize the progress of tasks at a glance. No more sifting
                through endless spreadsheets.
              </li>
              <li>
                Chat, comment, and collaborate on tasks without leaving the
                platform.
              </li>
              <li>
                Tailor ProTask to your team's unique needs. No one-size-fits-all
                solutions here.
              </li>
              <li>
                Share and store project documents within ProTask for easy
                access.
              </li>
              <li>
                Keep track of project deadlines with seamless calendar
                integration.
              </li>
            </ul>
          </div>

          <div>
            <h1 className="text-lg sm:text-2xl lg:text-2xl font-bold  mb-2 sm:mb-4 leading-tight sm:leading-snug lg:leading-normal">
              Conclusion
            </h1>
            <div className="space-y-4">
              <p>
                In ProTask, you'll find the solution to those persistent project
                management challenges that have been impeding your team's
                progress. This comprehensive tool, equipped with an intuitive
                interface and an array of robust features, is the ultimate
                catalyst for change in project management. It's time to leave
                behind the constraints of the past and embrace a future of
                enhanced productivity and efficiency.
              </p>
              <p>
                ProTask empowers your team to reshape the way you work, ensuring
                that deadlines are met, communication flows seamlessly, and
                projects are delivered at the highest quality. With its
                adaptable pricing model, it grows with your needs, making it
                accessible to teams of all sizes. Now is the moment to take
                action, to transform your approach to project management, and to
                reach new heights of productivity with ProTask by your side
              </p>
            </div>
          </div>
        </div>
      </div>

      <RecentProductSection title="Related news" products={recentNews} />
    </>
  );
}

export default SingleNewsPageSection;
