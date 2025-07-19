export default function About() {
  return (
    <section id="about" className="w-full max-w-3xl py-12 flex flex-col items-center">
      <h2 className="text-3xl font-semibold mb-4">About</h2>
      <div className="bg-card border rounded-xl shadow p-6 w-full flex flex-col gap-4">
        <div>
          <h3 className="font-bold text-lg mb-1">Education</h3>
          <ul className="list-disc list-inside text-muted-foreground">
            <li>
              <span className="font-semibold">ESPRIT</span> – Bachelor’s Degree in Software Engineering (2021–2026), GPA: 3.66/4.0
            </li>
            <li>
              <span className="font-semibold">Carthage Byrsa High School</span> – Baccalaureate in Mathematics (2021)
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-1">Personal Story</h3>
          <p className="text-base text-muted-foreground">
            I am passionate about building robust, scalable, and user-friendly applications. Experienced in full-stack web development, backend testing, and automation. Always eager to learn and contribute to impactful projects.
          </p>
        </div>
      </div>
    </section>
  );
} 