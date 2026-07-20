import { teamData } from "../../data/teamData";
import TeamCard from "./TeamCard";

export default function TeamGrid() {
  // First Row
  const firstRow = teamData.slice(0, 3);

  // Second Row
  const secondRow = teamData.slice(3, 6);

  return (
    <div className="mt-13 lg:mt-15">

      {/* First Row */}

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-y-10
          gap-x-8
          justify-items-center
        "
      >
        {firstRow.map((member) => (
          <TeamCard
            key={member.id}
            image={member.image}
            name={member.name}
            role={member.role}
          />
        ))}
      </div>

      {/* Second Row */}

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-y-10
          gap-x-8
          justify-items-center
          mt-10
          lg:mt-15
        "
      >
        {secondRow.map((member) => (
          <TeamCard
            key={member.id}
            image={member.image}
            name={member.name}
            role={member.role}
          />
        ))}
      </div>

    </div>
  );
}