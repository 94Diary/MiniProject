import React from "react";
import { FaAward, FaStar, FaRegStar } from "react-icons/fa";
import * as HoverCard from "@radix-ui/react-hover-card";
import * as Separator from "@radix-ui/react-separator";

interface Skill {
  name: string;
  level: number; // 1..5
}

interface Props {
  skills: Skill[];
}

const StarRating: React.FC<{ level: number }> = ({ level }) => (
  <div className="flex gap-1">
    {Array.from({ length: 5 }, (_, i) =>
      i < level ? (
        <FaStar key={i} className="text-yellow-400" />
      ) : (
        <FaRegStar key={i} className="text-gray-300" />
      )
    )}
  </div>
);

const SkillsSection: React.FC<Props> = ({ skills }) => {
  if (skills.length === 0) return null;

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <FaAward className="text-purple-600" /> ทักษะ
      </h2>

      <Separator.Root className="w-full h-px bg-gray-200 mb-4" />

      <div className="grid md:grid-cols-2 gap-4">
        {skills.map((skill, idx) => (
          <HoverCard.Root key={idx}>
            <HoverCard.Trigger asChild>
              <div
                className="bg-gradient-to-r from-purple-50 via-pink-50 to-orange-50 p-5 rounded-2xl hover:shadow-lg transition-all hover:scale-105 cursor-pointer"
                aria-hidden
              >
                <div className="flex justify-between items-center">
                  <span className="font-bold text-gray-800 text-lg">{skill.name}</span>
                  <StarRating level={skill.level} />
                </div>
                <div className="mt-3 bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-full transition-all duration-1000 ease-out"
                    style={{ width: `${(skill.level / 5) * 100}%` }}
                  />
                </div>
              </div>
            </HoverCard.Trigger>

            <HoverCard.Content
              className="rounded-lg p-3 text-sm bg-white shadow-lg border"
              sideOffset={6}
            >
              <div className="text-gray-700">
                <strong>{skill.name}</strong>
                <div className="mt-1">ระดับ: {skill.level} / 5</div>
                <div className="text-xs text-gray-500 mt-1">
                  {skill.level >= 4 ? "เชี่ยวชาญ" : skill.level >= 3 ? "ดี" : "เริ่มต้น/ปานกลาง"}
                </div>
              </div>
              <HoverCard.Arrow className="fill-white" />
            </HoverCard.Content>
          </HoverCard.Root>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
