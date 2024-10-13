import axios from 'axios';
import { TripState } from '../types/types';

export const saveTrip = async (token: string, tripDetails: TripState) => {
    const response = await axios.post('/api/trip', tripDetails, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};

export const fetchTrip = async (token: string, tripId: string) => {
    const response = await axios.get(`/api/trip/${tripId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};

export const fetchAllTrips = async (token: string) => {
    const response = await axios.get('/api/trips', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};

export const updateTrip = async (token: string, tripId: string, tripDetails: TripState) => {
    const response = await axios.put(`/api/trip/${tripId}`, tripDetails, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};

export const deleteTrip = async (token: string, tripId: string) => {
    const response = await axios.delete(`/api/trip/${tripId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};