import React, { useState } from 'react';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonInput,
    IonItem,
    IonLabel,
    IonButton,
    IonLoading,
    IonToast
} from '@ionic/react';
import './LoginPage.css'; // Optional: if we need specific styles not covered by utilities

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showLoading, setShowLoading] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    const handleLogin = async () => {
        setShowLoading(true);
        // Simulate API call
        setTimeout(() => {
            setShowLoading(false);
            setToastMessage(`Login attempt for: ${email}`);
            setShowToast(true);
        }, 1500);
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className="ion-padding">
                <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
                    <IonItem>
                        <IonLabel position="floating">Email</IonLabel>
                        <IonInput
                            value={email}
                            type="email"
                            onIonChange={e => setEmail(e.detail.value!)}
                        />
                    </IonItem>

                    <IonItem>
                        <IonLabel position="floating">Senha</IonLabel>
                        <IonInput
                            value={password}
                            type="password"
                            onIonChange={e => setPassword(e.detail.value!)}
                        />
                    </IonItem>

                    <div className="ion-padding-top ion-text-center">
                        <IonButton expand="block" onClick={handleLogin}>
                            Entrar
                        </IonButton>
                    </div>
                </div>

                <IonLoading
                    isOpen={showLoading}
                    message={'Autenticando...'}
                />
                <IonToast
                    isOpen={showToast}
                    onDidDismiss={() => setShowToast(false)}
                    message={toastMessage}
                    duration={2000}
                />
            </IonContent>
        </IonPage>
    );
};

export default LoginPage;
