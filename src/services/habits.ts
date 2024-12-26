import { IHabit } from "../types/theme/habit";
import api from "./api";

export const fetchHabits = async () => {
    try {
        const response = await api.get('/habits');
        return response.data.habits;
    } catch (error) {
        console.log('Error fetching habits:', error);
    }
};


export const createHabit = async (habit: IHabit) => {
    try {
        await api.post('/habits', habit);
    } catch (error) {
        console.log('Error fetching habits:', error);
    }
};