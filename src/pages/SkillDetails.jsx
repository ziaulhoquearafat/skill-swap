import { useLoaderData, useParams } from "react-router";

const SkillDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  console.log(data, id);

  return (
    <div>
      <div>
        <figure>
          <img src={data.image} alt="" className="w-full" />
        </figure>
      </div>
    </div>
  );
};

export default SkillDetails;
