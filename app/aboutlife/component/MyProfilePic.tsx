import Image from "next/image";

export default function MyProfilePic() {
  return (
    <section className="w-full mx-auth">
      <Image
        className="border-4 border-black rounded-full mx-auto mt-8"
        src={`/images/small.jpg`}
        width={`200`}
        height={`200`}
        alt="Aniede David"
        priority={true}
      />
    </section>
  );
}
