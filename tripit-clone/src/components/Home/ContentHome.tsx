interface ContentProps {
  content: {
    img: string;
    title: string;
    description: string;
    link: {
      text: string;
    };
    quotes: {
      content: string;
      author: string;
    };
  };
  index: number; 
}

const ContentHome: React.FC<ContentProps> = ({ content, index }) => {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
      } justify-center mx-auto pb-20 px-4 py-12 md:py-1 lg:py-0 md:px-0`}
    >
      <div className="w-full md:w-1/2 lg:w-1/3 flex justify-center md:justify-start mb-6 md:mb-0">
        <img className="w-full max-w-xs md:max-w-4xl" src={content.img} alt="" />
      </div>

      <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col space-y-4 px-4 md:px-0">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{content.title}</h1>

        <p className="text-lg md:text-xl text-gray-600">{content.description}</p>

        <a href="#" className="text-blue-600 font-semibold hover:underline">
          {content.link.text}
        </a>

        <div className="border-l-4 border-blue-500 pl-4">
          <p className="italic text-gray-700">"{content.quotes.content}"</p>
          <p className="flex-end font-bold text-gray-800 mt-2">- {content.quotes.author}</p>
        </div>
      </div>
    </div>
  );
};

export default ContentHome;
