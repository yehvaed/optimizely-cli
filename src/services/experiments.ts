import axios from "axios"
import { Experiments } from '../../types/experiments';

const token = process.env["TOKEN"]; 

const optimizelyHttpClient = axios.create({
    baseURL: "https://api.optimizely.com",
    headers: {
        'Authorization': `Bearer ${token}`,
    }
})

export const getExperiment = (experimentId: number) => {
    return optimizelyHttpClient.get<Experiments>(`/v2/experiments/${experimentId}`)
}