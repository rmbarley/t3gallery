import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/ad5c4153-c5b1-4701-8d84-7a3ee3191deb-tccc7s.jpg",
  "https://utfs.io/f/f4e7a8fa-6a5e-41a9-837f-9535d8c95172-r64k6c.jpg",
  "https://utfs.io/f/d9c6ed82-6a3d-4e2f-b04b-2950fc12af10-2f98cg.jpg",
  "https://utfs.io/f/51a33f19-2738-4309-a0b0-2ec2254d81fb-p9lavc.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48 p-4">
            <img src={image.url} />
          </div>
        ))}
      </div>
      Gallery in progress
    </main>
  );
}
