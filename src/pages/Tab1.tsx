import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Tab1: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Tab 1</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <div className="ion-padding">
                    <h2>Bem-vindo ao Caramello</h2>
                    <p>Esta é uma página de exemplo.</p>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Tab1;
