import React from 'react'
import { useSelector } from "react-redux";
import { useState } from 'react';
import StudentForm from './studentForm';
import SearchBox from './SearchBox';
import StudentTable from './StudentTable';

export default function InformationStudents() {
  const { students } = useSelector(state => state.student);
  const [form, setForm] = useState({ id: '', name: '', phone: '', email: '' });
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = students.filter(sv =>
    sv.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sv.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow rounded space-y-4">
      <h2 className="text-xl font-semibold">Thông tin sinh viên</h2>
      <StudentForm form={form} setForm={setForm} />
      <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <StudentTable students={filtered} />
    </div>
  );
}
