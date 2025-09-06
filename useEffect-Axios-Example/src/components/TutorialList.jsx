import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteForever } from "react-icons/md";

const TutorialList = ({ tutorials }) => {
  const deleteTutorial = (id) => {
    console.log(id);
  };
  // const tutorials =  [
  //   {
  //     id: 1,
  //     title: "Js",
  //     description: "Js is a programming language",
  //   },
  //   {
  //     id: 2,
  //     title: "React",
  //     description: "Js library for UI design",
  //   },
  // ];

  return (
    <div className="container mt-4">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col" className="text-center">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {tutorials.map((item) => {
            const { id, title, description } = item;
            return (
              <tr key={id}>
                <th scope="row">{id}</th>
                <td>{title}</td>
                <td>{description}</td>
                <td className="text-center text-nowrap">
                  <button>
                    {" "}
                    <CiEdit type="button" size={20} className="text-warning" />
                  </button>
                  <button>
                    <MdOutlineDeleteForever
                      type="button"
                      size={20}
                      className="text-danger"
                      onClick={() => deleteTutorial(id)}
                    />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TutorialList;
