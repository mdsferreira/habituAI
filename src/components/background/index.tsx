import React, { ReactElement, FC } from 'react'
import { StyleSheet } from 'react-native'
import { Box } from '@/components/ui'
import { theme } from '@/config/theme'

interface IBackgroundProps {
    children: ReactElement
}

export const Background: FC<IBackgroundProps> = ({ children }) => {
    return (
        <Box className='flex  pt-6 mr-6 border-l-2 border-t-2 border-primary-500'>
            {children}
        </Box>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingRight: 20,
        borderLeftColor: theme.colors.primary.main,
        borderLeftWidth: 2
    }
})