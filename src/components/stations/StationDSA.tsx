"use client";

import Image from "next/image";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { useInView } from "@/lib/useInView";
import { Panel } from "@/components/Panel";
import { Spray } from "@/components/Spray";

const PLATFORMS = [
  {
    name: "LeetCode",
    handle: "shubhamsharmass0001",
    url: "https://leetcode.com/u/shubhamsharmass0001/",
    rating: "2142",
    ratingLabel: "Contest Rating",
    badge: "Guardian",
    badgeClass: "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30",
    extra: "Rank 56,415 · Top 1.28%",
    breakdown: [
      { label: "Easy", value: "270", color: "text-green-400" },
      { label: "Med", value: "454", color: "text-yellow-400" },
      { label: "Hard", value: "141", color: "text-red-400" },
    ],
    screenshot: "/dsa/leetcode.jpg",
    imagePosition: "object-top",
  },
  {
    name: "Codeforces",
    handle: "shubhtiet",
    url: "https://codeforces.com/profile/shubhtiet",
    rating: "1333",
    ratingLabel: "Contest Rating",
    badge: "Pupil",
    badgeClass: "bg-green-500/20 text-green-400 border border-green-500/30",
    extra: "Max rating: 1333 · Specialist Aim",
    breakdown: [
      { label: "Contests", value: "15+", color: "text-blue-400" },
      { label: "Rank", value: "Pupil", color: "text-green-400" },
    ],
    screenshot: "/dsa/codeforces.jpg",
    imagePosition: "object-top",
  },
  {
    name: "CodeChef",
    handle: "shubhamss0001",
    url: "https://www.codechef.com/users/shubhamss0001",
    rating: "Active",
    ratingLabel: "Heatmap",
    badge: "Active",
    badgeClass: "bg-paper/15 text-paper/70 border border-paper/20",
    extra: "Submissions Heatmap Active",
    breakdown: [
      { label: "Activity", value: "Regular", color: "text-yellow-400" },
      { label: "Submissions", value: "Weekly", color: "text-paper/80" },
    ],
    screenshot: "/dsa/codechef.png",
    imagePosition: "object-top",
  },
  {
    name: "Codolio",
    handle: "shubhamsharmass0001",
    url: "https://codolio.com/profile/shubhamsharmass0001",
    rating: "1100",
    ratingLabel: "Questions Solved",
    badge: "Verified",
    badgeClass: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
    extra: "618 Active Days · #Guardian",
    breakdown: [
      { label: "Active Days", value: "618", color: "text-emerald-400" },
      { label: "Solved", value: "1100", color: "text-orange-400" },
    ],
    screenshot: "/dsa/codolio.png",
    imagePosition: "object-[center_12%]",
  },
] as const;

export function StationDSA({
  containerAnimation,
}: {
  containerAnimation?: gsap.core.Tween;
}) {
  const [root, seen] = useInView<HTMLDivElement>();

  useGSAP(
    () => {
      if (prefersReducedMotion() || !seen) return;
      gsap.from(".dsa-stat", {
        autoAlpha: 0,
        y: 24,
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out",
        delay: 0.1,
      });
      gsap.from(".dsa-card", {
        autoAlpha: 0,
        y: 30,
        duration: 0.65,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.2,
      });
    },
    { scope: root, dependencies: [seen] },
  );

  return (
    <Panel
      id="dsa"
      name="DSA"
      tone="ink"
      width="screen"
      containerAnimation={containerAnimation}
      drift={2}
      className="px-6 py-16 sm:px-10 lg:px-14 wide:py-0"
    >
      <div ref={root} className="mx-auto w-full max-w-7xl">
        <div data-drift className="flex flex-col gap-10 wide:flex-row wide:items-center wide:justify-between wide:gap-12">

          {/* ── Left Column: Headline + 4 Key Stats ── */}
          <div className="wide:w-[22rem] shrink-0">
            <div className="relative mb-8 inline-block">
              <p className="micro uppercase opacity-50">Problem Solving</p>
              <h2 className="display-tight mt-3 text-[11vw] leading-[0.92] wide:text-[4vw]">
                Competitive<br />
                <span className="relative inline-block">
                  Programming
                  <Spray
                    kind="underline"
                    className="absolute -bottom-[14%] left-0 h-[26%] w-[85%]"
                  />
                </span>
              </h2>
            </div>

            {/* 4 Stats in 2x2 layout */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-6">
              {/* Highlighted LeetCode rating */}
              <div className="dsa-stat">
                <div className="relative inline-block">
                  <span
                    aria-hidden="true"
                    className="absolute -top-[0.28em] -right-[0.14em] -bottom-[0.26em] -left-[0.14em] block"
                  >
                    <Spray kind="swipe" delay={0.3} className="h-full w-full" />
                  </span>
                  <p className="display-tight relative px-[0.12em] text-[9vw] leading-none text-paper wide:text-[3.2vw]">
                    2142
                  </p>
                </div>
                <p className="micro mt-1 uppercase opacity-60">LeetCode Rating</p>
              </div>

              <div className="dsa-stat">
                <p className="display-tight text-[9vw] leading-none wide:text-[3.2vw]">1100+</p>
                <p className="micro mt-1 uppercase opacity-60">Problems Solved</p>
              </div>

              <div className="dsa-stat">
                <p className="display-tight text-[9vw] leading-none wide:text-[3.2vw]">1.28%</p>
                <p className="micro mt-1 uppercase opacity-60">Global Top</p>
              </div>

              <div className="dsa-stat">
                <p className="display-tight text-[9vw] leading-none wide:text-[3.2vw]">50+</p>
                <p className="micro mt-1 uppercase opacity-60">Contests</p>
              </div>
            </div>
          </div>

          {/* ── Right: 4 Profile Cards (2 Up, 2 Down) ── */}
          <div className="w-full wide:w-auto shrink-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 wide:gap-3.5 wide:w-[41rem]">
              {PLATFORMS.map((p) => (
                <div key={p.name} className="dsa-card">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block overflow-hidden rounded-xl border border-paper/15 bg-paper/5 transition-all duration-300 hover:border-paper/40 hover:bg-paper/10"
                  >
                    {/* Screenshot Banner */}
                    <div className="relative h-24 overflow-hidden bg-black/40 wide:h-24">
                      <Image
                        src={p.screenshot}
                        alt={`${p.name} profile – ${p.handle}`}
                        fill
                        sizes="(min-width: 1024px) 320px, 100vw"
                        className={`object-cover ${p.imagePosition} transition-transform duration-500 group-hover:scale-105`}
                      />
                      <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent" />
                    </div>

                    {/* Card Content */}
                    <div className="p-3">
                      {/* Name, Handle, and Badge */}
                      <div className="flex items-center justify-between gap-2">
                        <div>
                          <p className="display text-base leading-tight font-semibold">{p.name}</p>
                          <p className="micro opacity-40 text-[11px]">@{p.handle}</p>
                        </div>
                        <span
                          className={`micro rounded-full px-2 py-0.5 text-[9px] uppercase tracking-wider font-semibold ${p.badgeClass}`}
                        >
                          {p.badge}
                        </span>
                      </div>

                      {/* Main Metric */}
                      <div className="mt-2 flex items-baseline gap-2">
                        <span className="display-tight text-xl leading-none font-bold">{p.rating}</span>
                        <span className="micro opacity-50 text-[10px] uppercase">{p.ratingLabel}</span>
                      </div>

                      {/* Chips / Breakdown */}
                      {p.breakdown.length > 0 && (
                        <div className="mt-2 flex gap-3 text-xs">
                          {p.breakdown.map((b) => (
                            <span key={b.label} className="opacity-90">
                              <span className={b.color}>{b.label}:</span>{" "}
                              <span className="font-semibold text-paper">{b.value}</span>
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Extra info */}
                      <p className="micro mt-1.5 opacity-40 text-[10px]">{p.extra}</p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </Panel>
  );
}
