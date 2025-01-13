
import React, { useState } from "react";
import { useToast, Toast, ToastTitle, ToastDescription } from "@/components/ui/toast"
import { Icon, HStack, VStack } from "@/components/ui";
import { CloseIcon, HelpCircleIcon } from "@/components/ui/icon";
import { Pressable } from "react-native";

type ToatType = 'error' | 'success';
type ToatTypes = { [t in ToatType]: ToatType };

export const toatType: ToatTypes = { error: 'error', success: 'success' }

const useToater = (type: ToatType, message?: string) => {
    const toast = useToast()
    const [toastId, setToastId] = useState("")

    const handleToast = () => {
        if (!toast.isActive(toastId)) {
            showNewToast()
        }
    }

    const showNewToast = () => {
        const newId = `${Math.random()}`;

        setToastId(newId);

        if (type === toatType.error) {
            toast.show({
                id: newId,
                placement: 'top',
                duration: 3000,
                render: ({ id }) => {
                    const uniqueToastId = "toast-" + id;
                    return (
                        <Toast
                            action="error"
                            variant="outline"
                            nativeID={uniqueToastId}
                            className="p-4 gap-6 border-error-500 w-full shadow-hard-5 max-w-[443px] flex-row justify-between"
                        >
                            <HStack space="md">
                                <Icon
                                    as={HelpCircleIcon}
                                    className="stroke-error-500 mt-0.5"
                                />
                                <VStack space="xs">
                                    <ToastTitle className="font-semibold text-error-500">Error!</ToastTitle>
                                    <ToastDescription size="sm">
                                        Something went wrong.
                                    </ToastDescription>
                                </VStack>
                            </HStack>
                            <HStack className="min-[450px]:gap-3 gap-1">
                                <Pressable onPress={() => toast.close(id)}>
                                    <Icon as={CloseIcon} />
                                </Pressable>
                            </HStack>
                        </Toast>
                    );
                },
            });
        }

        if (type === toatType.success) {
            toast.show({
                id: newId,
                placement: 'top',
                duration: 3000,
                render: ({ id }) => {
                    const uniqueToastId = "toast-" + id;
                    return (
                        <Toast
                            action="success"
                            variant="outline"
                            nativeID={uniqueToastId}
                            className="p-4 gap-6 border-error-500 w-full shadow-hard-5 max-w-[443px] flex-row justify-between"
                        >
                            <HStack space="md">
                                <Icon
                                    as={HelpCircleIcon}
                                    className="stroke-success-500 mt-0.5"
                                />
                                <VStack space="xs">
                                    <ToastTitle className="font-semibold text-success-500">Success!</ToastTitle>
                                    <ToastDescription size="sm">
                                        {message}
                                    </ToastDescription>
                                </VStack>
                            </HStack>
                            <HStack className="min-[450px]:gap-3 gap-1">
                                <Pressable onPress={() => toast.close(id)}>
                                    <Icon as={CloseIcon} />
                                </Pressable>
                            </HStack>
                        </Toast>
                    );
                },
            });
        }

    }

    return {
        handleToast
    }
};


export default useToater