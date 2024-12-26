import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import Icon from '@react-native-vector-icons/fontawesome6';
import { theme } from '../../config/theme';
import { fetchHabits } from '../../services/habits';
import EmptyHabist from './emptyStateHabit';
import NewHabitModal from './newHabit';
import { SafeAreaView } from 'react-native-safe-area-context'

interface Habit {
    id: number;
    title: string;
    description: string;
}

export interface HomeScreenProps {
    navigation: NavigationProp<any, any>
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
    const [habits, setHabits] = useState<Habit[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [openModal, setOpen] = useState<boolean>(false);

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => setOpen(true)} style={styles.addBtn}>
                    <Icon name='plus' size={15} color={theme.colors.secondary.light} iconStyle="solid" />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);


    useEffect(() => {
        setLoading(true)
        fetchHabits().then((h) => setHabits(h))
        setLoading(false)
    }, []);

    if (loading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" color="#007BFF" />
                <Text>Loading habits...</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            {habits?.length ?
                <FlatList
                    data={habits}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.habitCard}>
                            <Text style={styles.habitTitle}>{item.title}</Text>
                            <Text style={styles.habitDescription}>{item.description}</Text>
                        </View>
                    )}
                    contentContainerStyle={{ paddingBottom: 20 }}
                /> :
                <EmptyHabist onPres={() => setOpen(true)} />
            }
            <NewHabitModal modalVisible={openModal} setOpen={setOpen} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: theme.colors.background,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    habitCard: {
        backgroundColor: '#FFF',
        padding: 15,
        marginBottom: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
    },
    habitTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    habitDescription: {
        fontSize: 14,
        color: '#555',
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.primary.main,
        padding: 13,
        borderRadius: 20,
        marginLeft: 20,
        marginRight: 20,
    }
});

export default HomeScreen;
