const steps = [
  {
    number: "1",
    title: "Create Profile",
    description: "Create profile with your product & country",
  },
  {
    number: "2",
    title: "Get Compliance",
    description: "Get compliance checklist & suggestions",
  },
  {
    number: "3",
    title: "Run Checks",
    description: "Run buyer checks & generate documents",
  },
  {
    number: "4",
    title: "Calculate",
    description: "Calculate pricing & check global demand",
  },
  {
    number: "5",
    title: "Get Support",
    description: "Ask AI or find support nearby",
  },
];

export default function HowItWorks() {
  return (
    <div id="about" className="w-full py-10 bg-slate-50">
      <h2 className="text-4xl font-bold items-center place-self-center pb-25 pt-10">
        How ExportMentor.AI Works
      </h2>
      <div className="flex justify-between items-start relative border-t-4 border-slate-300 mx-10">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center w-1/5 relative"
          >
            {/* Circle */}
            <div className="w-15 h-15 flex items-center justify-center rounded-full bg-slate-800 text-slate-50 text-lg font-bold -mt-17 shadow-2xl backdrop-blur-md shadow-slate-500">
              {step.number}
            </div>

            {/* Title */}
            <h3 className="mt-4 text-sm font-semibold text-slate-900">
              {step.title}
            </h3>

            {/* Description */}
            <p className="mt-2 text-xs text-slate-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
