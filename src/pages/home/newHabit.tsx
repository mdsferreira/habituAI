import { Modal, ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icon from '@react-native-vector-icons/fontawesome6'
import { HABIT_ICONS } from '@/config/constants'
import { IHabit } from '@/types/habit'
import { theme } from '@/config/theme'
import { Button, ColorSelect, Input, Text } from '@/components'
import { createHabit } from '@/services/habits'

export interface NewHabitModalProps {
    modalVisible: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
};

const defaultFrom: IHabit = {
    color: theme.colors.primary.main,
    name: "",
    icon: "",
    description: "",
    frequency: ""
}

const frequencyIcons = { daily: "calendar-day", weekly: "calendar-week", monthly: "calendar" }

const NewHabitModal: React.FC<NewHabitModalProps> = ({ modalVisible, setOpen }) => {
    const [habitForm, setHabitForm] = useState(defaultFrom);
    const [colorSelection, setColorSelection] = useState(false);
    const { color, name, icon: hicon, description, frequency } = habitForm;

    const setColor = (color: string) => setHabitForm({ ...habitForm, color })
    const setName = (name: string) => setHabitForm({ ...habitForm, name, icon: "star" })
    const setIcon = (icon: string, name: string) => setHabitForm({ ...habitForm, icon: hicon === icon ? "" : icon, name })
    const setDescription = (description: string) => setHabitForm({ ...habitForm, description })
    const setFrequency = (frequency: string) => setHabitForm({ ...habitForm, frequency })

    const saveHabit = () => {
        createHabit(habitForm);
        setOpen(false);
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setOpen(false)}
        >
            <View style={{ backgroundColor: color, ...styles.modalOverlay }}>
                <View style={{ backgroundColor: color, ...styles.header }}>
                    <Text fontVariant='md' fontWeight={700} color={theme.colors.secondary.light} variant='primary'>Create your new habit</Text>
                    <TouchableOpacity onPress={() => setOpen(false)}>
                        <Icon name='xmark' size={20} color={theme.colors.secondary.light} iconStyle="solid" />
                    </TouchableOpacity>
                </View>
                {colorSelection ?
                    <ColorSelect setColor={setColor} setColorSelection={setColorSelection} />
                    : <View style={styles.modalContent}>
                        <View style={styles.colorContainer}>
                            <TouchableOpacity onPress={() => setColorSelection(true)} style={{ backgroundColor: color, ...styles.colorBtn }} />
                            <Text fontVariant='sm' color='white' variant='body' marginLeft={10}>Select color</Text>
                        </View>
                        <View style={styles.colorContainer}>
                            <Icon name={hicon || "star"} size={20} color={color} iconStyle="solid" />
                            <Input
                                color="white"
                                width='92%'
                                placeholderTextColor="#cecece"
                                borderColor={color} value={name} onChangeText={setName} placeholder={"Custom Activity"} textContentType='name' />
                        </View>
                        <ScrollView horizontal style={styles.types}>
                            {Object.keys(HABIT_ICONS).map((type) => {
                                const { label, icon } = HABIT_ICONS[type];
                                return (
                                    <TouchableOpacity key={icon} onPress={() => setIcon(icon, label)}
                                        style={{ borderColor: color, backgroundColor: hicon === icon ? color : theme.colors.black, ...styles.typeSelect }}>
                                        <Icon name={icon} size={20} color={hicon === icon ? theme.colors.black : color} iconStyle="solid" marginRight={10} />
                                        <Text fontVariant='sm' variant='body' color={hicon === icon ? theme.colors.black : 'white'}>{label}</Text>
                                    </TouchableOpacity>
                                )
                            })}
                        </ScrollView>
                        <View style={styles.block}>
                            <Input
                                color="white"
                                placeholderTextColor="#cecece"
                                borderColor={color} value={description} onChangeText={setDescription} placeholder={"Describe your habit"} textContentType='name' />
                        </View>
                        <Text fontVariant='sm' color='white' variant='body' marginLeft={10}>Frequency</Text>
                        <ScrollView horizontal style={styles.types}>
                            {['daily', 'weekly', 'monthly'].map((freq) => (
                                <TouchableOpacity key={freq} onPress={() => setFrequency(freq)}
                                    style={{ borderColor: color, backgroundColor: frequency === freq ? color : theme.colors.black, ...styles.typeSelect }}>
                                    <Icon name={frequencyIcons[freq]} size={20} color={frequency === freq ? theme.colors.black : color} iconStyle="solid" marginRight={10} />
                                    <Text fontVariant='sm' variant='body' color={frequency === freq ? theme.colors.black : 'white'}>{freq}</Text>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                        <View style={styles.block}>
                            <Button onPress={saveHabit}>Save</Button>
                        </View>
                    </View>}
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalOverlay: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        height: 100,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 10
    },
    modalContent: {
        padding: 30,
        backgroundColor: theme.colors.black,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    colorContainer: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    colorBtn: {
        width: 40,
        height: 40,
        borderRadius: 20
    },
    block: {
        marginTop: 20,
        marginBottom: 70
    },
    types: {
        height: 100,
        marginTop: 20
    },
    typeSelect: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderWidth: 3,
        borderRadius: 20,
        marginRight: 15
    }
})

export default NewHabitModal;