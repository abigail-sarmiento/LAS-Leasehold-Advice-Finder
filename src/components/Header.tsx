import leaseLogo from "../assets/lease-logo.svg";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import HeaderNavMenu from "./HeaderNavMenu";

type HeaderProps = {
  onClickGetAdvice: () => void;
};

function Header({ onClickGetAdvice }: HeaderProps) {
  return (
    <>
      <div className="page-width flex min-h-24 items-center justify-between gap-4 py-2">
        <a href="#home" aria-label="Leasehold Advisory Service home">
          <img
            src={leaseLogo}
            alt="Leasehold Advisory Service logo"
            className="block h-full w-48"
          />
        </a>

        <div className="flex gap-3">
          <form className="flex overflow-hidden rounded" role="search">
            <label htmlFor="site-search" className="sr-only">
              Search the site
            </label>
            <Input
              id="site-search"
              type="search"
              placeholder="Search: e.g. section 20"
              aria-label="Search the site"
              className="h-full rounded-l rounded-r-none bg-background"
            />
            <Button
              type="submit"
              variant="secondary"
              aria-label="Submit search"
              className="h-full w-10 rounded-l-none rounded-r border-0"
            >
              <Search aria-hidden="true" />
            </Button>
          </form>
          <Button
            type="button"
            variant="secondary"
            onClick={onClickGetAdvice}
            className="h-full  px-4 py-3 rounded rounded-lg bg-brand-blue-light transition-transform hover:-translate-y-0.5"
          >
            Get advice
          </Button>
        </div>
      </div>
      <div className="bg-brand-blue-deep">
        <div className="page-width">
          <HeaderNavMenu />
        </div>
      </div>
    </>
  );
}

export default Header;
