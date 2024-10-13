import axios from 'axios';
import { TripState } from '../types/types';

import { API_URL } from '../config/config';

export const saveTrip = async (token: string, tripDetails: TripState) => {
    console.log('tripDetails', tripDetails);
    const response = await axios.post(`${API_URL}/api/trips`, tripDetails, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};

export const fetchTrip = async (token: string, tripId: string) => {
    const response = await axios.get(`${API_URL}/api/trips/${tripId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};

export const fetchAllTrips = async (token: string) => {
    const response = await axios.get(`${API_URL}/api/trips`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};

export const updateTrip = async (token: string, tripId: string, tripDetails: TripState) => {
    const response = await axios.put(`${API_URL}/api/trips/${tripId}`, tripDetails, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};

export const deleteTrip = async (token: string, tripId: string) => {
    const response = await axios.delete(`${API_URL}/api/trips/${tripId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};