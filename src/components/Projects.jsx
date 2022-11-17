import { projects } from "../data";
import Card from "../components/Card";

const Projects = () => {
  return (
    <div className="relative max-w-screen-xl mx-auto pb-10">
      <div className="z-10 flex flex-wrap justify-center">
        {projects.map(
          ({
            id,
            client,
            description,
            image,
            pictured,
            scope,
            result,
            customClass,
          }) => {
            return (
              <Card
                key={id}
                client={client}
                description={description}
                pictured={pictured}
                image={image}
                scope={scope}
                result={result}
                customClass={customClass}
              ></Card>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Projects;
