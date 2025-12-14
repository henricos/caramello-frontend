import axios from 'axios';

class ApiService {
    private api;

    constructor() {
        this.api = axios.create({
            baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000',
            timeout: 5000,
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }

    public async fetchStatus(): Promise<string> {
        try {
            const response = await this.api.get('/api/status');
            return response.data.status;
        } catch (error) {
            console.error('Error connecting to API:', error);
            return 'Error connecting to API';
        }
    }

    // Add more methods here
}

export default new ApiService();
