import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addStudent,
  updateStudent,
  cancelEdit
} from './../store/InformationStudentRedux';

const StudentForm = ({ form, setForm }) => {
  const dispatch = useDispatch();
  const { editingStudent } = useSelector(state => state.student);

  useEffect(() => {
    if (editingStudent) setForm(editingStudent);
  }, [editingStudent]);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const { id, name, phone, email } = form;
    if (!id || !name || !phone || !email) {
      alert("Vui lòng nhập đầy đủ");
      return;
    }

    if (editingStudent) dispatch(updateStudent(form));
    else dispatch(addStudent(form));

    setForm({ id: '', name: '', phone: '', email: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 mb-4">
      <input name="id" placeholder="Mã SV" value={form.id} onChange={handleChange} disabled={!!editingStudent}
        className="p-2 border rounded" />
      <input name="name" placeholder="Họ tên" value={form.name} onChange={handleChange}
        className="p-2 border rounded" />
      <input name="phone" placeholder="SĐT" value={form.phone} onChange={handleChange}
        className="p-2 border rounded" />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange}
        className="p-2 border rounded" />
      <div className="col-span-2 space-x-2">
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
          {editingStudent ? 'Cập nhật' : 'Thêm sinh viên'}
        </button>
        {editingStudent && (
          <button type="button" onClick={() => {
            dispatch(cancelEdit());
            setForm({ id: '', name: '', phone: '', email: '' });
          }} className="bg-gray-500 text-white px-4 py-2 rounded">
            Huỷ
          </button>
        )}
      </div>
    </form>
  );
};

export default StudentForm;
