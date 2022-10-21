import { useAtom } from "jotai";
import { isElectronAtom } from "../../lib/store";

interface DefaultTemplateProps {
  children: React.ReactNode;
}

export function DefaultTemplate({
  children,
}: DefaultTemplateProps) {
  const [isElectron] = useAtom(isElectronAtom)

  return (
    <div className="grid place-items-center h-screen">
      {children}
      { !isElectron && <div className="fixed bottom-1 left-1 flex items-center gap-4">
        <div>
          Download Studio:
        </div>
        <a href="https://github.com/avastjs/livecode-sessions-desktop/raw/78410df0bfb4a4724c0dda1ad5c9b53d736663f2/out/make/zip/darwin/x64/livecode-session-studio-darwin-x64-1.0.0.zip" target="_blank">
          <img src="/mac.png" className="w-8" />
        </a>
        <a href="" target="_blank">
          <img src="/win.png" className="w-10 h-10" />
        </a>
      </div> }
    </div>
  );
}
