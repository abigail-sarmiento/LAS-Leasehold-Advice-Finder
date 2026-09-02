import { Separator } from "@/components/ui/separator";
import GuidanceCard from "../components/GuidanceCard";
import FeedbackForm from "../components/FeedbackForm";
import ContactCard from "../components/ContactCard";
import { guidanceResources } from "../data/guidanceResources";

function Results() {
  const featuredResources = guidanceResources.slice(0, 3);

  return (
    <section>
      <div className="flex flex-col page-width py-12 md:py-14 gap-12">
        <div>
          <h1 className="text-5xl font-semibold">
            Here's some information that may help
          </h1>
          <p className="mt-6 text-xl">
            Based on what you’ve told us, we’ve found some information and
            guidance that may be relevant to your situation.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-semibold">Relevant guidance</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredResources.map((resource) => (
              <GuidanceCard
                key={`${resource.category}-${resource.title}`}
                category={resource.category}
                title={resource.title}
                description={resource.description}
                href={resource.href}
              />
            ))}
          </div>
        </div>
        <Separator />
        <div className="grid gap-8 grid-cols-2">
          <FeedbackForm />
          <ContactCard />
        </div>
      </div>
    </section>
  );
}

export default Results;
