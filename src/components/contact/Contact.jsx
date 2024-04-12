export default function Contact() {
  return (
    <div className="flex flex-col text-gray-800 items-center">
      <div className="p-6">
        <h3 className="text-sm font-bold text-fuchsia-500 text-center">
          What is next?
        </h3>
        <h1 className="text-6xl font-bold leading-tight">Get in touch</h1>
      </div>
      <div className="px-6 text-base text-gray-600 max-w-3xl">
        <p className="mb-8 text-center">
          Although I’m currently looking for new opportunities, my inbox is
          always open. Whether you have a question or just want to say hi, I’ll
          try my best to get back to you!
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <a href="mailto:anilozsoy@gmail.com">
          <div className="bg-emerald-500 px-8 py-3 rounded-md text-white">
            Say Hello
          </div>
        </a>
      </div>
    </div>
  );
}
