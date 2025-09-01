const OurStory = () => {
  return (
    <div className="flex min-h-screen">
      {/* Main Content Area Only */}
      <main className="flex-1 flex flex-col bg-white overflow-hidden">
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-8 lg:p-12">
          {/* Our Story Section */}
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

          {/* Leadership Section */}
          <section id="leadership" className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-800 text-center mb-10">Leadership</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 lg:gap-12 max-w-4xl mx-auto">
              {/* Akshad Mali Card */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-xl shadow-slate-400 p-6 w-full md:w-1/2 lg:w-96 text-center transition-transform hover:scale-105 duration-300 ease-in-out">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                  <svg className="w-16 h-16 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">Akshad Mali</h3>
                <p className="text-blue-600 text-sm mb-4">Founder & CEO</p>
                <p className="text-gray-600 text-sm mb-6">
                  With over a decade of experience in international trade and technology, Akshad founded ExportMentor.AI to bridge the gap
                  between complex export processes and businesses looking to expand globally.
                </p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-gray-500 hover:text-blue-700 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.764 7 2.405v6.83z"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.791-1.574 2.153-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.175-1.553-3.591-1.553-2.719 0-4.925 2.204-4.925 4.927 0 .386.044.76.126 1.121-4.093-.205-7.722-2.16-10.152-5.129-.424.729-.665 1.579-.665 2.482 0 1.714.87 3.22 2.188 4.096-.807-.026-1.566-.246-2.227-.616v.061c0 2.385 1.693 4.375 3.946 4.827-.411.114-.843.174-1.287.174-.317 0-.626-.031-.929-.086.639 1.956 2.493 3.373 4.69 3.413-1.685 1.321-3.806 2.105-6.102 2.105-.39 0-.779-.023-1.16-.069 2.164 1.396 4.757 2.209 7.559 2.209 9.052 0 13.996-7.495 13.996-13.987 0-.21-.005-.42-.013-.629.969-.699 1.815-1.597 2.47-2.615z"></path>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Saloni Tomar Card */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-xl shadow-slate-400 p-6 w-full md:w-1/2 lg:w-96 text-center transition-transform hover:scale-105 duration-300 ease-in-out">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                  <svg className="w-16 h-16 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">Saloni Tomar</h3>
                <p className="text-blue-600 text-sm mb-4">Chief Technology Officer</p>
                <p className="text-gray-600 text-sm mb-6">
                  Saloni brings extensive expertise in AI and machine learning to ExportMentor.AI. Her innovative approach to solving complex
                  trade challenges has been instrumental in developing our core technology.
                </p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-gray-500 hover:text-blue-700 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.764 7 2.405v6.83z"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.08-.731.082-.716.082-.716 1.192.086 1.815 1.29 1.815 1.29 1.056 1.805 2.775 1.284 3.437.979.106-.76.417-1.284.76-1.577-2.645-.295-5.429-1.321-5.429-5.925 0-1.31.469-2.381 1.236-3.22-.124-.296-.534-1.522.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.654 1.654.244 2.88.12 3.176.77.839 1.233 1.91 1.233 3.22 0 4.614-2.783 5.624-5.438 5.91-.44.381-.823.901-.823 1.817v2.66c0 .316.194.693.801.576C20.566 21.808 24 17.302 24 12c0-6.627-5.372-12-12-12z"></path>
                    </svg>
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
