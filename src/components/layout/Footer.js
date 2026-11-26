export default function Footer() {
  return (
    <footer className="px-8 sm:px-20 py-16 border-t border-zinc-200 dark:border-zinc-800">
      <div className="flex flex-col sm:flex-row justify-between gap-8">
        <div>
          <p className="font-bitcount text-2xl font-semibold tracking-wider uppercase">
            Arham
          </p>
          <p className="text-sm opacity-60 mt-2 max-w-xs">
            Building things on the internet. Sometimes they even work.
          </p>
        </div>

        <div className="flex flex-col sm:items-end gap-2 text-sm">
          <a href="mailto:YOUR_EMAIL@gmail.com" className="hover:underline">
            YOUR_EMAIL@gmail.com
          </a>
          <a
            href="https://github.com/FrozenAlgo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/YOUR_LINKEDIN"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <p className="text-xs opacity-40 mt-12">
        © 2026 · Made with questionable decisions and lots of coffee
      </p>
    </footer>
  );
}
