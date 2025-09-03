import { IconBrandLinkedin, IconBrandTwitter, IconCircleLetterS, IconCircleLetterA } from '@tabler/icons-react';

const OurStory = () => {
  return (
    <div className="flex min-h-screen">
      <main className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto p-8 lg:p-12">
          <section id="our-story" className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-800 text-center mb-10">Our Story</h2>
            <div className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-700 space-y-6">
                <p>
                ExportMentor.AI was founded with a mission to simplify global trade for businesses of all sizes. After witnessing the complexity of export regulations and market entry, founder <strong>Akshad Mall</strong> set out to build an AI-powered solution that removes the barriers to international growth.
                </p>
                <p>
                Joined by <strong>Saloni Tomar</strong>, our <strong>Chief Technology Officer</strong> and AI expert, the team developed a platform that transforms export challenges into opportunities—through automation, compliance support, and real-time trade intelligence.
                </p>
                <p>
                Today, ExportMentor.AI empowers businesses worldwide to navigate international markets with confidence, speed, and simplicity.
                </p>

            </div>
          </section>

          {/** Leadership Section */}
          <section id="leadership" className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-800 text-center mb-10">Leadership</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 lg:gap-12 max-w-4xl mx-auto">

              {/* Akshad Mali Card */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-xl shadow-slate-400 p-6 w-full md:w-1/2 lg:w-96 text-center transition-transform hover:scale-105 duration-300 ease-in-out">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-slate-200 flex items-center justify-center overflow-hidden">
                  <IconCircleLetterA size={45} stroke={2} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-1">Akshad Mali</h3>
                <p className="text-slate-950 text-sm mb-4">Founder & CEO</p>
                <p className="text-slate-800 text-sm mb-6">
                  With over a decade of experience in international trade and technology, Akshad founded ExportMentor.AI to bridge the gap
                  between complex export processes and businesses looking to expand globally.
                </p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-gray-500 hover:text-slate-900 transition-colors">
                    <IconBrandLinkedin size={27} stroke={2} />
                  </a>
                
                  <a href="#" className="text-gray-500 hover:text-slate-900 transition-colors">
                    <IconBrandTwitter size={27} stroke={2} />
                  </a>
                </div>
              </div>

              {/* Saloni Tomar Card */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-xl shadow-slate-400 p-6 w-full md:w-1/2 lg:w-96 text-center transition-transform hover:scale-105 duration-300 ease-in-out">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-slate-200 flex items-center justify-center overflow-hidden">
                  <IconCircleLetterS size={45} stroke={2} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-1">Saloni Tomar</h3>
                <p className="text-slate-950 text-sm mb-4">Chief Technology Officer</p>
                <p className="text-slate-800 text-sm mb-6">
                  Saloni brings extensive expertise in AI and machine learning to ExportMentor.AI. Her innovative approach to solving complex
                  trade challenges has been instrumental in developing our core technology.
                </p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-gray-500 hover:text-slate-900 transition-colors">
                    <IconBrandLinkedin size={27} stroke={2} />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-slate-900 transition-colors">
                    <IconBrandTwitter size={27} stroke={2} />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default OurStory;
