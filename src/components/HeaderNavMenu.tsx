import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const navItems = [
  {
    label: "Leasehold essentials",
    href: "https://www.lease-advice.org/leasehold/",
    items: [
      {
        label: "Leasehold explained",
        href: "https://www.lease-advice.org/leasehold/basics/leasehold/",
      },
      {
        label: "A basic guide to leaseholder rights and responsibilities",
        href: "https://www.lease-advice.org/leasehold/leaseholder-rights-and-responsibilities/",
      },
      {
        label: "Lease variation",
        href: "https://www.lease-advice.org/leasehold/lease-variation/",
      },
      {
        label: "Leasehold reforms explained",
        href: "https://www.lease-advice.org/leasehold/leasehold-reforms/",
      },
      {
        label: "Shared ownership",
        href: "https://www.lease-advice.org/shared-ownership/",
      },
    ],
  },
  {
    label: "Costs and charges",
    href: "https://www.lease-advice.org/costs-and-charges/",
    items: [
      {
        label: "Administration charges",
        href: "https://www.lease-advice.org/costs-and-charges/administration-charges/",
      },
      {
        label: "Ground rent",
        href: "https://www.lease-advice.org/costs-and-charges/ground-rent/",
      },
      {
        label: "Reserve or sinking funds",
        href: "https://www.lease-advice.org/costs-and-charges/reserve-or-sinking-funds/",
      },
      {
        label: "Section 20 consultation",
        href: "https://www.lease-advice.org/costs-and-charges/section-20-consultation/",
      },
      {
        label: "Service charges",
        href: "https://www.lease-advice.org/costs-and-charges/service-charges/",
      },
    ],
  },
  {
    label: "Lease extension",
    href: "https://www.lease-advice.org/lease-extension/",
    items: [
      {
        label: "Lease extension for flats",
        href: "https://www.lease-advice.org/lease-extension/flats/",
      },
      {
        label: "Lease extension for leasehold houses",
        href: "https://www.lease-advice.org/lease-extension/leasehold-houses/",
      },
      {
        label: "Lease extension and leasehold reforms",
        href: "https://www.lease-advice.org/lease-extension/leasehold-reforms/",
      },
    ],
  },
  {
    label: "Buying and selling",
    href: "https://www.lease-advice.org/buying-and-selling/",
    items: [
      {
        label: "Buying and selling a leasehold property",
        href: "https://www.lease-advice.org/buying-and-selling/leasehold-property/",
      },
      {
        label: "Buying the freehold",
        href: "https://www.lease-advice.org/buying-and-selling/buying-the-freehold/",
      },
    ],
  },
  {
    label: "Building management",
    href: "https://www.lease-advice.org/building-management/",
    items: [
      {
        label: "Building insurance for leasehold properties",
        href: "https://www.lease-advice.org/building-management/buildings-insurance/",
      },
      {
        label: "Fire safety",
        href: "https://www.lease-advice.org/building-management/fire-safety/",
      },
      {
        label: "Management of leasehold properties",
        href: "https://www.lease-advice.org/building-management/management/",
      },
      {
        label: "Repairs and maintenance",
        href: "https://www.lease-advice.org/building-management/repairs/",
      },
      {
        label: "Right to manage",
        href: "https://www.lease-advice.org/building-management/right-to-manage/",
      },
      {
        label: "Recognised tenants' associations",
        href: "https://www.lease-advice.org/building-management/recognised-tenants-associations/",
      },
    ],
  },
  {
    label: "Disputes",
    href: "https://www.lease-advice.org/disputes/",
    items: [
      {
        label: "Alternative dispute resolution",
        href: "https://www.lease-advice.org/disputes/alternative-dispute-resolution/",
      },
      {
        label: "Applying to the tribunal",
        href: "https://www.lease-advice.org/disputes/tribunal/",
      },
      {
        label: "Breaching your lease and forfeiture",
        href: "https://www.lease-advice.org/disputes/breaching-your-lease-and-forfeiture/",
      },
      {
        label: "A guide to resolving leasehold disputes",
        href: "https://www.lease-advice.org/disputes/resolving-leasehold-disputes/",
      },
      {
        label: "Redress schemes for complaints about property management",
        href: "https://www.lease-advice.org/disputes/redress-schemes/",
      },
      {
        label: "Using a solicitor",
        href: "https://www.lease-advice.org/disputes/using-a-solicitor/",
      },
    ],
  },
];

function HeaderNavMenu() {
  return (
    <NavigationMenu
      aria-label="Main navigation"
      className="flex min-h-14 justify-start"
      align="start"
    >
      <NavigationMenuList className="flex-wrap justify-start gap-4 py-2 text-white">
        {navItems.map((item) => (
          <NavigationMenuItem key={item.label}>
            <NavigationMenuTrigger className="rounded-none bg-transparent px-0 py-2 text-xs font-bold uppercase tracking-wide text-white/90 transition-colors hover:text-sky-200 hover:bg-transparent focus:bg-transparent data-[state=open]:text-sky-200">
              {item.label}
            </NavigationMenuTrigger>
            <NavigationMenuContent className="min-w-[18rem] bg-white p-2 text-slate-900 shadow-lg ring-1 ring-slate-200">
              <ul className="grid gap-1">
                {item.items.map((subItem) => (
                  <li key={subItem.label}>
                    <NavigationMenuLink
                      href={subItem.href}
                      className="block rounded-md px-3 py-2 text-sm text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100"
                    >
                      {subItem.label}
                    </NavigationMenuLink>
                  </li>
                ))}
                <li>
                  <NavigationMenuLink
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 block rounded-md border-t border-slate-200 px-3 pt-2 text-sm font-semibold text-brand-blue transition-colors hover:bg-slate-100"
                  >
                    View all {item.label.toLowerCase()}
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default HeaderNavMenu;
