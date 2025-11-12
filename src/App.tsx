import React from "react";
import ProfileCard from "./components/ProfileFrom";
import SkillsSection from "./components/SkillFrom";

const App: React.FC = () => {
  const profile = {
    name: "นาย พรพิชัย สีธินัน",
    bio: "วิศวะคอมพิวเตอร์ที่ชื่นชอบการเขียนโค้ดและแก้ไขลอจิกปัญหาต่างๆ",
    email: "knkzuk@gmail.com",
    location: "กรุงเทพฯ",
    github: "94Diary",
    facebook: "https://www.facebook.com/pornpichai.sritinun",
    twitter: "pornpichai.sritinun",
    avatar:
      "/profile.jpg",
  };

  const skills = [
    { name: "React", level: 2 },
    { name: "TypeScript", level: 3 },
    { name: "Tailwind CSS", level: 2 },
    { name: "Node.js", level: 3 },
    { name: "python", level: 4 },
    { name: "Lua", level: 5 },
    { name: "C#", level: 4 },
    { name: "Arduino robot", level: 4 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 flex items-center justify-center p-6">
      <div className="max-w-3xl w-full">
        <ProfileCard profile={profile} />
        <SkillsSection skills={skills} />
      </div>
    </div>
  );
};

export default App;
