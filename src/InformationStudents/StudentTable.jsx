import { useDispatch } from 'react-redux';
import { deleteStudent, startEditStudent } from './../store/InformationStudentRedux';

const StudentTable = ({ students }) => {
  const dispatch = useDispatch();

  return (
    <table className="w-full border mt-4">
      <thead className="bg-gray-800 text-white">
        <tr>
          <th className="p-2">Mã SV</th>
          <th className="p-2">Họ tên</th>
          <th className="p-2">SĐT</th>
          <th className="p-2">Email</th>
          <th className="p-2">Hành động</th>
        </tr>
      </thead>
      <tbody>
        {students.map(sv => (
          <tr key={sv.id} className="text-center border-t">
            <td className="p-2">{sv.id}</td>
            <td className="p-2">{sv.name}</td>
            <td className="p-2">{sv.phone}</td>
            <td className="p-2">{sv.email}</td>
            <td className="p-2 space-x-2">
              <button
                onClick={() => dispatch(startEditStudent(sv))}
                className="bg-yellow-400 text-white px-3 py-1 rounded"
              >
                Sửa
              </button>
              <button
                onClick={() => dispatch(deleteStudent(sv.id))}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Xoá
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentTable;
