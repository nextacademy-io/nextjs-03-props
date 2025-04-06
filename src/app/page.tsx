'use client';

import { ProfilePicture } from '@/components/profile-picture';

export default function Home() {
  return (
    <main className="p-24 flex flex-col gap-8">
      <h1 className="text-3xl font-bold underline">Hello, Workshop</h1>
      <ProfilePicture />
    </main>
  );
}
