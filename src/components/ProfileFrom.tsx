import React from "react";
import {
  FaUser,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaFacebook,
  FaBriefcase,
  FaCode,
} from "react-icons/fa";
import * as Avatar from "@radix-ui/react-avatar";
import * as Tooltip from "@radix-ui/react-tooltip";
import * as Separator from "@radix-ui/react-separator";

interface ProfileData {
  name: string;
  bio: string;
  email: string;
  location: string;
  github?: string;
  facebook?: string;
  avatar?: string | null;
}

interface Props {
  profile: ProfileData;
}

const ProfileCard: React.FC<Props> = ({ profile }) => {
  return (
    <div className="relative bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden animate-slide-up">
      {/* Banner */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 h-32 relative">
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Avatar using Radix Avatar */}
      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 md:left-16 md:translate-x-0">
        <Avatar.Root className="w-36 h-36 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
          {profile.avatar ? (
            <Avatar.Image
              src={profile.avatar}
              alt={profile.name}
              className="w-full h-full object-cover object-top"
            />
          ) : (
            <Avatar.Fallback className="text-white">
              <FaUser size={64} />
            </Avatar.Fallback>
          )}
        </Avatar.Root>
      </div>

      {/* Content */}
      <div className="pt-32 px-8 pb-10">
        <div className="flex flex-col md:flex-row md:items-center md:gap-6">
          <div className="text-center md:text-left flex-1">
            <h1 className="text-4xl font-black text-gray-800 mb-3">{profile.name}</h1>
            <div className="space-y-2">
              {profile.location && (
                <p className="text-gray-600 flex items-center justify-center md:justify-start gap-2">
                  <FaMapMarkerAlt className="text-purple-600" /> {profile.location}
                </p>
              )}
              {profile.email && (
                <p className="text-gray-600 flex items-center justify-center md:justify-start gap-2">
                  <FaEnvelope className="text-purple-600" /> {profile.email}
                </p>
              )}
            </div>
          </div>
        </div>

        <Separator.Root className="w-full h-px bg-gray-200 my-6" />

        {/* Bio */}
        {profile.bio && (
          <div className="mt-2 bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
              <FaBriefcase className="text-purple-600" /> เกี่ยวกับฉัน
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">{profile.bio}</p>
          </div>
        )}

        <Separator.Root className="w-full h-px bg-gray-200 my-6" />

        {/* Social */}
        {(profile.github || profile.facebook) && (
          <div className="mt-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <FaCode className="text-purple-600" /> โซเชียลมีเดีย
            </h2>
            <div className="flex flex-wrap gap-4">
              {profile.github && (
                <Tooltip.Provider>
                  <Tooltip.Root>
                    <Tooltip.Trigger asChild>
                      <a
                        href={`https://github.com/${profile.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 bg-gray-800 text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition-all hover:scale-105 shadow-lg"
                      >
                        <FaGithub /> GitHub
                      </a>
                    </Tooltip.Trigger>
                    <Tooltip.Content className="rounded px-3 py-1 text-sm bg-black text-white">
                      ไปยัง GitHub ของฉัน
                      <Tooltip.Arrow />
                    </Tooltip.Content>
                  </Tooltip.Root>
                </Tooltip.Provider>
              )}

              {profile.facebook && (
                <Tooltip.Provider>
                  <Tooltip.Root>
                    <Tooltip.Trigger asChild>
                      <a
                        href={`${profile.facebook}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all hover:scale-105 shadow-lg"
                      >
                        <FaFacebook /> Facebook
                      </a>
                    </Tooltip.Trigger>
                    <Tooltip.Content className="rounded px-3 py-1 text-sm bg-black text-white">
                      ไปยัง Facebook ของฉัน
                      <Tooltip.Arrow />
                    </Tooltip.Content>
                  </Tooltip.Root>
                </Tooltip.Provider>
              )}
              
            </div>
          </div>
        )}
      </div>

      <style>{`
      @keyframes slide-up { 
        from { opacity: 0; transform: translateY(30px); } 
        to { opacity: 1; transform: translateY(0); } 
      }
      .animate-slide-up { animation: slide-up 0.6s ease-out; }
    `}</style>
    </div>
  );
};

export default ProfileCard;
