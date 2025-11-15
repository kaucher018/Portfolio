import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        Since 2024
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="6" text="Months professional Experience" />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number="1.5" text="Year of Hands-on Experience" />
      </div>
      <p className="text-center">
        With 6 Months Professional Experience and 1.5 years of Hands-on experience building dynamic and user-friendly full stack web
        applications.
      </p>
      {/* <ExperienceInfo number="$100k" text="Max Budget" /> */}
    </div>
  );
};

export default ExperienceTopLeft;
