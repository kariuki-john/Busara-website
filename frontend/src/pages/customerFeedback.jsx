import React, { useEffect, useState } from "react";

const CustomerFeedback = () => {
  const [feedback, setFeedback] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFeedback, setSelectedFeedback] = useState(null);

  // Fetch feedback from the backend
  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/getComments");
        if (!response.ok) {
          throw new Error("Failed to fetch feedback");
        }
        const data = await response.json();
        setFeedback(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFeedback();
  }, []);

  // Open the confirmation modal
  const openModal = (feedbackItem) => {
    setSelectedFeedback(feedbackItem);
    setIsModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedFeedback(null);
  };

  // Delete feedback
  const confirmDeleteFeedback = async () => {
    if (!selectedFeedback) return;

    try {
      const response = await fetch(
        `http://localhost:5000/api/deleteComment/${selectedFeedback._id}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        setFeedback((prevFeedback) =>
          prevFeedback.filter((item) => item._id !== selectedFeedback._id)
        );
        closeModal();
      } else {
        alert("Failed to delete feedback");
      }
    } catch (error) {
      console.error("Error deleting feedback:", error);
    }
  };

  // Render loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Render error state
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Render feedback list
  return (
    <div className="customer-feedback">
      <h1 className="text-2xl font-bold mb-4">Customer Feedback</h1>

      {feedback.length === 0 ? (
        <p>No feedback available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {feedback.map((item) => (
            <div
              key={item._id}
              className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
            >
              <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Email:</strong> {item.email}
              </p>
              <p className="text-gray-700 mb-4">{item.message}</p>
              <button
                onClick={() => openModal(item)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <p className="text-lg">
              Are you sure you want to delete feedback from{" "}
              <strong>{selectedFeedback.name}</strong>?
            </p>
            <div className="mt-4 flex justify-end space-x-4">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-300 text-black rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={confirmDeleteFeedback}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerFeedback;
