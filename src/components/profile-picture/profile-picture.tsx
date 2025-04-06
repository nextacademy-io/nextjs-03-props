import Image from 'next/image';

export function ProfilePicture(): React.ReactNode {
  const diameter = 100; // In pixels
  const profileUrl = 'https://randomuser.me/api/portraits/men/1.jpg'; // Replace with any URL from https://randomuser.me/photos

  return (
    <div className="profile-picture max-w-fit">
      <Image
        src={profileUrl}
        alt="Profile Picture"
        width={diameter}
        height={diameter}
        className="rounded-full object-cover"
      />
    </div>
  );
}
