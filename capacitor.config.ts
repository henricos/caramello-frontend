import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
    appId: 'com.caramello.app',
    appName: 'Caramello',
    webDir: 'dist',
    server: {
        androidScheme: 'https',
        // To access the local API during development with Android Emulator use 10.0.2.2
        // To access the local API from a physical device, use your local IP, e.g., 192.168.x.x
        // cleartext: true 
    }
};

export default config;
