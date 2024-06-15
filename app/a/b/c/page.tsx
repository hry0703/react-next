import { usePathname } from 'next/navigation';
export default function Home() {  
     const pathname = usePathname();
     console.log(pathname);
     
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        hello,this is c
    </main>
  );
}
