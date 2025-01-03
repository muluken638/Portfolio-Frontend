import React, { useState, useEffect } from "react";
import axios from "axios";

const PortfolioManager = () => {
  const [portfolios, setPortfolios] = useState([]);
  const [filteredPortfolios, setFilteredPortfolios] = useState([]);
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [portfoliosPerPage] = useState(5);
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    description:"",
    coverImage: null,
    githubLink: "",
    liveDemoLink: "",
    galleryImages: [],
    status: "onprogress", // Default status value
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchPortfolios = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/portfolios`
        );
        setPortfolios(response.data.portfolios);
        setFilteredPortfolios(response.data.portfolios);
      } catch (error) {
        console.error("Error fetching portfolios:", error);
      }
    };
    fetchPortfolios();
  }, []);

  const handleFilter = (e) => {
    const value = e.target.value.toLowerCase();
    setFilter(value);
    setFilteredPortfolios(
      portfolios.filter((portfolio) =>
        portfolio.title.toLowerCase().includes(value)
      )
    );
  };

  const indexOfLastPortfolio = currentPage * portfoliosPerPage;
  const indexOfFirstPortfolio = indexOfLastPortfolio - portfoliosPerPage;
  const currentPortfolios = filteredPortfolios.slice(
    indexOfFirstPortfolio,
    indexOfLastPortfolio
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleAddPortfolio = () => {
    setIsEditing(false);
    setFormData({
      id: "",
      title: "",
      coverImage: null,
      githubLink: "",
      liveDemoLink: "",
      galleryImages: [],
      status: "onprogress", // Reset to default
    });
    setShowModal(true);
    setIsSuccess(null);
    setErrorMessage("");
  };

  const handleEditPortfolio = (portfolio) => {
    setIsEditing(true);
    setFormData({
      id: portfolio._id,
      title: portfolio.title,
      description:portfolio.description,
      coverImage: null,
      githubLink: portfolio.githubLink,
      liveDemoLink: portfolio.liveDemoLink,
      galleryImages: portfolio.galleryImages || [],
      status: portfolio.status || "onprogress", // Use existing status or default to 'onprogress'
    });
    setShowModal(true);
    setIsSuccess(null);
    setErrorMessage("");
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      if (name === "galleryImages") {
        setFormData({
          ...formData,
          galleryImages: [...formData.galleryImages, ...files],
        });
      } else {
        setFormData({
          ...formData,
          coverImage: files[0],
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleRemoveImage = (index) => {
    const updatedGalleryImages = formData.galleryImages.filter(
      (_, i) => i !== index
    );
    setFormData({
      ...formData,
      galleryImages: updatedGalleryImages,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSuccess(null);
    setErrorMessage("");
  
    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("description", formData.description);

    if (formData.coverImage) {
      formDataToSend.append("coverImage", formData.coverImage);
    }
    formDataToSend.append("githubLink", formData.githubLink);
    formDataToSend.append("liveDemoLink", formData.liveDemoLink);
    
    formDataToSend.append("status", formData.status); // Add status to form data
  
    // Handle gallery images
    if (formData.galleryImages.length > 0) {
      formData.galleryImages.forEach((image) => {
        console.log("Appending image: ", image);  // Check if images are valid
        formDataToSend.append("galleryImages", image);
      });
    }
  
    try {
      if (isEditing) {
        await axios.put(
          `${process.env.REACT_APP_API_URL}/portfolios/${formData.id}`,
          formDataToSend,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
        setIsSuccess("Portfolio updated successfully!");
      } else {
        await axios.post(
          `${process.env.REACT_APP_API_URL}/portfolios`,
          formDataToSend,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
        setIsSuccess("Portfolio added successfully!");
      }
    } catch (error) {
      setErrorMessage("An error occurred while saving the portfolio.");
      console.error("Error saving portfolio:", error);
    } finally {
      setIsLoading(false);
      setShowModal(false);
      window.location.reload(); // Refresh to fetch updated data
    }
  };
  

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/portfolios/${id}`);

      setPortfolios(portfolios.filter((portfolio) => portfolio._id !== id));
      setFilteredPortfolios(
        filteredPortfolios.filter((portfolio) => portfolio._id !== id)
      );
    } catch (error) {
      console.error("Error deleting portfolio:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold">Portfolio Manager</h2>

      {/* Status Messages */}
      {isLoading && <div className="text-blue-500">Loading...</div>}
      {isSuccess && <div className="text-green-500">{isSuccess}</div>}
      {errorMessage && <div className="text-red-500">{errorMessage}</div>}

      {/* Filter Section */}
      <div className="flex justify-between items-center mt-4">
        <input
          type="text"
          placeholder="Search by title"
          value={filter}
          onChange={handleFilter}
          className="p-2 border border-gray-300 rounded w-1/3"
        />
        <button
          onClick={handleAddPortfolio}
          className="bg-blue-600 text-white py-2 px-4 rounded"
        >
          Add New Portfolio
        </button>
      </div>

      {/* Portfolio Table */}
      <table className="table-auto w-full mt-4 border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Title</th>
            <th className="border border-gray-300 px-4 py-2">GitHub Link</th>
            <th className="border border-gray-300 px-4 py-2">Live Demo</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
            <th className="border border-gray-300 px-4 py-2">Cover Image</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentPortfolios.map((portfolio) => (
            <tr key={portfolio._id}>
              <td className="border border-gray-300 px-4 py-2">
                {portfolio.title}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <a
                  href={portfolio.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <a
                  href={portfolio.liveDemoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {portfolio.status}
              </td>
              
              <td className=" place-items-center border border-gray-300 px-4 py-1">
              <img src={`http://localhost:5002/${portfolio.coverImage}`} alt={portfolio.title} className="w-16 h-16 object-cover p-1  rounded-lg" />
              </td>

              <td className="border border-gray-300 px-4 py-2 flex justify-between items-center">
                <button
                  onClick={() => handleEditPortfolio(portfolio)}
                  className="bg-yellow-400 text-white py-1 px-2 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(portfolio._id)}
                  className="bg-red-600 text-white py-1 px-2 rounded ml-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="mt-4 float-end">
        {Array.from(
          { length: Math.ceil(filteredPortfolios.length / portfoliosPerPage) },
          (_, index) => index + 1
        ).map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className="bg-blue-500 text-white py-1 px-3 rounded mr-2"
          >
            {number}
          </button>
        ))}
      </div>

      {/* Modal Form for Add/Edit Portfolio */}
{showModal && (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50">
    <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 max-w-4xl">
      <h3 className="text-xl sm:text-2xl font-bold mb-4 text-center">
        {isEditing ? "Edit Portfolio" : "Add New Portfolio"}
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4 overflow-y-auto max-h-[75vh]">
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full rounded-md text-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="coverImage" className="block text-sm font-medium mb-1">
            Cover Image
          </label>
          <input
            type="file"
            id="coverImage"
            name="coverImage"
            accept="image/*"
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full rounded-md text-sm"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <div className="w-full sm:w-1/2">
            <label htmlFor="githubLink" className="block text-sm font-medium mb-1">
              GitHub Link
            </label>
            <input
              type="url"
              id="githubLink"
              name="githubLink"
              value={formData.githubLink}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full rounded-md text-sm"
            />
          </div>
          <div className="w-full sm:w-1/2">
            <label htmlFor="liveDemoLink" className="block text-sm font-medium mb-1">
              Live Demo Link
            </label>
            <input
              type="url"
              id="liveDemoLink"
              name="liveDemoLink"
              value={formData.liveDemoLink}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full rounded-md text-sm"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Gallery Images</label>
          <input
            type="file"
            name="galleryImages"
            multiple
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
          />
          <div className="mt-2">
            {formData.galleryImages &&
              formData.galleryImages.map((image, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm">{image.name}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(index)}
                    className="ml-2 text-red-600 text-sm"
                  >
                    Remove
                  </button>
                </div>
              ))}
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium mb-1">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="bg-gray-100 p-3 h-40 w-full sm:h-60 border border-gray-300 outline-none rounded-md text-sm"
            spellCheck="false"
            placeholder="Describe everything about this post here"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="status" className="block text-sm font-medium mb-1">
            Status
          </label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full rounded-md text-sm"
          >
            <option value="onprogress">On Progress</option>
            <option value="finished">Finished</option>
            <option value="future plan">Future Plan</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded w-full text-sm"
          disabled={isLoading}
        >
          {isLoading ? "Saving..." : isEditing ? "Save Changes" : "Add Portfolio"}
        </button>
      </form>
    </div>
  </div>
)}

    </div>
  );
};

export default PortfolioManager;
