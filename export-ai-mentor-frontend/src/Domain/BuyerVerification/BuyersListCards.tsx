import { Card, Group, Progress } from "@mantine/core";
import { IconBookmark, IconBrandLinkedinFilled, IconCheck, IconExclamationCircleFilled, IconFileInvoice, IconFlag2Filled, IconHeadset, IconInfoTriangleFilled, IconMailFilled, IconMessageChatbot, IconShip, IconUserPlus, IconWorld } from "@tabler/icons-react";


const BuyersListCards = ({ buyer }: { buyer: any }) => {


  // useEffect(() => {
  //   verifyBuyer(buyer).then((response) => {
  //     setBuyer(response.data);
  //   }).catch((error) => {
  //     console.error("fetching buyer data:", error);
  //   });
  // }, []);

  if (!buyer)
    return (
      <div className="p-6 text-center">
        No buyer data yet. Please verify a buyer.
      </div>
    );

  const {
    companyName,
    websiteUrl,
    email,
    country,
    riskPercent,
    verdictLabel,
    redFlags
  } = buyer;

  const isSafe = riskPercent <= 50;

  return (
    <div className="flex gap-7 items-center justify-center">
      <div className="shadow-2xl shadow-slate-400 backdrop-blur-3xl text-slate-950 rounded-2xl w-fit my-10 flex-col flex justify-center hover:bg-slate-100 hover:translate-y-3 duration-300 transition ease-in-out p-10 bg-slate-50">

        {/* ✅ Header */}
        <div className="flex justify-between items-start p-2">
          <div className="flex items-center gap-2 text-lg font-medium">
            {isSafe ? (
              <IconCheck className="text-green-600 rounded-2xl p-0.5 bg-slate-300" size={30} />
            ) : (
              <IconInfoTriangleFilled className="text-red-600 rounded-2xl p-1 bg-slate-300" size={30} />
            )}
            {isSafe ? "Buyer Verified" : "Buyer May Be Risky"}
          </div>
          <div className="rounded-2xl px-3 text-sm font-extralight bg-slate-200">
            {companyName || "Unknown Company"}
          </div>
        </div>

        {/* ✅ Buyer Details */}
        <div className="grid grid-cols-2 gap-y-5 gap-x-20 mt-4 items-center p-2">
          <div className="p-2 flex gap-2 items-start">
            <IconWorld size={22} className="text-slate-600" />
            <div>
              <div className="text-sm">Website</div>
              <div className="text-sm">{websiteUrl || "Not Provided"}</div>
            </div>
          </div>

          <div className="p-2 flex gap-2 items-start">
            <IconBrandLinkedinFilled size={22} className="text-slate-600" />
            <div>
              <div className="text-sm">Country</div>
              <div className="text-sm">{country || "Not Provided"}</div>
            </div>
          </div>

          <div className="p-2 flex gap-2 items-start">
            <IconMailFilled size={22} className="text-slate-600" />
            <div>
              <div className="text-sm">Email</div>
              <div className="text-sm">{email || "Not Provided"}</div>
            </div>
          </div>

          <div className="p-2 flex gap-2 items-start">
            <IconShip size={22} className="text-slate-600" />
            <div>
              <div className="text-sm">Risk Status</div>
              <div className="text-sm">{isSafe ? "Low Risk ✅" : "High Risk ⛔"}</div>
            </div>
          </div>
        </div>

        {/* ✅ Risk Score + Verdict */}
        <div className="flex grid-cols-2 items-center">
          <div className="flex-col items-center gap-3 p-2 mr-20">
            <div className="px-2">Risk Score</div>
            <div className="flex items-center gap-2 p-2">
              <Progress
                color={isSafe ? "green" : "red"}
                value={riskPercent}
                className="w-40"
              />
              <div>{riskPercent}% Risk ({isSafe ? "Safe" : "High"})</div>
            </div>
          </div>
          <div className="ml-20">
            <div>Confidence Level</div>
            <div>{verdictLabel || "N/A"}</div>
          </div>
        </div>

        {/* ✅ Red Flags */}
        {!isSafe && redFlags && redFlags.length > 0 && (
          <div className="mt-4">
            <Card className="overflow-y-auto items-baseline gap-0.5">
              <div className="bg-slate-100 p-2 w-full">
                <p className="font-medium flex items-center p-1">
                  <IconFlag2Filled /> Red Flag Panel
                </p>
                {redFlags.map((flag: string, i: number) => (
                  <p key={i} className="pl-5 items-center flex gap-2">
                    <IconExclamationCircleFilled size={20} /> {flag}
                  </p>
                ))}
              </div>
            </Card>
          </div>
        )}

        <div>
          {isSafe ? (
            // Safe Buttons
            <Group grow mt="lg" className="[&>button]:flex 
              [&>button]:gap-x-2 
              [&>button]:items-center 
              [&>button]:rounded 
              [&>button]:border 
              [&>button]:border-slate-500 
              [&>button]:px-1 
              [&>button]:py-1 
              [&>button]:shadow-sm 
              [&>button]:shadow-slate-400 
              [&>button]:backdrop-blur-sm
              [&>button]:hover:bg-slate-200">
              <button><IconUserPlus size={20} /> Save to Contacts</button>
              <button><IconFileInvoice size={20} /> Generate Invoice</button>
              <button><IconMessageChatbot size={20} /> Ask Mentor Opinion</button>
            </Group>
          ) : (
            // Unsafe Buttons
            <Group grow mt="lg" className="[&>button]:flex 
              [&>button]:gap-x-2 
              [&>button]:items-center 
              [&>button]:rounded 
              [&>button]:border 
              [&>button]:border-slate-500 
              [&>button]:px-1
              [&>button]:py-1 
              [&>button]:shadow-sm 
              [&>button]:shadow-slate-400 
              [&>button]:backdrop-blur-sm
              [&>button]:hover:bg-slate-200">
              <button><IconHeadset size={20} /> Request Help</button>
              <button><IconBookmark size={20} /> Save for Review</button>
              <button className="flex w-100"><IconExclamationCircleFilled size={20} />Report Suspicious Buyer</button>
            </Group>
          )}
        </div>
      </div>
    </div>
  );
};

export default BuyersListCards; 