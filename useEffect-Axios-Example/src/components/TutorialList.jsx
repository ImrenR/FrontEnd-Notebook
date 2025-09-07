import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteForever } from "react-icons/md";
import axios from "axios";
import EditTutorial from "./EditTutorial";
import { useState } from "react";

const TutorialList = ({ tutorials, getTutorial }) => {
  const [editData, setEditData] = useState({}); // start as object

  const deleteTutorial = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_APP_URL}${id}/`);
    } catch (error) {
      console.error("Error deleting tutorial:", error);
    } finally {
      getTutorial();
    }
  };

  return (
    <div className="container mt-4">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col" className="text-center">
              Actions
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
                  {/* Edit button */}
                  <button
                    type="button"
                    className="btn btn-link p-0 me-2"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => setEditData(item)}
                  >
                    <CiEdit size={20} className="text-warning" />
                  </button>

                  {/* Delete button */}
                  <button
                    type="button"
                    className="btn btn-link p-0"
                    onClick={() => deleteTutorial(id)}
                  >
                    <MdOutlineDeleteForever size={20} className="text-danger" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Modal for editing */}
      <EditTutorial editData={editData} getTutorial={getTutorial} />
    </div>
  );
};

export default TutorialList;
