import React from 'react';
import MainLayout from '../../Layout/MainLayout';
import InputField from '../../ui/InputField'
import { FaCamera } from 'react-icons/fa';
import { RootState } from '../../../redux/store';
import { setTripDetails } from '../../../redux/slices/tripSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useSaveTrip } from '../../../hooks/useTrip';

const AddTripForm: React.FC = () => {
    const dispatch = useDispatch();
  const { tripName, destination, startDate, endDate, imagePreview } = useSelector(
    (state: RootState) => state.trip
  );


  const { mutate, isPending } = useSaveTrip();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(setTripDetails({ [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      dispatch(setTripDetails({ imagePreview: previewUrl }));
    }
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate({ tripName, destination, startDate, endDate, imagePreview });
  };




    return (
        <MainLayout>

    <form
        onSubmit={handleSubmit}
        className="max-w-5xl md:ml-28 mx-auto p-6 flex flex-col bg-white shadow-sm rounded-lg"
      >
                <h1 className="text-2xl font-bold mb-8">Add Trip</h1>
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Form Section */}
                    <div className="w-full md:w-2/3">

                        <p className=" text-gray-800 mb-6">
                            Add a trip manually below or forward your confirmation emails to <a href="mailto:plans@tripit.com" className="text-gray-900 font-bold">plans@tripit.com</a>, and we'll create the trip for you.
                        </p>

                        {/* Form Fields */}
                        <div className="space-y-6">
                            <InputField
                                label="Trip Name"
                                type="text"
                                name="tripName"
                                value={tripName}
                                onChange={handleInputChange}
                                placeholder="Enter trip name"
                                required
                            />
                            <InputField
                                label="Destination City"
                                type="text"
                                name="destination"
                                value={destination}
                                onChange={handleInputChange}
                                placeholder="Enter destination"
                                required
                            />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <InputField
                                    label="Start Date"
                                    type="date"
                                    name="startDate"
                                    value={startDate}
                                    onChange={handleInputChange}
                                    placeholder="mm/dd/yyyy"
                                    required
                                />
                                <InputField
                                    label="End Date"
                                    type="date"
                                    name="endDate"
                                    value={endDate}
                                    onChange={handleInputChange}
                                    placeholder="mm/dd/yyyy"
                                    required
                                />
                            </div>
                        </div>


                    </div>

                    {/* Photo Section */}
                    <div className="w-full md:w-1/3 flex flex-col mb-auto items-center">
                        <img
                            src={imagePreview}
                            alt="Trip Thumbnail"
                            className="w-full h-80 object-contain rounded mb-4"
                        />
                        <label
                            htmlFor="file-input"
                            className="flex items-center text-primary font-bold hover:text-secondary cursor-pointer"
                        >
                            <FaCamera className="mr-2" /> Change Photo
                            <input
                                id="file-input"
                                type="file"
                                className="hidden"
                                accept="image/*"
                                onChange={handleFileChange}
                            />
                        </label>
                    </div>

                </div>

                <div className="flex w-full md:w-2/3 justify-center md:justify-between items-center">
                    <button
                        type="button"
                        className="text-primary py-2 px-4 font-bold hover:text-secondary"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="bg-primary text-white py-2 px-4 rounded hover:bg-secondary disabled:bg-gray-300"
                        disabled={
                            !tripName ||
                            !destination ||
                            !startDate ||
                            !endDate || isPending
                        }
                    >
                             {isPending ? 'Saving...' : 'Save'}
                    </button>
                </div>
            </form>
        </MainLayout>
    );
};

export default AddTripForm;
