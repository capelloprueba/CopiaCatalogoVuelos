import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_KEY = 'dapps2-2025';

// Cliente axios con configuración base
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'x-api-key': API_KEY,
    'Content-Type': 'application/json',
  },
  // (opcional) timeout para no colgar la UI
  timeout: 15000,
});

export const api = {
  // Obtener todos los vuelos
  async getFlights() {
    try {
      const response = await apiClient.get('/vuelos/search', {
        params: { page: 0, size: 100 },
      });
      console.log(response.data.content);
      return response.data.content;
    } catch (error) {
      console.error('Error fetching flights:', error);
      throw error;
    }
  },

  // Cambiar estado de un vuelo
  async changeFlightStatus(id, status) {
    console.log('Status', status);
    try {
      const response = await apiClient.put(`/vuelos/${id}`, {
        estadoVuelo: status,
      });
      return response.data;
    } catch (error) {
      console.error('Error changing flight status:', error);
      throw error;
    }
  },

  // Cambiar fechas de un vuelo
  async changeFlightDate(id, nuevaAterrizaje, nuevoDespegue) {
    try {
      const response = await apiClient.put(`/vuelos/${id}`, {
        aterrizajeLocal: nuevaAterrizaje,
        despegue: nuevoDespegue,
      });
      return response.data;
    } catch (error) {
      console.error('Error changing flight date:', error);
      throw error;
    }
  },

  // Crear nuevo vuelo
  async createFlight(data) {
    try {
      const response = await apiClient.post('/vuelos', data);
      return response.data;
    } catch (error) {
      console.error('Error creating flight:', error);
      throw error;
    }
  },
};
