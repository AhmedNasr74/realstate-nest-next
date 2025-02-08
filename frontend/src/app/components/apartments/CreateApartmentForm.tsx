"use client"
import {useState} from "react";

export default function CreateApartmentForm() {

    const [formData, setFormData] = useState({
        unit_name: "",
        unit_number: "",
        project: "",
        location: "",
        price: "",
        bedrooms: "",
        bathrooms: "",
    })

    const [loading, setLoading] = useState(false);

    const [message, setMessage] = useState({
        type: 'success',
        content: ""
    });

    // Handle input changes
    const handleChange = (e: any) => {
        const {name, value, type} = e.target;
        setFormData({
            ...formData,
            [name]: type === "number" ? Number(value) || "" : value, // Convert numbers
        });
    };

    // Handle form submission
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        setMessage({type: 'unknown', content: ""});

        try {
            const response = await fetch(`http://localhost:5000/apartments`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (response.ok) {
                setMessage({type: 'success', content: "Apartment added successfully!"});
                setFormData({
                    unit_name: "",
                    unit_number: "",
                    project: "",
                    location: "",
                    price: "",
                    bedrooms: "",
                    bathrooms: "",
                }); // Reset form
            } else {
                setMessage({type: 'error', content: `Error: ${data.message?.message || data.message}`});
            }
        } catch (error) {
            setMessage({type: 'error', content: "Something went wrong!"});
        }
        setLoading(false);
    };

    return (
        <div className="mt-5">
            {message.content &&
                <p className={message.type === "error" ? "mt-3 alert alert-danger" : "mt-3 alert alert-success"}>{message.content}</p>}
            <form className="row" onSubmit={handleSubmit}>
                <div className="col-md-12 col-sm-12 mb-3">
                    <label htmlFor="unit_name" className="form-label">Unit Name</label>
                    <input type="text" onChange={handleChange} className="form-control" id="unit_name"
                           value={formData.unit_name} name="unit_name" aria-describedby="unitName"/>
                </div>

                <div className="col-md-6 col-sm-12 mb-3">
                    <label htmlFor="unit_number" className="form-label">Unit Number</label>
                    <input type="number" onChange={handleChange} className="form-control" id="unit_number"
                           value={formData.unit_number} name="unit_number" aria-describedby="unitNumber"/>
                </div>

                <div className="col-md-6 col-sm-12 mb-3">
                    <label htmlFor="project" className="form-label">Project</label>
                    <input type="text" onChange={handleChange} className="form-control" id="project"
                           value={formData.project} name="project" aria-describedby="project"/>
                </div>

                <div className="col-md-6 col-sm-12 mb-3">
                    <label htmlFor="location" className="form-label">Location</label>
                    <input type="text" onChange={handleChange} className="form-control" id="location"
                           value={formData.location} name="location" aria-describedby="location"/>
                </div>

                <div className="col-md-6 col-sm-12 mb-3">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input type="number" onChange={handleChange} className="form-control" id="price"
                           value={formData.price} name="price" aria-describedby="price"/>
                </div>

                <div className="col-md-6 col-sm-12 mb-3">
                    <label htmlFor="bedrooms" className="form-label">Bedrooms</label>
                    <input type="number" max={5} onChange={handleChange} className="form-control" id="bedrooms"
                           value={formData.bedrooms} name="bedrooms" aria-describedby="bedrooms"/>
                </div>

                <div className="col-md-6 col-sm-12 mb-3">
                    <label htmlFor="bathrooms" className="form-label">Bathrooms</label>
                    <input type="number" max={5} onChange={handleChange} className="form-control" id="bathrooms"
                           value={formData.bathrooms} name="bathrooms" aria-describedby="bathrooms"/>
                </div>

                <button type="submit" className="btn btn-primary"
                        disabled={loading}> {loading ? "Saving..." : "Save"}</button>
            </form>
        </div>
    )
}
