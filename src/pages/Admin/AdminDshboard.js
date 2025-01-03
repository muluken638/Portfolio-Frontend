import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { faClipboardList, faCheckCircle, faSpinner, faClock } from '@fortawesome/free-solid-svg-icons'; 
import Card from './Cards/Card';
import ChartData from './Cards/ChartData';

function AdminDashboard() {
  const [data, setData] = useState({
    totalProjects: 0,
    completedProjects: 0,
    inProgressProjects: 0,
    futurePlanProjects: 0,
  });

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/portfolios`) // Update with your backend endpoint
      .then(response => {
        const { totalProjects, completedProjects, inProgressProjects, futurePlanProjects } = response.data;
        setData({
          totalProjects,
          completedProjects,
          inProgressProjects,
          futurePlanProjects,
        });
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
        <Card
          title="Total Projects"
          value={data.totalProjects}
          color="green"
        //   icon={faClipboardList}
        />
        <Card
          title="Completed Projects"
          value={data.completedProjects}
          color="green"
        //   icon={faCheckCircle}
        />
        <Card
          title="In Progress Projects"
          value={data.inProgressProjects}
          color="yellow"
        //   icon={faSpinner} 
        />
        <Card
          title="Future Plan Projects"
          value={data.futurePlanProjects}
          color="red"
        //   icon={faClock} 
        />
      </div>
      {/* ChartData and SatisfactionCard Row */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-5 gap-4 p-6 w-full">
      <div className="col-span-4">
          <ChartData />
        </div>
        <div className="col-span-1">
          {/* <SatisfactionCard /> */}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
