import api from "./api";

export const fetchHabits = async () => {
    try {
        const response = await api.get('/habits');
        return response.data.habits;
    } catch (error) {
        console.log('Error fetching habits:', error);
    }
};