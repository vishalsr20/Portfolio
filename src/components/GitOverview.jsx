import React, { useEffect, useState } from "react";

export default function GitOverview({
  username = "vishalsr20",
  token = null,
  cacheTTL = 10 * 60 * 1000,
  isDarkTheme = true
}) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [profile, setProfile] = useState(null);
  const [aggregates, setAggregates] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredStat, setHoveredStat] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let mounted = true;
    const cacheKey = `gh_profile_${username}`;

    async function fetchWithAuth(url) {
      const headers = { Accept: "application/vnd.github.v3+json" };
      if (token) headers.Authorization = `token ${token}`;
      const res = await fetch(url, { headers });
      if (!res.ok) {
        const text = await res.text();
        throw new Error(`GitHub API error: ${res.status} ${text}`);
      }
      return res.json();
    }

    async function getAllRepos() {
      const perPage = 100;
      let page = 1;
      let all = [];

      while (true) {
        const url = `https://api.github.com/users/${username}/repos?per_page=${perPage}&page=${page}&sort=pushed`;
        const data = await fetchWithAuth(url);
        if (!Array.isArray(data)) throw new Error("Unexpected repo data");
        all = all.concat(data);
        if (data.length < perPage) break;
        page += 1;
        if (page > 50) break;
      }
      return all;
    }

    async function fetchData() {
      setLoading(true);
      setError(null);

      try {
        const profileUrl = `https://api.github.com/users/${username}`;
        const profileData = await fetchWithAuth(profileUrl);
        const repos = await getAllRepos();

        const totals = repos.reduce(
          (acc, r) => {
            acc.stars += r.stargazers_count || 0;
            acc.forks += r.forks_count || 0;
            acc.watchers += r.watchers_count || 0;
            acc.open_issues += r.open_issues_count || 0;
            return acc;
          },
          { stars: 0, forks: 0, watchers: 0, open_issues: 0 }
        );

        const langMap = {};
        repos.forEach((r) => {
          const lang = r.language || "Other";
          langMap[lang] = (langMap[lang] || 0) + 1;
        });

        const topLanguages = Object.entries(langMap)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 6)
          .map(([lang, count]) => ({ lang, count }));

        const aggregated = {
          totals,
          repoCount: repos.length,
          topLanguages,
        };

        if (!mounted) return;
        setProfile(profileData);
        setAggregates(aggregated);
      } catch (err) {
        if (!mounted) return;
        console.error(err);
        setError(err.message || "Failed to fetch GitHub data");
      } finally {
        if (!mounted) return;
        setLoading(false);
      }
    }

    fetchData();

    return () => {
      mounted = false;
    };
  }, [username, token, cacheTTL]);

  if (loading) {
    return (
      <div className={`min-h-screen flex items-center justify-center font-serif ${
        isDarkTheme ? 'bg-gradient-to-b from-gray-800 to-gray-900' : 'bg-gradient-to-b from-white to-gray-50'
      }`}>
        <div className="text-center">
          <div className={`inline-block w-16 h-16 border-4 border-t-emerald-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin ${
            isDarkTheme ? 'border-opacity-30' : 'border-opacity-20'
          }`}></div>
          <p className={`mt-4 text-lg font-light ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
            Loading GitHub profile...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`min-h-screen flex items-center justify-center p-4 font-serif ${
        isDarkTheme ? 'bg-gradient-to-b from-gray-800 to-gray-900' : 'bg-gradient-to-b from-white to-gray-50'
      }`}>
        <div className={`max-w-md w-full p-8 rounded-2xl ${
          isDarkTheme ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200 shadow-lg'
        }`}>
          <div className="text-center">
            <div className={`inline-block p-4 rounded-full mb-4 ${
              isDarkTheme ? 'bg-red-900/20' : 'bg-red-100'
            }`}>
              <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className={`text-xl font-medium mb-2 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
              Failed to Load Profile
            </h3>
            <p className={`text-sm font-light ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
              {error}
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!profile || !aggregates) return null;

  const { totals, repoCount, topLanguages } = aggregates;

  const stats = [
    { label: "Total Stars", value: totals.stars, icon: "⭐", gradient: "from-yellow-400 to-orange-500" },
    { label: "Total Forks", value: totals.forks, icon: "🍴", gradient: "from-blue-400 to-cyan-500" },
    { label: "Public Repos", value: profile.public_repos, icon: "📦", gradient: "from-green-400 to-emerald-500" },
    { label: "Followers", value: profile.followers, icon: "👥", gradient: "from-purple-400 to-pink-500" }
  ];

  return (
    <div className={`min-h-screen py-20 px-4 sm:px-8 lg:px-16 font-serif transition-all duration-1000 relative overflow-hidden ${
      isDarkTheme
        ? "bg-gradient-to-b from-gray-800 to-gray-900 text-emerald-300"
        : "bg-gradient-to-b from-white to-gray-50 text-emerald-700"
    }`}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className={`absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl ${
          isDarkTheme ? 'bg-emerald-500/5' : 'bg-emerald-500/3'
        } animate-float-gentle`}></div>
        <div className={`absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full blur-3xl ${
          isDarkTheme ? 'bg-blue-500/5' : 'bg-blue-500/3'
        } animate-float-gentle-reverse`}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-light mb-4 ${
            isDarkTheme ? 'text-white' : 'text-gray-900'
          }`}>
            GitHub Overview
          </h2>
          <div className={`w-20 h-px mx-auto transition-all duration-700 delay-200 ${
            isVisible ? 'w-20 opacity-100' : 'w-0 opacity-0'
          } bg-gradient-to-r from-transparent via-emerald-500 to-transparent`}></div>
        </div>

        {/* Profile Card */}
        <div className={`mb-12 transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className={`p-8 rounded-2xl overflow-hidden transition-all duration-500 ${
            isDarkTheme
              ? "bg-gray-800 border border-gray-700 shadow-xl"
              : "bg-white border border-gray-100 shadow-2xl shadow-emerald-500/10"
          }`}>
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Avatar */}
              <div className="relative group">
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300`}></div>
                <img
                  src={profile.avatar_url}
                  alt="avatar"
                  className="relative w-32 h-32 rounded-2xl object-cover border-4 border-gray-700 group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Profile Info */}
              <div className="flex-1 text-center md:text-left">
                <a
                  href={profile.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block text-3xl font-medium mb-2 transition-colors duration-300 hover:text-emerald-500 ${
                    isDarkTheme ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {profile.login}
                </a>
                {profile.name && (
                  <p className={`text-lg font-light mb-2 ${
                    isDarkTheme ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {profile.name}
                  </p>
                )}
                {profile.bio && (
                  <p className={`text-sm font-light mb-4 max-w-2xl ${
                    isDarkTheme ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {profile.bio}
                  </p>
                )}
                <div className={`flex flex-wrap gap-4 justify-center md:justify-start text-sm ${
                  isDarkTheme ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {profile.location && (
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {profile.location}
                    </span>
                  )}
                  {profile.company && (
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      {profile.company}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:translate-y-[-8px] hover:shadow-xl ${
                isDarkTheme
                  ? "bg-gray-800 border border-gray-700 hover:shadow-emerald-500/10"
                  : "bg-white border border-gray-100 hover:shadow-emerald-500/20"
              }`}
              style={{
                transitionDelay: `${400 + index * 100}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
              }}
              onMouseEnter={() => setHoveredStat(stat.label)}
              onMouseLeave={() => setHoveredStat(null)}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl">{stat.icon}</span>
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${stat.gradient} ${
                    hoveredStat === stat.label ? 'animate-pulse' : ''
                  }`}></div>
                </div>
                <div className={`text-3xl font-bold mb-1 transition-colors duration-300 ${
                  hoveredStat === stat.label ? 'text-emerald-500' : isDarkTheme ? 'text-white' : 'text-gray-900'
                }`}>
                  {stat.value.toLocaleString()}
                </div>
                <div className={`text-sm font-light ${
                  isDarkTheme ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {stat.label}
                </div>
              </div>
              
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Languages Section */}
        <div className={`transition-all duration-700 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className={`p-8 rounded-2xl ${
            isDarkTheme
              ? "bg-gray-800 border border-gray-700"
              : "bg-white border border-gray-100 shadow-lg"
          }`}>
            <h3 className={`text-2xl font-medium mb-6 ${
              isDarkTheme ? 'text-white' : 'text-gray-900'
            }`}>
              Top Languages
              <span className={`text-sm font-light ml-2 ${
                isDarkTheme ? 'text-gray-400' : 'text-gray-600'
              }`}>
                (by repository count)
              </span>
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {topLanguages.map((l, idx) => (
                <div
                  key={l.lang}
                  className={`group p-4 rounded-xl transition-all duration-300 hover:translate-x-2 ${
                    isDarkTheme
                      ? "bg-gray-700/50 hover:bg-gray-700"
                      : "bg-gray-50 hover:bg-gray-100"
                  }`}
                  style={{
                    transitionDelay: `${800 + idx * 50}ms`,
                    opacity: isVisible ? 1 : 0
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span className={`font-medium ${
                      isDarkTheme ? 'text-gray-200' : 'text-gray-900'
                    }`}>
                      {l.lang}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-light transition-colors duration-300 ${
                      isDarkTheme
                        ? "bg-emerald-900/30 text-emerald-400 group-hover:bg-emerald-900/50"
                        : "bg-emerald-100 text-emerald-700 group-hover:bg-emerald-200"
                    }`}>
                      {l.count} {l.count === 1 ? 'repo' : 'repos'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={`text-center mt-8 text-sm font-light transition-all duration-700 delay-900 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${isDarkTheme ? 'text-gray-500' : 'text-gray-400'}`}>
          Last updated: {new Date(profile.updated_at).toLocaleString()}
        </div>
      </div>

      <style jsx>{`
        @keyframes float-gentle {
          0%, 100% { 
            transform: translate(0, 0) rotate(0deg); 
          }
          33% { 
            transform: translate(5px, -5px) rotate(0.5deg); 
          }
          66% { 
            transform: translate(-3px, 3px) rotate(-0.5deg); 
          }
        }
        
        @keyframes float-gentle-reverse {
          0%, 100% { 
            transform: translate(0, 0) rotate(0deg); 
          }
          33% { 
            transform: translate(-5px, 5px) rotate(-0.5deg); 
          }
          66% { 
            transform: translate(3px, -3px) rotate(0.5deg); 
          }
        }
        
        .animate-float-gentle {
          animation: float-gentle 8s ease-in-out infinite;
        }
        
        .animate-float-gentle-reverse {
          animation: float-gentle-reverse 10s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}