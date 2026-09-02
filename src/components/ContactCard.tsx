import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

function ContactCard() {
  return (
    <Card className="gap-8 p-6 bg-gradient-to-br from-slate-900 via-sky-950 to-teal-800 text-white ring-1 ring-white/10">
      <CardHeader>
        <h4 className="text-center text-3xl font-bold leading-tight">
          Need extra support? <br />
          Get in touch
        </h4>
      </CardHeader>
      <CardContent className="h-full w-full flex flex-col justify-center items-center gap-8">
        <p className="text-center text-lg leading-relaxed">
          The Leasehold Advisory Service aims to help you as much as we can. If
          you require further guidance, please do not hesitate to reach out to
          us.
        </p>
        <Button
          type="button"
          size="lg"
          className="w-fit mt-auto px-6 py-6 rounded rounded-lg bg-brand-blue-light"
        >
          <a href="https://www.lease-advice.org/about-us/get-in-touch/">
            Contact us
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}

export default ContactCard;
