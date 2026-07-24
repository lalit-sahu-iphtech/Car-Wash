import { teamData } from "../../data/teamData";
import TeamCard from "./TeamCard";

export default function TeamGrid() {
  return (
    <div className="mt-13 lg:mt-15">

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
        {teamData.map((member) => (
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