import Link from 'next/link'
 
export default function NotFound() {
  return (
    <main className="flex flex-col justify-center items-center gap-1 flex-1 text-[#75809b]">
        <span className=" text-4xl font-medium">File not found!</span>
        <span className=" text-lg">Click <Link href="/" className=" underline">here</Link> to get back.</span>
    </main>
  )
}