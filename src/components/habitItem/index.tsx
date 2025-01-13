import React, { FC } from 'react'
import classNames from 'classnames'
import { IHabit } from '@/types/habit'
import { Box, Text } from '../ui'

interface HabitItemProps {
    item: IHabit
}

const HabitItem: FC<HabitItemProps> = ({ item }) => {
    return (
        <Box className='flex-row flex-1 items-center w-screen mb-5'>
            <Box className='flex h-0.5 w-10 bg-primary-500' />
            <Box className={classNames('flex  w-96 bg-primary-0 p-5 border-radius-15 bg-primary-100', { [item.color]: true })}>
                <Text size='lg' bold className='text-black'>{item.name}</Text>
                <Text size='md' >{item.description}</Text>
            </Box>
        </Box>
    )
}

export default HabitItem

