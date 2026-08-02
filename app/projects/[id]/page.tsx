import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft, FaGithub, FaExternalLinkAlt, FaCheckCircle, FaCalendarAlt, FaCode } from "react-icons/fa";
import { projectsData } from "@/data/projects";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0A1931] via-[#1A3D63] to-[#0A1931] text-[#F6FAFD] py-20 px-6 relative overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#4A7FA7]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[30rem] h-[30rem] bg-[#B3CFE5]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 space-y-10">
        {/* Back Button */}
        <div>
          <Link
            href="/#projects"
            className="
              inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl font-medium text-sm
              bg-[#1A3D63]/80 border border-[#4A7FA7]/40 text-[#B3CFE5]
              hover:text-[#F6FAFD] hover:border-[#B3CFE5] hover:bg-[#4A7FA7]/30
              transition-all duration-300 shadow-md
            "
          >
            <FaArrowLeft className="w-4 h-4" />
            <span>Back to Projects</span>
          </Link>
        </div>

        {/* Header Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#1A3D63]/70 border border-[#4A7FA7]/40 backdrop-blur-xl shadow-2xl space-y-6">
          <div className="flex flex-wrap justify-between items-start gap-4">
            <div className="space-y-2">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#4A7FA7]/30 text-[#B3CFE5] border border-[#4A7FA7]/50">
                <FaCalendarAlt className="w-3 h-3" />
                <span>{project.period}</span>
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F6FAFD] tracking-tight">
                {project.title}
              </h1>
              <p className="text-base sm:text-lg font-medium text-[#B3CFE5]">
                {project.subtitle}
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center space-x-2 px-5 py-3 rounded-xl font-semibold text-sm
                    bg-[#4A7FA7] text-[#F6FAFD] border border-[#B3CFE5]/30
                    hover:bg-[#1A3D63] hover:scale-105 active:scale-95
                    transition-all duration-300 shadow-lg
                  "
                >
                  <FaGithub className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center space-x-2 px-5 py-3 rounded-xl font-semibold text-sm
                    border border-[#B3CFE5]/40 text-[#B3CFE5]
                    hover:bg-[#1A3D63]/50 hover:text-[#F6FAFD] hover:border-[#B3CFE5]
                    transition-all duration-300
                  "
                >
                  <FaExternalLinkAlt className="w-3.5 h-3.5" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>

          <hr className="border-[#4A7FA7]/30" />

          {/* Overview Section */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#F6FAFD] flex items-center space-x-2">
              <span>Project Overview</span>
            </h2>
            <p className="text-[#B3CFE5]/90 text-base sm:text-lg leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div className="space-y-4 pt-2">
              <h2 className="text-xl sm:text-2xl font-bold text-[#F6FAFD]">
                Key Features & Capabilities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start space-x-3 p-3.5 rounded-xl bg-[#0A1931]/40 border border-[#4A7FA7]/20"
                  >
                    <FaCheckCircle className="w-4 h-4 text-[#B3CFE5] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#F6FAFD]/90 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Skills */}
          <div className="space-y-4 pt-2">
            <h2 className="text-xl sm:text-2xl font-bold text-[#F6FAFD] flex items-center space-x-2">
              <FaCode className="w-5 h-5 text-[#B3CFE5]" />
              <span>Technologies & Tools</span>
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-lg bg-[#4A7FA7]/20 text-[#B3CFE5] border border-[#4A7FA7]/40"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
