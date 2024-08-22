import SideNavigation from "@/app/_components/SideNavigation";

export const metadata = {
  title: "Account",
};

export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-[16rem_1fr] h-full gap-12">
      <div>
        <SideNavigation />
      </div>
      <div className="py-1">{children}</div>
    </div>
  );
}
