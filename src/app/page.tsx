// src/app/page.tsx
export default function Home() {
  return (
    <section className="relative h-screen bg-[url('/homepage2.png')] bg-cover bg-center">

      {/* Container for the welcome text */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-4xl font-bold text-white text-center">
          Velkommen til Kjøkkenet Kafe & Delikatesse
        </h1>
      </div>
    </section>
  );
}