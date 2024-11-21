import React, { useEffect, useState } from 'react';

const Applications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

 
  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await fetch('http:localhost:5000/api/receiveApplication');
        const data = await response.json();
        setApplications(data); 
      } catch (error) {
        console.error('Error fetching applications:', error);
      } finally {
        setLoading(false); 
      }
    };

    fetchApplications();
  }, []);

 
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="admin-dashboard">
      <h1 className="text-2xl font-extrabold mb-4">Admin Dashboard - Applications</h1>

      {applications.length === 0 ? (
        <p>No applications have been submitted yet.</p>
      ) : (
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">ID Number</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Course</th>
              <th className="border px-4 py-2">Brief Information</th>
              <th className="border px-4 py-2">Certification Files</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application) => (
              <tr key={application._id}>
                <td className="border px-4 py-2">{application.name}</td>
                <td className="border px-4 py-2">{application.idNumber}</td>
                <td className="border px-4 py-2">{application.email}</td>
                <td className="border px-4 py-2">{application.course}</td>
                <td className="border px-4 py-2">{application.briefInformation}</td>
                <td className="border px-4 py-2">
                  {/* If there are certification files, display them as links */}
                  {application.certification.length > 0 ? (
                    <ul>
                      {application.certification.map((filePath, index) => (
                        <li key={index}>
                          <a href={`http:localhost:5000/api/receiveApplications/${filePath}`} target="_blank" rel="noopener noreferrer">
                            View Certificate {index + 1}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>No certificates uploaded</p>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Applications;
