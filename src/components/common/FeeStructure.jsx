import React, { useState } from "react";

export const FeeStructure = () => {
  const headers = {
    Pre_University: ["Course", "Grade", "Duration", "Exam Body", "Tution Feee"],
    HealthCare: ["Course", "Grade", "Duration", "Exam Body", "Tution Feee"],
    Information_Technology: [
      "Course",
      "Grade",
      "Duration",
      "Exam Body",
      "Tution Feee",
    ],
    Business: ["Course", "Grade", "Duration", "Exam Body", "Tution Feee"],
  };

  const data = {
    HealthCare: [
      [
        "Caregiver Certificate",
        "KCSE Mean grade D-(minus)",
        "6 Months",
        "NITA",
        "KES 35,000",
      ],
      [
        "Diploma In Kenya Registered Community Health Nursing",
        "KCSE Mean grade C (plain) with C (plain) in Biology and English, C-(minus) in Mathematics or Physics or Chemistry",
        "3 Years",
        "NCK",
        "KES 55,000",
      ],
      [
        "Certificate in Healthcare Support Assistant",
        "KCSE Mean grade; D (plain)",
        "1 Year",
        "TVETCDACC",
        "KES 30,000",
      ],
      [
        "Certificate In Perioperative Theatre Technology",
        "KCSE Mean grade; D (plain)",
        "1 ½ Years",
        "	TVETCDACC",
        "KES 30,000",
      ],
      [
        "Diploma In Perioperative Theatre Technology",
        "	KCSE Mean grade; C- (Minus)",
        "2 Years",
        "TVETCDACC",
        "KES 35,000",
      ],
      [
        "Certificate in Health Records & IT",
        "KCSE Mean grade: D plain, Certificate in health Records level 4 or Equivalent qualifications as determined by Kenya National Qualifications Authority health",
        "1 ½ Years",
        "TVETCDACC",
        "KES 20,000",
      ],
      [
        'Diploma in Health Records & IT',
        'KCSE Mean grade: C- minus or Equivalent qualifications as determined by Kenya National Qualifications Authority or Cert in HRIT',
        '2 Years',
        'TVETCDACC',
        'KES 25,000'
      ],
      [
        'Bridging Courses for Biology',
        'KCSE Mean grade C- Minus & Below',
        '9 months',
        'KNEC',
        'KES 13,000'
      ],
      [
        'Bridging Courses for Chemistry',
        'KCSE Mean grade C- Minus & Below',
        '9 months',
        'KNEC',
        'KES 13,000'
      ],
      [
        'Bridging Courses for Mathematics',
        'KCSE Mean grade C- Minus & Below',
        '9 months',
        'KNEC',
        'KES 13,000'
      ]
    ],
    Pre_University: [
      [
        'Biology',
        'C- Minus & Below',
        '9 Months',
        '	KNEC',
        'KES 13,000'
      ],
      [
        'Chemistry',
        'C- Minus & Below',
        '9 Months',
        'KNEC',
        'KES 13,000'
      ],
      [
        'Physics',
        'C- Minus & Below',
        '9 Months',
        'KNEC',
        'KES 13,000'
      ],
      [
        'English',
        'C- Minus & Below',
        '9 Months',
        'KNEC',
        'KES 13,000'
      ],
      [
        'Mathematics',
        'C- Minus & Below',
        '9 Months',
        'KNEC',
        'KES 13,000'
      ],
      [
        'Caregiver Certificate',
        'KCSE Mean grade D-(minus)',
        '6 Months',
        'NITA',
        'KES 35,000'
      ]
    ],
    Information_Technology: [
      [
        'Computer Packages (10 Packages)',
        '-',
        '2 Months',
        '-',
        'KES 5,500'
      ],
      [
        'Graphic Design (Photoshop, Illustrator, In-design, Pagemaker, CoreDraw)',
        '-',
        '3 Months',
        '-',
        'KES 10,000'
      ],
      [
        'Computer Networking',
        '-',
        '1 Month',
        '-',
        'KES 10,000'
      ],
      [
        'Webdesign (HTML, CSS, Javascript, PHP)',
        '-',
        '2 Months',
        '-',
        'KES 10,000'
      ],
      [
        'Computer Programming (Pascal, C, C++, Visual Basic, Java, Python)',
        '-',
        '2 Months',
        '-',
        'KES 10,000'
      ],
      [
        'Computerized Accounting Packages (QuickBooks, Sage, Tally, Pastel)',
        '-',
        '2 Months',
        '-',
        'KES 10,000'
      ],
      [
        'Digital Marketing',
        '-',
        '1 Months',
        '-',
        'KES 10,000'
      ],
      [
        'Mobile Phone Repair',
        '-',
        '2 Months',
        '-',
        'KES 10,000'
      ],
      [
        'Computer Aided Design - CAD (AutoCAD, ArchiCAD)',
        '-',
        '2 Months',
        '-',
        'KES 10,000'
      ],
      [
        'Advanced Excel',
        '-',
        '2 Weeks',
        '-',
        'KES 5,000'
      ],
      [
        'Computer Repair & Maintenance',
        '-',
        '1 Month',
        '-',
        'KES 10,000'
      ],
      [
        'CCTV installation',
        '-',
        '1 Month',
        '-',
        'KES 10,000'
      ],
      [
        'CCTV Management',
        '-',
        '1 Month',
        '-',
        'KES 10,000'
      ],
      [
        'Information Management',
        '-',
        '1 Month',
        '-',
        '	KES 10,000'
      ],
      [
        'Library Archives',
        '-',
        '1 Month',
        '-',
        'KES 10,000'
      ]
    ], 
    Business: [], 
  };

  const [activeTab, setActiveTab] = useState("HealthCare");

  return (
    <div className="container mx-auto p-4">
      <div className="tabs mb-4">
        {Object.keys(headers).map((tab) => (
          <button
            key={tab}
            className={`tab-button px-4 py-2 m-1 ${
              activeTab === tab ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.replace("_", " ")}
          </button>
        ))}
      </div>
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            {headers[activeTab].map((header, index) => (
              <th
                key={index}
                className="border border-gray-300 p-2 bg-gray-100"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data[activeTab].length > 0 ? (
            data[activeTab].map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="border border-gray-300 p-2">
                    {cell}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={headers[activeTab].length}
                className="border border-gray-300 p-2 text-center"
              >
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
