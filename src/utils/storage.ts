import AsyncStorage from '@react-native-community/async-storage';

export function removeItem(key: string) {
  AsyncStorage.removeItem(key);
}

export async function getItem(key: string) {
  let parsedItem = null;

  try {
    parsedItem = await AsyncStorage.getItem(key);

    if (parsedItem) {
      parsedItem = JSON.parse(parsedItem);
    }
  } catch {
    parsedItem = null;
  }

  return parsedItem;
}

export async function mergeItem(key: string, value: any) {
  let stringifiedValue = value;

  try {
    const currentData = getItem(key);
    stringifiedValue = JSON.stringify({
      ...currentData,
      ...stringifiedValue,
    });
  } catch {
    throw new Error(`Could not stringify/merge ${value}`);
  }

  await AsyncStorage.setItem(key, stringifiedValue);
}

export async function setItem(key: string, value: any) {
  let stringifiedValue = value;

  try {
    stringifiedValue = JSON.stringify(stringifiedValue);
  } catch {
    throw new Error(`Could not stringify ${value}`);
  }

  await AsyncStorage.setItem(key, stringifiedValue);
}

export async function clear() {
  await AsyncStorage.clear();
}

