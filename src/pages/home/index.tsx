import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import Icon from '@react-native-vector-icons/fontawesome6';
import { theme } from '@/config/theme';
import { fetchHabits } from '@/services/habits';
import { Background } from '@/components/background';
import EmptyHabit from './emptyStateHabit';
import NewHabitModal from './newHabit';
import { IHabit } from '@/types/habit';
import { HabitItem } from '@/components';

export interface HomeScreenProps {
    navigation: NavigationProp<any, any>
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
    const [habits, setHabits] = useState<IHabit[]>([]);
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
        <Background>
            <>
                {habits?.length ?
                    <FlatList
                        data={habits}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <HabitItem item={item} />
                        )}
                        contentContainerStyle={{ paddingBottom: 20 }}
                    /> :
                    <EmptyHabit onPres={() => setOpen(true)} />
                }
                <NewHabitModal modalVisible={openModal} setOpen={setOpen} />
            </>
        </Background>
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
        borderRadius: 2,
        marginLeft: 20,
        marginRight: 20,
    }
});

export default HomeScreen;
