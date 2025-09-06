import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteForever } from "react-icons/md";

const TutorialList = () => {




  return (


  <div className="container mt-4">
 <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col" className="text-center">Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td className="">
              <CiEdit type="button" size={20} className="text-warning"/>
              <MdOutlineDeleteForever type="button" size={20} className="text-danger"/>

              </td>
          </tr>
        </tbody>
      </table>
  </div>)
}

export default TutorialList