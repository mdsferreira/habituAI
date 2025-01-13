import { View, Text } from 'react-native'
import React from 'react'

export interface BoxProps {
    h?: number,
    w?: number,
    m?: number,
    mt?: number,
    mb?: number,
    p?: number,
    pt?: number,
    pb?: number,
    children?: any
};

const Box = ({ h, w, m, mt, mb, p, pt, pb, children }: BoxProps) => {
    return (
        <View style={{
            height: h,
            width: w,
            padding: p,
            paddingBottom: pb,
            paddingTop: pt,
            margin: m,
            marginBottom: mb,
            marginTop: mt
        }}>
            {children}
        </View>
    )
}

export default Box