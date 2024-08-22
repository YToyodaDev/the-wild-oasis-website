import LoginMessage from "@/app/_components/LoginMessage";
import { auth } from "@/app/_lib/auth";
import Link from "next/link";

export default async function Navigation() {
  const session = await auth();

  console.log(session);
  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link
            href="/cabins"
            className="hover:text-accent-400 transition-colors"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          {session?.user?.image ? (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors flex items-center gap-4"
            >
              <img
                className="h-8 rounded-full"
                src={session.user.image}
                alt={session.user.name}
                referrerPolicy="no-referrer"
              />
              <span>Guest area</span>
            </Link>
          ) : (
            <Link
              href="/api/auth/signin"
              className="hover:text-accent-400 transition-colors flex items-center gap-4"
            >
              <span>Log in</span>
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
