import { Users, Trophy } from "lucide-react";

const clubs = [
  {
    name: "AIESEC Bardo",
    date: "Oct. 2023 – Jul. 2024",
    description:
      "Participated in youth leadership programs and local projects for personal development and community impact.",
    icon: Users,
  },
  {
    name: "ACM INSAT",
    date: "2022",
    description:
      "Enhanced competitive programming and algorithmic problem-solving skills through regular training and contests.",
    icon: Trophy,
  },
];

export default function Clubs() {
  return (
    <section id="clubs" className="w-full max-w-3xl py-12 flex flex-col items-center">
      <h2 className="text-3xl font-semibold mb-8">Clubs & Activities</h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {clubs.map((club, i) => (
          <div key={i} className="bg-card border rounded-xl shadow p-5 flex flex-col gap-2">
            <div className="flex items-center gap-2 mb-2">
              <club.icon className="w-6 h-6 text-primary" />
              <span className="font-bold text-lg">{club.name}</span>
            </div>
            <span className="text-sm text-muted-foreground">{club.date}</span>
            <p className="text-base text-muted-foreground">{club.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 