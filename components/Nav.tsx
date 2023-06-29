'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  signIn,
  signOut,
  useSession,
  getProviders,
  LiteralUnion,
  ClientSafeProvider,
} from 'next-auth/react';
import { BuiltInProviderType } from 'next-auth/providers';
import { Skeleton } from './ui/skeleton';
// import '@/styles/global.css';

const Nav = () => {
  const { data: session } = useSession();
  let img = '';
  if (session) {
    // @ts-expect-error
    img = session.image;
  }

  const [providers, setProviders] = useState<Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null>(null);

  const [toggleDropdown, setDropdown] = useState(false);

  useEffect(() => {
    const setUpProvider = async () => {
      const response = await getProviders();

      setProviders(response);
    };
    setUpProvider();
  }, []);

  const signOutHandler = () => {
    signOut();
  };
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/prompt-ocean-full-logo.svg"
          alt="logo"
          width={150}
          height={40}
          className="object-contain"
        />
      </Link>
      {/* desctop nav */}
      <div className="sm:flex hidden">
        {session ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Prompt
            </Link>
            <button
              type="button"
              onClick={signOutHandler}
              className="outline_btn"
            >
              Sign Out
            </button>
            <Link href="/profile">
              <Image
                src={img}
                alt="profile-icon"
                width={45}
                height={45}
                className="rounded-full"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers ? (
              Object.values(providers).map((provider) => {
                return (
                  <button
                    type="button"
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className="black_btn"
                  >
                    Sign In
                  </button>
                );
              })
            ) : (
              <>
                <Skeleton className="h-[45px] w-[45px]  bg-slate-300 rounded-full ml-3" />
              </>
            )}
          </>
        )}
      </div>

      {/* mobile nav */}
      <div className="sm:hidden flex relative">
        {session ? (
          <div className="flex">
            <Image
              src={img}
              alt="profile-icon"
              width={45}
              height={45}
              className="rounded-full"
              onClick={() => setDropdown((s) => !s)}
            />

            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={() => setDropdown(false)}
                >
                  Add Prompt
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setDropdown(false);
                    signOut();
                  }}
                  className="mt-5 w-full black_btn"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers ? (
              Object.values(providers).map((provider) => {
                return (
                  <button
                    type="button"
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className="black_btn"
                  >
                    Sign In
                  </button>
                );
              })
            ) : (
              <>
                <Skeleton className="h-[45px] w-[45px]  bg-slate-300 rounded-full ml-3" />
              </>
            )}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
