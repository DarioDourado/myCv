import Education from "@/components/Education";
import Experience from "@/components/Experience";
import PersonalInfo from "@/components/personalInfo";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-black flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        < PersonalInfo />
        {/* < Education />
        < Experience />
        < Skills /> */}
      </div>
    </main>
  );
}
