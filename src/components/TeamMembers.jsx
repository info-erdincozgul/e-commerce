import MemberCard from "./MemberCard";

export default function TeamMembers() {
  return (
    <section className="flex flex-col items-center w-6/10 mx-auto text-center gap-y-10 font-[Montserrat,sans-serif] my-24">
      <div className="flex flex-col gap-y-2 sm:w-1/2">
        <span className="text-ebonyClay text-4xl font-bold">Meet Our Team</span>
        <span className="text-doveGray font-medium">
          Problem trying to resolve the conflict between the two major realms of
          Classical physics: Newtonian mechanics
        </span>
      </div>
      <div className="flex flex-col gap-y-12 sm:flex-row sm:gap-x-8">
        <MemberCard
          data={{
            url: "/members/team-member-1.png",
            name: "Erdinç ÖZGÜL",
            title: "FULLSTACK DEVELOPER",
          }}
        />
        <MemberCard
          data={{
            url: "/members/team-member-2.png",
            name: "Jerome Bell",
            title: "IBM",
          }}
        />
        <MemberCard
          data={{
            url: "/members/team-member-3.png",
            name: "Brooklyn Simmons",
            title: "eBay",
          }}
        />
        <MemberCard
          data={{
            url: "/members/team-member-4.png",
            name: "Floyd Miles",
            title: "Facebook",
          }}
        />
      </div>
      <div className="flex flex-col gap-y-12 sm:flex-row sm:gap-x-8">
        <MemberCard
          data={{
            url: "/members/team-member-1.png",
            name: "Erdinç ÖZGÜL",
            title: "FULLSTACK DEVELOPER",
          }}
        />
        <MemberCard
          data={{
            url: "/members/team-member-2.png",
            name: "Jerome Bell",
            title: "IBM",
          }}
        />
        <MemberCard
          data={{
            url: "/members/team-member-3.png",
            name: "Brooklyn Simmons",
            title: "eBay",
          }}
        />
        <MemberCard
          data={{
            url: "/members/team-member-4.png",
            name: "Floyd Miles",
            title: "Facebook",
          }}
        />
      </div>
    </section>
  );
}
