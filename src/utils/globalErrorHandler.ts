import { Alert, LogBox } from 'react-native';

// Ignore specific warnings (opcional)
LogBox.ignoreLogs(['Warning: ...']);

export const setupGlobalErrorHandler = () => {
    // Captura erros não tratados
    global.ErrorUtils.setGlobalHandler((error: any, isFatal: boolean) => {
        if (isFatal) {
            Alert.alert(
                'Unexpected Error',
                `
        An unexpected error occurred. 
        Error: ${error.message || 'Unknown error'}
      `,
                [
                    {
                        text: 'Restart App',
                        onPress: () => {
                            // Aqui você pode reiniciar o app ou encerrar
                        },
                    },
                ]
            );
        } else {
            console.error('Non-fatal error occurred:', error);
        }
    });

    // Captura rejeições de Promises não tratadas
    // process.on('unhandledRejection', (reason: any) => {
    //     console.error('Unhandled Promise Rejection:', reason);
    // });
};
