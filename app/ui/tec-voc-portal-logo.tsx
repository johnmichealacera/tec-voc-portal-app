import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default async function TecVocPortalLogo() {

  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white w-80 md:w-80 lg:w-48`}
    >
      <Image
        src="/bgfc-logo-Photoroom.png"
        width={50}
        height={50}
        className="h-12 w-12 md:h-16 md:w-16"
        alt="BGFC logo"
      />
      <p className="text-[40px]">TecVoc Portal</p>
    </div>
  );
}
