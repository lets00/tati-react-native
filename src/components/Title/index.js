import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Title = () => {
    return (
        <View>
            <Text style={styles.textTitle} >Eduardo app</Text>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        'textTitle': {
            'color': 'red'
        }
    }
)

export default Title