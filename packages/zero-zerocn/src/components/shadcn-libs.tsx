"use client";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Lib = {
  name: string;
  docsUrl: string;
  repoUrl?: string | null | undefined;
  isPaid?: boolean | null | undefined;
  stars?: number;
};

export const ShadcnLibs: Lib[] = [
  {
    name: "@zero",
    docsUrl: "https://zerocn.zeroopensource.org",
    repoUrl: "https://github.com/zeroopensource/zero-zerocn",
    isPaid: false,
  },
  {
    name: "@8bitcn",
    docsUrl: "https://www.8bitcn.com",
    repoUrl: "https://github.com/TheOrcDev/8bitcn-ui",
    isPaid: false,
  },
  {
    name: "@8starlabs-ui",
    docsUrl: "https://ui.8starlabs.com",
    repoUrl: "https://github.com/8starlabs/ui",
    isPaid: false,
  },
  {
    name: "@97cn",
    docsUrl: "https://97cn.itzik.co",
    repoUrl: "https://github.com/PatentLobster/97cn",
    isPaid: false,
  },
  {
    name: "@abui",
    docsUrl: "https://abui.io",
    repoUrl: "https://github.com/antoniobrandao/abui",
    isPaid: false,
  },
  {
    name: "@abstract",
    docsUrl: "https://build.abs.xyz",
    repoUrl: "https://github.com/jarrodwatts/agw-reusables",
    isPaid: false,
  },
  {
    name: "@aceternity",
    docsUrl: "https://ui.aceternity.com",
    repoUrl: null,
    isPaid: true,
  },
  {
    name: "@agents-ui",
    docsUrl: "https://livekit.io/ui",
    repoUrl: null,
    isPaid: true,
  },
  {
    name: "@aevr",
    docsUrl: "https://ui.aevr.space",
    repoUrl: "https://github.com/aevrhq/ui",
    isPaid: false,
  },
  {
    name: "@ai-blocks [Deprecated?]",
    docsUrl: "https://webllm.org/blocks",
    repoUrl: null,
    isPaid: null,
  },
  {
    name: "@ai-elements",
    docsUrl: "https://ai-sdk.dev/elements",
    repoUrl: "https://github.com/vercel/ai",
    isPaid: false,
  },
  {
    name: "@algolia",
    docsUrl: "https://sitesearch.algolia.com",
    repoUrl: "https://github.com/algolia/sitesearch",
    isPaid: false,
  },
  {
    name: "@aliimam",
    docsUrl: "https://aliimam.in",
    repoUrl: null,
    isPaid: true,
  },
  {
    name: "@animate-ui",
    docsUrl: "https://animate-ui.com",
    repoUrl: "https://github.com/imskyleen/animate-ui",
    isPaid: false,
  },
  {
    name: "@assistant-ui",
    docsUrl: "https://www.assistant-ui.com",
    repoUrl: "https://github.com/assistant-ui/assistant-ui",
    isPaid: false,
  },
  {
    name: "@better-upload",
    docsUrl: "https://better-upload.com",
    repoUrl: "https://github.com/Nic13Gamer/better-upload",
    isPaid: false,
  },
  {
    name: "@basecn",
    docsUrl: "https://basecn.dev",
    repoUrl: "https://github.com/akash3444/basecn",
    isPaid: false,
  },
  {
    name: "@billingsdk",
    docsUrl: "https://billingsdk.com",
    repoUrl: "https://github.com/dodopayments/billingsdk",
    isPaid: false,
  },
  {
    name: "@blocks",
    docsUrl: "https://blocks.so",
    repoUrl: "https://github.com/ephraimduncan/blocks",
    isPaid: false,
  },
  {
    name: "@cardcn",
    docsUrl: "https://cardcn.dev",
    repoUrl: "https://github.com/Ali-Hussein-dev/cardcn",
    isPaid: false,
  },
  {
    name: "@clerk",
    docsUrl: "https://clerk.com/docs/guides/development/shadcn-cli",
    repoUrl: null,
    isPaid: null,
  },
  {
    name: "@commercn",
    docsUrl: "https://commercn.com",
    repoUrl: "https://github.com/Logging-Studio/Commercne",
    isPaid: false,
  },
  { name: "@coss", docsUrl: "https://coss.com/ui" },
  { name: "@creative-tim", docsUrl: "https://www.creative-tim.com/ui" },
  { name: "@cult-ui", docsUrl: "https://www.cult-ui.com" },
  { name: "@diceui", docsUrl: "https://www.diceui.com" },
  { name: "@doras-ui", docsUrl: "https://ui.doras.to" },
  { name: "@elements", docsUrl: "https://www.tryelements.dev" },
  { name: "@elevenlabs-ui", docsUrl: "https://ui.elevenlabs.io" },
  { name: "@efferd", docsUrl: "https://efferd.com" },
  { name: "@einui", docsUrl: "https://ui.eindev.ir" },
  { name: "@eldoraui", docsUrl: "https://eldoraui.site" },
  { name: "@formcn", docsUrl: "https://formcn.dev" },
  { name: "@gaia", docsUrl: "https://ui.heygaia.io" },
  { name: "@glass-ui", docsUrl: "https://glass-ui.crenspire.com" },
  { name: "@ha-components", docsUrl: "https://hacomponents.keshuac.com" },
  { name: "@hextaui", docsUrl: "https://hextaui.com" },
  { name: "@hooks", docsUrl: "https://shadcn-hooks.vercel.app" },
  { name: "@intentui", docsUrl: "https://intentui.com" },
  { name: "@kibo-ui", docsUrl: "https://www.kibo-ui.com" },
  { name: "@kanpeki", docsUrl: "https://kanpeki.vercel.app" },
  { name: "@kokonutui", docsUrl: "https://kokonutui.com" },
  { name: "@lens-blocks", docsUrl: "https://lensblocks.com" },
  { name: "@limeplay", docsUrl: "https://limeplay.winoffrg.dev" },
  { name: "@lucide-animated", docsUrl: "https://lucide-animated.com" },
  { name: "@lytenyte", docsUrl: "https://www.1771technologies.com" },
  { name: "@magicui", docsUrl: "https://magicui.design" },
  { name: "@manifest", docsUrl: "https://ui.manifest.build" },
  { name: "@mui-treasury", docsUrl: "https://www.mui-treasury.com" },
  { name: "@moleculeui", docsUrl: "https://www.moleculeui.design" },
  { name: "@motion-primitives", docsUrl: "https://www.motion-primitives.com" },
  { name: "@ncdai", docsUrl: "https://chanhdai.com/components" },
  { name: "@nuqs", docsUrl: "https://nuqs.dev/registry" },
  {
    name: "@nexus-elements",
    docsUrl: "https://elements.nexus.availproject.org",
  },
  { name: "@optics", docsUrl: "https://optics.agusmayol.com.ar" },
  { name: "@oui", docsUrl: "https://oui.mw10013.workers.dev" },
  { name: "@paceui", docsUrl: "https://ui.paceui.com" },
  { name: "@paykit-sdk", docsUrl: "https://www.usepaykit.dev" },
  { name: "@plate", docsUrl: "https://platejs.org" },
  { name: "@prompt-kit", docsUrl: "https://www.prompt-kit.com" },
  { name: "@prosekit", docsUrl: "https://prosekit.dev" },
  { name: "@phucbm", docsUrl: "https://ui.phucbm.com" },
  { name: "@react-aria", docsUrl: "https://react-aria.adobe.com" },
  { name: "@react-bits", docsUrl: "https://reactbits.dev" },
  { name: "@retroui", docsUrl: "https://retroui.dev" },
  { name: "@reui", docsUrl: "https://reui.io" },
  { name: "@scrollxui", docsUrl: "https://www.scrollxui.dev" },
  { name: "@square-ui", docsUrl: "https://square.lndev.me" },
  { name: "@systaliko-ui", docsUrl: "https://systaliko-ui.vercel.app" },
  { name: "@roiui", docsUrl: "https://roiui.com" },
  { name: "@solaceui", docsUrl: "https://www.solaceui.com" },
  { name: "@shadcnblocks", docsUrl: "https://shadcnblocks.com" },
  { name: "@shadcndesign", docsUrl: "https://www.shadcndesign.com" },
  { name: "@shadcn-map", docsUrl: "https://shadcn-map.vercel.app" },
  { name: "@shadcn-studio", docsUrl: "https://shadcnstudio.com" },
  { name: "@shadcn-editor", docsUrl: "https://shadcn-editor.vercel.app" },
  { name: "@shadcnui-blocks", docsUrl: "https://shadcnui-blocks.com" },
  { name: "@shadcraft", docsUrl: "https://shadcraft-free.vercel.app" },
  { name: "@smoothui", docsUrl: "https://smoothui.dev" },
  { name: "@spectrumui", docsUrl: "https://ui.spectrumhq.in" },
  { name: "@supabase", docsUrl: "https://supabase.com/ui" },
  { name: "@svgl", docsUrl: "https://svgl.app" },
  { name: "@tailark", docsUrl: "https://tailark.com" },
  { name: "@taki", docsUrl: "https://taki-ui.com" },
  { name: "@tour", docsUrl: "https://onboarding-tour.vercel.app" },
  { name: "@uitripled", docsUrl: "https://ui.tripled.work" },
  { name: "@utilcn", docsUrl: "https://utilcn.dev" },
  { name: "@wandry-ui", docsUrl: "http://ui.wandry.com.ua" },
  { name: "@wigggle-ui", docsUrl: "https://wigggle-ui.vercel.app" },
  { name: "@zippystarter", docsUrl: "https://zippystarter.com" },
  { name: "@uicapsule", docsUrl: "https://uicapsule.com" },
  { name: "@ui-layouts", docsUrl: "https://ui-layouts.com" },
  { name: "@pureui", docsUrl: "https://pure.kam-ui.com" },
  { name: "@tailwind-builder", docsUrl: "https://tailwindbuilder.ai" },
  { name: "@tailwind-admin", docsUrl: "https://tailwind-admin.com" },
  { name: "@skiper-ui", docsUrl: "https://skiper-ui.com" },
  { name: "@animbits", docsUrl: "https://animbits.dev" },
];

export const ShadcnLibsTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>isPaid</TableHead>
          <TableHead>Stars</TableHead>
          <TableHead>RepoUrl</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {ShadcnLibs.map((lib) => (
          <TableRow key={lib.name}>
            <TableCell>
              <Link href={lib.docsUrl} rel="noreferrer" target="_blank">
                {lib.name}
              </Link>
            </TableCell>
            <TableCell>
              {lib.isPaid === true && "Paid"}
              {lib.isPaid === false && "Open"}
              {lib.isPaid == null && "-"}
            </TableCell>
            <TableCell>{lib.stars || "-"}</TableCell>
            <TableCell>
              {lib.repoUrl ? (
                <Link href={lib.repoUrl} rel="noreferrer" target="_blank">
                  {lib.repoUrl}
                </Link>
              ) : (
                "-"
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
