import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then(res => res.json())
      .then(data => setServices(data))
  }, []);

  return (
    <div className="mt-5">
      <h2 className="text-success">Trusted Travel Agency</h2>
      <div className="row m-3">
        {services.map((service) => (
          <Service key={service.id} service={service}>
            {''}
          </Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
