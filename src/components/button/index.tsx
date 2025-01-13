import React, { FC, useState } from 'react'
import { Button as ButtonSG, ButtonSpinner, ButtonText } from '@/components/ui';

interface ButtonProps extends React.forwardRef<typeof ButtonSG> {
    children: string
}

const Button: FC<ButtonProps> = (props) => {
    const [isLoading, setLoading] = useState(false);

    const onPress = async (params: any) => {
        setLoading(true);
        await props.onPress(params)
        setLoading(false);
    }

    return (
        <ButtonSG {...props} onPress={onPress}  >
            {isLoading ? <ButtonSpinner /> :
                <ButtonText size="sm" >
                    {props.children}
                </ButtonText>
            }
        </ButtonSG>
    )
}

export default Button;