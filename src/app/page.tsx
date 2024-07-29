
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white text-black">
      <div className="flex justify-between items-center px-10 py-5 w-full">
        <div className="flex items-center">
          <h1 className="text-4xl font-light">
            Gradyn Nagle
          </h1>
        </div>
        <div className="flex items-center">
          <p className="text-base px-5">About</p>
          <p className="text-base px-5">Blog</p>
          <p className="text-base px-5">Contact</p>
        </div>
      </div>
    </main>
  );
}
