import { Button } from "@/components/ui/button";
import { BookOpenText, Form, MessageCircleMore } from "lucide-react";
import HowItWorksStep from "../components/HowItWorksStep";

function Home() {
  return (
    <section>
      <div className="py-12 md:py-14 bg-brand-blue-light">
        <div className="flex flex-col items-center page-width gap-12">
          <h1 className="max-w-3xl text-5xl text-center font-sans font-bold">
            Get free, government funded advice for a problem with your leasehold
            property
          </h1>
          <Button
            type="button"
            size="lg"
            className="w-fit rounded px-6 py-6 text-xl font-bold"
          >
            Get started
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-center page-width gap-12 py-12 md:py-14">
        <h2 className="text-4xl text-center font-sans font-bold">
          How it works
        </h2>
        <div className="flex">
          <HowItWorksStep
            number={1}
            icon={MessageCircleMore}
            title="Tell us what's happening"
            description="Pick from one of the given scenarios or tell us in your own words what your looking for advice on"
          />
          <HowItWorksStep
            number={2}
            icon={Form}
            title="Answer a few questions"
            description="We'll ask a few simple questions to understand your situation."
          />
          <HowItWorksStep
            number={3}
            icon={BookOpenText}
            title="Find your next step"
            description="Get clear information on what you can do next."
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
