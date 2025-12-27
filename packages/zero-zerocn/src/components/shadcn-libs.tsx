"use client";
import { isPageStatic } from "next/dist/build/utils";
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
    name: "@agents-ui/livekit",
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
    name: "@ai-elements ★",
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
    name: "@blocks ★",
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
  {
    name: "@coss",
    docsUrl: "https://coss.com/ui",
    repoUrl: "https://github.com/cosscom/coss",
    isPaid: false,
  },
  {
    name: "@creative-tim",
    docsUrl: "https://www.creative-tim.com/ui",
    repoUrl: "https://github.com/creativetimofficial/ui",
    isPaid: true,
  },
  {
    name: "@cult-ui",
    docsUrl: "https://www.cult-ui.com",
    repoUrl: "https://github.com/nolly-studio/cult-ui",
    isPaid: true,
  },
  {
    name: "@diceui ★",
    docsUrl: "https://www.diceui.com",
    repoUrl: "github.com/sadmann7/diceui",
    isPaid: false,
  },
  {
    name: "@doras-ui",
    docsUrl: "https://ui.doras.to",
    repoUrl: "https://github.com/dorasto/ui",
    isPaid: false,
  },
  {
    name: "@elements",
    docsUrl: "https://www.tryelements.dev",
    repoUrl: "https://github.com/crafter-station/elements",
    isPaid: false,
  },
  {
    name: "@elevenlabs-ui ★",
    docsUrl: "https://ui.elevenlabs.io",
    repoUrl: "https://github.com/elevenlabs/ui",
    isPaid: false,
  },
  {
    name: "@efferd",
    docsUrl: "https://efferd.com",
    repoUrl: null,
    isPaid: true,
  },
  {
    name: "@einui",
    docsUrl: "https://ui.eindev.ir",
    repoUrl: "https://github.com/ehsanghaffar/einui",
    isPaid: false,
  },
  {
    name: "@eldoraui",
    docsUrl: "https://eldoraui.site",
    repoUrl: "https://github.com/karthikmudunuri/eldoraui",
    isPaid: false,
  },
  {
    name: "@formcn",
    docsUrl: "https://formcn.dev",
    repoUrl: "https://github.com/Ali-Hussein-dev/formcn",
    isPaid: false,
  },
  {
    name: "@gaia",
    docsUrl: "https://ui.heygaia.io",
    repoUrl: "https://github.com/heygaia/ui",
    isPaid: false,
  },
  {
    name: "@glass-ui",
    docsUrl: "https://glass-ui.crenspire.com",
    repoUrl: "https://github.com/crenspire/glass-ui",
    isPaid: false,
  },
  {
    name: "@ha-components",
    docsUrl: "https://hacomponents.keshuac.com",
    repoUrl: "https://github.com/jchu634/ha-components",
    isPaid: false,
  },
  {
    name: "@hextaui",
    docsUrl: "https://hextaui.com",
    repoUrl: "https://github.com/preetsuthar17/hextaui",
    isPaid: false,
  },
  {
    name: "@hooks ★",
    docsUrl: "https://shadcn-hooks.vercel.app",
    repoUrl: "https://github.com/Debbl/shadcn-hooks",
    isPaid: false,
  },
  {
    name: "@intentui [Deprecated?]",
    docsUrl: "https://intentui.com",
    repoUrl: null,
    isPaid: null,
  },
  {
    name: "@kibo-ui ★",
    docsUrl: "https://www.kibo-ui.com",
    repoUrl: "https://github.com/shadcnblocks/kibo",
    isPaid: false,
  },
  {
    name: "@kanpeki",
    docsUrl: "https://kanpeki.vercel.app",
    repoUrl: "https://github.com/fellipeutaka/kanpeki",
    isPaid: false,
  },
  {
    name: "@kokonutui",
    docsUrl: "https://kokonutui.com",
    repoUrl: "https://github.com/kokonut-labs/kokonutui",
    isPaid: true,
  },
  {
    name: "@lens-blocks",
    docsUrl: "https://lensblocks.com",
    repoUrl: "https://github.com/ipaulpro/lens-blocks",
    isPaid: false,
  },
  {
    name: "@limeplay",
    docsUrl: "https://limeplay.winoffrg.dev",
    repoUrl: "https://github.com/winoffrg/limeplay/",
    isPaid: false,
  },
  {
    name: "@lucide-animated ★",
    docsUrl: "https://lucide-animated.com",
    repoUrl: "https://github.com/pqoqubbw/icons",
    isPaid: false,
  },
  {
    name: "@lytenyte/1771technologies",
    docsUrl: "https://www.1771technologies.com",
    repoUrl: "https://github.com/1771-Technologies/lytenyte",
    isPaid: true,
  },
  {
    name: "@magicui",
    docsUrl: "https://magicui.design",
    repoUrl: "https://github.com/magicuidesign/magicui",
    isPaid: true,
  },
  {
    name: "@manifest",
    docsUrl: "https://ui.manifest.build",
    repoUrl: "https://github.com/mnfst/manifest",
    isPaid: false,
  },
  {
    name: "@mui-treasury",
    docsUrl: "https://www.mui-treasury.com",
    repoUrl: null,
    isPaid: null,
  },
  {
    name: "@moleculeui",
    docsUrl: "https://www.moleculeui.design",
    repoUrl: "https://github.com/molecule-lab/molecule-ui",
    isPaid: false,
  },
  {
    name: "@motion-primitives ★",
    docsUrl: "https://www.motion-primitives.com",
    repoUrl: "https://github.com/ibelick/motion-primitives",
    isPaid: false,
  },
  {
    name: "@ncdai/chanhdai",
    docsUrl: "https://chanhdai.com/components",
    repoUrl: "https://github.com/ncdai/chanhdai.com",
    isPaid: false,
  },
  {
    name: "@nuqs",
    docsUrl: "https://nuqs.dev/registry",
    repoUrl: "https://github.com/47ng/nuqs",
    isPaid: false,
  },
  {
    name: "@nexus-elements/availproject",
    docsUrl: "https://elements.nexus.availproject.org",
    repoUrl: null,
    isPaid: null,
  },
  {
    name: "@optics",
    docsUrl: "https://optics.agusmayol.com.ar",
    repoUrl: "https://github.com/agusmayol/optics",
    isPaid: false,
  },
  {
    name: "@oui",
    docsUrl: "https://oui.mw10013.workers.dev",
    repoUrl: "https://github.com/mw10013/oui",
    isPaid: false,
  },
  {
    name: "@paceui",
    docsUrl: "https://ui.paceui.com",
    repoUrl: "https://github.com/paceui/ui",
    isPaid: false,
  },
  {
    name: "@paykit-sdk",
    docsUrl: "https://www.usepaykit.dev",
    repoUrl: "https://github.com/usepaykit",
    isPaid: false,
  },
  {
    name: "@plate",
    docsUrl: "https://platejs.org",
    repoUrl: "https://github.com/udecode/plate",
    isPaid: true,
  },
  {
    name: "@prompt-kit ★",
    docsUrl: "https://www.prompt-kit.com",
    repoUrl: "https://github.com/ibelick/prompt-kit",
    isPaid: false,
  },
  {
    name: "@prosekit ★",
    docsUrl: "https://prosekit.dev",
    repoUrl: "https://github.com/prosekit/prosekit",
    isPaid: false,
  },
  {
    name: "@phucbm",
    docsUrl: "https://ui.phucbm.com",
    repoUrl: "https://github.com/phucbm/ui.phucbm.com",
    isPaid: false,
  },
  {
    name: "@react-aria ★",
    docsUrl: "https://react-aria.adobe.com",
    repoUrl: "https://github.com/adobe/react-spectrum",
    isPaid: false,
  },
  {
    name: "@react-bits ★",
    docsUrl: "https://reactbits.dev",
    repoUrl: "https://github.com/DavidHDev/react-bits",
    isPaid: false,
  },
  {
    name: "@retroui",
    docsUrl: "https://retroui.dev",
    repoUrl: "https://github.com/Logging-Stuff/retroui",
    isPaid: true,
  },
  {
    name: "@reui",
    docsUrl: "https://reui.io",
    repoUrl: "https://github.com/keenthemes/reui",
    isPaid: false,
  },
  {
    name: "@scrollxui",
    docsUrl: "https://www.scrollxui.dev",
    repoUrl: "https://github.com/Adityakishore0/ScrollX-UI",
    isPaid: false,
  },
  {
    name: "@square-ui/indev-ui",
    docsUrl: "https://square.lndev.me",
    repoUrl: "https://github.com/ln-dev7/square-ui",
    isPaid: true,
  },
  {
    name: "@systaliko-ui",
    docsUrl: "https://systaliko-ui.vercel.app",
    repoUrl: "https://github.com/YoucefBnm/systaliko-ui",
    isPaid: false,
  },
  {
    name: "@roiui",
    docsUrl: "https://roiui.com",
    repoUrl: "https://github.com/preetecool/roi-ui",
    isPaid: false,
  },
  {
    name: "@solaceui",
    docsUrl: "https://www.solaceui.com",
    repoUrl: null,
    isPaid: null,
  },
  {
    name: "@shadcnblocks",
    docsUrl: "https://shadcnblocks.com",
    repoUrl: "https://github.com/shadcnblocks/shadcn-ui-blocks",
    isPaid: true,
  },
  {
    name: "@shadcndesign",
    docsUrl: "https://www.shadcndesign.com",
    repoUrl: null,
    isPaid: true,
  },
  {
    name: "@shadcn-map",
    docsUrl: "https://shadcn-map.vercel.app",
    repoUrl: "https://github.com/tonghohin/shadcn-map",
    isPaid: false,
  },
  {
    name: "@shadcn-studio",
    docsUrl: "https://shadcnstudio.com",
    repoUrl: "https://github.com/themeselection/shadcn-studio",
    isPaid: true,
  },
  {
    name: "@shadcn-editor ★",
    docsUrl: "https://shadcn-editor.vercel.app",
    repoUrl: "https://github.com/htmujahid/shadcn-editor",
    isPaid: false,
  },
  {
    name: "@shadcnui-blocks",
    docsUrl: "https://shadcnui-blocks.com",
    repoUrl: "https://github.com/akash3444/shadcn-ui-blocks",
    isPaid: true,
  },
  {
    name: "@shadcraft",
    docsUrl: "https://shadcraft-free.vercel.app",
    repoUrl: "https://github.com/shadcraft/shadcraft-free",
    isPaid: true,
  },
  {
    name: "@smoothui",
    docsUrl: "https://smoothui.dev",
    repoUrl: "https://github.com/educlopez/smoothui",
    isPaid: false,
  },
  {
    name: "@spectrumui",
    docsUrl: "https://ui.spectrumhq.in",
    repoUrl: "https://github.com/arihantcodes/spectrum-ui",
    isPaid: false,
  },
  {
    name: "@supabase",
    docsUrl: "https://supabase.com/ui",
    repoUrl: null,
    isPaid: null,
  },
  {
    name: "@svgl ★",
    docsUrl: "https://svgl.app",
    repoUrl: "https://github.com/pheralb/svgl",
    isPaid: false,
  },
  {
    name: "@tailark",
    docsUrl: "https://tailark.com",
    repoUrl: "https://github.com/tailark/blocks",
    isPaid: true,
  },
  {
    name: "@taki",
    docsUrl: "https://taki-ui.com",
    repoUrl: null,
    isPaid: null,
  },
  {
    name: "@tour",
    docsUrl: "https://onboarding-tour.vercel.app",
    repoUrl: "https://github.com/tonghohin/tour",
    isPaid: false,
  },
  {
    name: "@uitripled",
    docsUrl: "https://ui.tripled.work",
    repoUrl: "https://github.com/moumen-soliman/uitripled",
    isPaid: false,
  },
  {
    name: "@utilcn",
    docsUrl: "https://utilcn.dev",
    repoUrl: "https://github.com/BrennenRocks/utilcn",
    isPaid: false,
  },
  {
    name: "@wandry-ui",
    docsUrl: "http://ui.wandry.com.ua",
    repoUrl: "https://github.com/WandryDev/wandry-ui",
    isPaid: false,
  },
  {
    name: "@wigggle-ui",
    docsUrl: "https://wigggle-ui.vercel.app",
    repoUrl: "https://github.com/wigggle-ui/ui",
    isPaid: false,
  },
  {
    name: "@zippystarter",
    docsUrl: "https://zippystarter.com",
    repoUrl: null,
    isPaid: true,
  },
  {
    name: "@uicapsule",
    docsUrl: "https://uicapsule.com",
    repoUrl: "https://github.com/kyh/uicapsule",
    isPaid: false,
  },
  {
    name: "@ui-layouts",
    docsUrl: "https://ui-layouts.com",
    repoUrl: "https://github.com/ui-layouts/uilayouts",
    isPaid: true,
  },
  {
    name: "@pureui",
    docsUrl: "https://pure.kam-ui.com",
    repoUrl: "https://github.com/MusKRI/pure-ui",
    isPaid: false,
  },
  {
    name: "@tailwind-builder",
    docsUrl: "https://tailwindbuilder.ai",
    repoUrl: null,
    isPaid: true,
  },
  {
    name: "@tailwind-admin",
    docsUrl: "https://tailwind-admin.com",
    repoUrl: null,
    isPaid: true,
  },
  {
    name: "@skiper-ui",
    docsUrl: "https://skiper-ui.com",
    repoUrl: null,
    isPaid: true,
  },
  {
    name: "@animbits",
    docsUrl: "https://animbits.dev",
    repoUrl: "https://github.com/Garvit1000/AnimBits",
    isPaid: false,
  },
];

export const ShadcnLibsTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>isPaid</TableHead>
          {/* <TableHead>Stars</TableHead> */}
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
            {/* <TableCell>{lib.stars || "-"}</TableCell> */}
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
