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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            vulputate semper vulputate. Donec tincidunt nisl vitae molestie
            aliquam. Integer ex odio, molestie a aliquet nec, efficitur ut
            libero. Vestibulum sed justo purus. Proin id lacus vulputate libero
            feugiat egestas. Sed dictum nibh vitae neque mollis, eu aliquet
            nulla facilisis. Suspendisse pulvinar dolor id lacus rutrum
            elementum. Vestibulum molestie enim et nulla ullamcorper, nec
            lobortis felis varius. Nullam dignissim posuere rutrum. Cras et
            vulputate nunc. Mauris convallis velit quis elit scelerisque, quis
            mattis odio sodales. Aliquam mollis justo turpis, ac faucibus lorem
            hendrerit et. Donec vestibulum nibh ornare nibh pretium viverra.
            Cras facilisis massa eget risus bibendum lobortis. Vivamus varius
            pellentesque vestibulum. Aenean in pretium felis. Etiam vitae neque
            quis quam accumsan elementum semper ac turpis. Ut dignissim, lacus
            in tincidunt dictum, urna risus tincidunt mauris, nec sagittis est
            lorem pretium ligula. Pellentesque habitant morbi tristique senectus
            et netus et malesuada fames ac turpis egestas. Aliquam lobortis
            auctor vehicula.
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
