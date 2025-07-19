const skills = {
  Languages: ["Java", "C#", "TypeScript", "SQL", "PHP"],
  Frameworks: ["Angular", "Spring Boot", ".NET", "Symfony", "Docker"],
  Databases: ["MongoDB", "MySQL"],
  Tools: ["Git", "REST APIs", "JWT", "Unit Testing"],
  Others: ["Agile", "CI/CD (basic)"]
};

export default function Skills() {
  return (
    <section id="skills" className="w-full max-w-3xl py-12 flex flex-col items-center">
      <h2 className="text-3xl font-semibold mb-8">Skills</h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(skills).map(([group, items]) => (
          <div key={group} className="bg-card border rounded-xl shadow p-5 flex flex-col gap-3">
            <h3 className="font-bold text-lg mb-2">{group}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <span key={item} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 